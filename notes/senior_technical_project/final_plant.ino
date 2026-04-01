#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <Wire.h>
#include <DFRobot_SHT3x.h>
#include <WiFi.h>
#include <WebSocketsServer.h>
#include <time.h>

#define I2C_SDA 21
#define I2C_SCL 22

TwoWire I2CBus = TwoWire(0);
DFRobot_SHT3x sht3x(&I2CBus, 0x44);

#define TFT_CS   5
#define TFT_DC   2
#define TFT_RST  4

int lights_on = 1;
int water_on = 0;

int scheduledStartMinutes = 0;
int scheduledDurationMinutes = 0;
bool scheduleEnabled = false;

const int moistureTriggerPercent = 50;
const unsigned long wateringDurationMs = 5000;
const unsigned long wateringCooldownMs = 300000; // 5 minutes

bool autoWaterEnabled = true;
bool wateringPulseActive = false;
unsigned long wateringPulseStart = 0;
unsigned long lastWateringTime = 0;

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);

// WiFi
const char* ssid = "pump";
const char* password = "pump4duck123god$";

// WebSocket server on port 81
WebSocketsServer webSocket = WebSocketsServer(81);

int moisturePercent(int rawValue) {
  const int wetValue = 1500;
  const int dryValue = 3000;

  if (rawValue <= wetValue) return 100;
  if (rawValue >= dryValue) return 0;

  return (dryValue - rawValue) * 100 / (dryValue - wetValue);
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  switch (type) {
    case WStype_DISCONNECTED:
      Serial.printf("[%u] Disconnected\n", num);
      break;

    case WStype_CONNECTED: {
      IPAddress ip = webSocket.remoteIP(num);
      Serial.printf("[%u] Connected from %d.%d.%d.%d\n", num, ip[0], ip[1], ip[2], ip[3]);
      webSocket.sendTXT(num, "ESP32 connected");
      break;
    }

    case WStype_TEXT: {
      String msg = String((char*)payload);
      msg.trim();
      Serial.printf("[%u] Received: %s\n", num, msg.c_str());

      int water_level = digitalRead(34);
      int soil_1 = analogRead(35);
      int soil_2 = analogRead(32);
      int soil1Percent = moisturePercent(soil_1);
      int soil2Percent = moisturePercent(soil_2);

      if (msg == "status") {
        String reply = "";

        struct tm timeinfo;
        if (getLocalTime(&timeinfo)) {
          reply += "time=";
          if (timeinfo.tm_hour < 10) reply += "0";
          reply += String(timeinfo.tm_hour);
          reply += ":";
          if (timeinfo.tm_min < 10) reply += "0";
          reply += String(timeinfo.tm_min);
        } else {
          reply += "time=unavailable";
        }

        reply += ", lights_on=" + String(lights_on);
        reply += ", water=" + String(water_level);
        reply += ", pump_on=" + String(water_on);
        reply += ", soil1_pct=" + String(soil1Percent);
        reply += ", soil2_pct=" + String(soil2Percent);
        reply += ", soil1_raw=" + String(soil_1);
        reply += ", soil2_raw=" + String(soil_2);
        reply += ", tempC=" + String(sht3x.getTemperatureC());
        reply += ", humidity=" + String(sht3x.getHumidityRH());
        reply += ", auto_water=" + String(autoWaterEnabled ? "on" : "off");

        if (scheduleEnabled) {
          reply += ", schedule=";
          int schedHour = scheduledStartMinutes / 60;
          int schedMin = scheduledStartMinutes % 60;
          if (schedHour < 10) reply += "0";
          reply += String(schedHour);
          reply += ":";
          if (schedMin < 10) reply += "0";
          reply += String(schedMin);
          reply += " for " + String(scheduledDurationMinutes) + " min";
        } else {
          reply += ", schedule=disabled";
        }

        webSocket.sendTXT(num, reply);
      }
      else if (msg == "lights on") {
        scheduleEnabled = false;
        lights_on = 1;
        webSocket.sendTXT(num, "OK lights on");
      }
      else if (msg == "lights off") {
        scheduleEnabled = false;
        lights_on = 0;
        webSocket.sendTXT(num, "OK lights off");
      }
      else if (msg == "water off") {
        water_on = 0;
        wateringPulseActive = false;
        autoWaterEnabled = false;
        webSocket.sendTXT(num, "OK water off");
      }
      else if (msg == "water on") {
        water_on = 1;
        wateringPulseActive = false;
        autoWaterEnabled = false;
        webSocket.sendTXT(num, "OK water on");
      }
      else if (msg == "auto water on") {
        autoWaterEnabled = true;
        webSocket.sendTXT(num, "OK auto water on");
      }
      else if (msg == "auto water off") {
        autoWaterEnabled = false;
        wateringPulseActive = false;
        water_on = 0;
        webSocket.sendTXT(num, "OK auto water off");
      }
      else if (msg == "schedule off") {
        scheduleEnabled = false;
        webSocket.sendTXT(num, "OK schedule off");
      }
      else if (msg.startsWith("start ")) {
        int firstSpace = msg.indexOf(' ');
        int secondSpace = msg.indexOf(' ', firstSpace + 1);

        if (secondSpace == -1) {
          webSocket.sendTXT(num, "invalid format, use: start HH:MM durationMinutes");
          return;
        }

        String timeStr = msg.substring(firstSpace + 1, secondSpace);
        String durationStr = msg.substring(secondSpace + 1);
        timeStr.trim();
        durationStr.trim();

        int colonIndex = timeStr.indexOf(':');
        if (colonIndex == -1) {
          webSocket.sendTXT(num, "invalid time, use HH:MM");
          return;
        }

        String hourStr = timeStr.substring(0, colonIndex);
        String minuteStr = timeStr.substring(colonIndex + 1);

        int startHour = hourStr.toInt();
        int startMinute = minuteStr.toInt();
        int durationMinutes = durationStr.toInt();

        if (startHour < 0 || startHour > 23 || startMinute < 0 || startMinute > 59 || durationMinutes <= 0) {
          webSocket.sendTXT(num, "invalid values");
          return;
        }

        scheduledStartMinutes = startHour * 60 + startMinute;
        scheduledDurationMinutes = durationMinutes;
        scheduleEnabled = true;

        String reply = "OK start set to ";
        if (startHour < 10) reply += "0";
        reply += String(startHour);
        reply += ":";
        if (startMinute < 10) reply += "0";
        reply += String(startMinute);
        reply += " for ";
        reply += String(durationMinutes);
        reply += " minutes";

        webSocket.sendTXT(num, reply);
      }
      else {
        webSocket.sendTXT(num, "unknown command");
      }
      break;
    }

    default:
      break;
  }
}

void setup() {
  Serial.begin(9600);
  I2CBus.begin(I2C_SDA, I2C_SCL);

  while (sht3x.begin() != 0) {
    Serial.println("Failed to initialize the chip, please confirm the chip connection");
    delay(1000);
  }

  Serial.print("chip serial number: ");
  Serial.println(sht3x.readSerialNumber());

  if (!sht3x.softReset()) {
    Serial.println("Failed to reset the chip");
  }

  if (!sht3x.startPeriodicMode(sht3x.eMeasureFreq_Hz5)) {
    Serial.println("Failed to enter the periodic mode");
  }
  Serial.println("------------------Read data in cycle measurement mode-----------------------");

  pinMode(34, INPUT);
  pinMode(35, INPUT);
  pinMode(32, INPUT);
  pinMode(33, OUTPUT);
  pinMode(25, OUTPUT);

  SPI.begin(18, -1, 23, 5);

  tft.initR(INITR_BLACKTAB);
  tft.setRotation(1);
  tft.fillScreen(ST77XX_BLACK);
  tft.setTextWrap(false);
  tft.setTextSize(1);
  tft.setTextColor(ST77XX_WHITE, ST77XX_BLACK);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("WiFi connected, IP: ");
  Serial.println(WiFi.localIP());

  configTzTime("AST4ADT,M3.2.0,M11.1.0", "pool.ntp.org", "time.nist.gov");

  Serial.println("Waiting for network time...");
  struct tm timeinfo;
  int attempts = 0;
  while (!getLocalTime(&timeinfo) && attempts < 20) {
    Serial.print(".");
    delay(500);
    attempts++;
  }
  Serial.println();

  if (getLocalTime(&timeinfo)) {
    Serial.printf("Time synced: %02d:%02d:%02d\n",
                  timeinfo.tm_hour, timeinfo.tm_min, timeinfo.tm_sec);
  } else {
    Serial.println("Failed to get network time");
  }

  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
}

void loop() {
  webSocket.loop();

  if (scheduleEnabled) {
    struct tm timeinfo;
    if (getLocalTime(&timeinfo)) {
      int currentMinutes = timeinfo.tm_hour * 60 + timeinfo.tm_min;
      int endMinutes = scheduledStartMinutes + scheduledDurationMinutes;

      bool lightsShouldBeOn;

      if (endMinutes < 1440) {
        lightsShouldBeOn =
          (currentMinutes >= scheduledStartMinutes && currentMinutes < endMinutes);
      } else {
        lightsShouldBeOn =
          (currentMinutes >= scheduledStartMinutes ||
           currentMinutes < (endMinutes % 1440));
      }

      lights_on = lightsShouldBeOn ? 1 : 0;

      Serial.printf("Current time: %02d:%02d, schedule start=%02d:%02d, duration=%d, lights_on=%d\n",
                    timeinfo.tm_hour,
                    timeinfo.tm_min,
                    scheduledStartMinutes / 60,
                    scheduledStartMinutes % 60,
                    scheduledDurationMinutes,
                    lights_on);
    }
  }

  int water_level = digitalRead(34);
  int soil_1 = analogRead(35);
  int soil_2 = analogRead(32);
  int soil1Percent = moisturePercent(soil_1);
  int soil2Percent = moisturePercent(soil_2);
  float tempC = sht3x.getTemperatureC();
  float humidity = sht3x.getHumidityRH();

  unsigned long now = millis();

  if (autoWaterEnabled) {
    if (wateringPulseActive) {
      if (now - wateringPulseStart >= wateringDurationMs) {
        water_on = 0;
        wateringPulseActive = false;
        lastWateringTime = now;
        Serial.println("Auto watering pulse finished");
      }
    } else {
      bool cooldownFinished = (now - lastWateringTime >= wateringCooldownMs);
      bool soilDry = (soil1Percent < moistureTriggerPercent || soil2Percent < moistureTriggerPercent);

      if (cooldownFinished && soilDry) {
        water_on = 1;
        wateringPulseActive = true;
        wateringPulseStart = now;
        Serial.println("Auto watering pulse started");
      }
    }
  }

  digitalWrite(33, lights_on);
  digitalWrite(25, water_on);

  Serial.print("Water level: ");
  Serial.println(water_level);
  Serial.print("Soil1 raw: ");
  Serial.print(soil_1);
  Serial.print("  Soil1 %: ");
  Serial.println(soil1Percent);
  Serial.print("Soil2 raw: ");
  Serial.print(soil_2);
  Serial.print("  Soil2 %: ");
  Serial.println(soil2Percent);
  Serial.print("Temp (C): ");
  Serial.print(tempC);
  Serial.print("  Humidity (%RH): ");
  Serial.println(humidity);

  struct tm timeinfo;

  tft.setTextColor(ST77XX_WHITE, ST77XX_BLACK);

  tft.setCursor(0, 0);
  if (getLocalTime(&timeinfo)) {
    tft.print("Time: ");
    if (timeinfo.tm_hour < 10) tft.print("0");
    tft.print(timeinfo.tm_hour);
    tft.print(":");
    if (timeinfo.tm_min < 10) tft.print("0");
    tft.print(timeinfo.tm_min);
    tft.print("   ");
  } else {
    tft.print("Time: unavailable   ");
  }

  tft.setCursor(0, 10);
  tft.print("Water: ");
  tft.print(water_level == 1 ? "YES" : "NO ");
  tft.print("   ");

  tft.setCursor(0, 20);
  tft.print("Soil1: ");
  tft.print(soil1Percent);
  tft.print("%     ");

  tft.setCursor(0, 30);
  tft.print("Soil2: ");
  tft.print(soil2Percent);
  tft.print("%     ");

  tft.setCursor(0, 40);
  tft.print("TempC: ");
  tft.print(tempC, 1);
  tft.print("     ");

  tft.setCursor(0, 50);
  tft.print("Humid: ");
  tft.print(humidity, 1);
  tft.print("     ");

  tft.setCursor(0, 60);
  tft.print("Lights: ");
  tft.print(lights_on ? "ON " : "OFF");
  tft.print("   ");

  tft.setCursor(0, 70);
  if (wateringPulseActive) {
    tft.print("Pump: ON  ");
  } else if (autoWaterEnabled) {
    tft.print("Pump: AUTO");
  } else {
    tft.print("Pump: MAN ");
  }

  tft.setCursor(0, 80);
  if (scheduleEnabled) {
    tft.print("Sched: ");
    int schedHour = scheduledStartMinutes / 60;
    int schedMin = scheduledStartMinutes % 60;
    if (schedHour < 10) tft.print("0");
    tft.print(schedHour);
    tft.print(":");
    if (schedMin < 10) tft.print("0");
    tft.print(schedMin);
    tft.print(" ");
    tft.print(scheduledDurationMinutes);
    tft.print("m   ");
  } else {
    tft.print("Sched: OFF         ");
  }

  String updateMsg = "";
  if (getLocalTime(&timeinfo)) {
    updateMsg += "time=";
    if (timeinfo.tm_hour < 10) updateMsg += "0";
    updateMsg += String(timeinfo.tm_hour);
    updateMsg += ":";
    if (timeinfo.tm_min < 10) updateMsg += "0";
    updateMsg += String(timeinfo.tm_min);
    updateMsg += ", ";
  }

  updateMsg += "water=" + String(water_level);
  updateMsg += ", pump_on=" + String(water_on);
  updateMsg += ", soil1_pct=" + String(soil1Percent);
  updateMsg += ", soil2_pct=" + String(soil2Percent);
  updateMsg += ", soil1_raw=" + String(soil_1);
  updateMsg += ", soil2_raw=" + String(soil_2);
  updateMsg += ", tempC=" + String(tempC, 1);
  updateMsg += ", humidity=" + String(humidity, 1);
  updateMsg += ", lights_on=" + String(lights_on);
  updateMsg += ", auto_water=" + String(autoWaterEnabled ? "1" : "0");

  webSocket.broadcastTXT(updateMsg);

  delay(1000);
}
