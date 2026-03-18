#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <Wire.h>
#include <DFRobot_SHT3x.h>

#define I2C_SDA 21
#define I2C_SCL 22

TwoWire I2CBus = TwoWire(0); // create I2C instance
DFRobot_SHT3x sht3x(&I2CBus, 0x44);

#define TFT_CS   5
#define TFT_DC   2
#define TFT_RST  4
unsigned long lights_last_change = 0;
int lights_on = 1;

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);

void setup() {
  Serial.begin(9600);
  I2CBus.begin(I2C_SDA, I2C_SCL);

  while (sht3x.begin() != 0) {
    Serial.println("Failed to initialize the chip, please confirm the chip connection");
    delay(1000);
  }

  Serial.print("chip serial number: ");
  Serial.println(sht3x.readSerialNumber());

  if(!sht3x.softReset()){
    Serial.println("Failed to reset the chip");
  }
 
  if(!sht3x.startPeriodicMode(sht3x.eMeasureFreq_Hz5)){
    Serial.println("Failed to enter the periodic mode");
  }
  Serial.println("------------------Read data in cycle measurement mode-----------------------");

  pinMode(34, INPUT);
  pinMode(35, INPUT);
  pinMode(32, INPUT);
  pinMode(33, OUTPUT);
  pinMode(25, OUTPUT);
      SPI.begin(18, -1, 23, 5);   // SCK, MISO, MOSI, CS

  tft.initR(INITR_BLACKTAB);  // try REDTAB if colors are wrong
  tft.setRotation(1);

  tft.fillScreen(ST77XX_BLACK);
}

void loop() {
  if (!lights_on) {
    if ((millis()-lights_last_change) > 1000*60*60*8){
      lights_last_change = millis();
      lights_on = !lights_on;
    }
  } else {
    if ((millis()-lights_last_change) > 1000*60*60*14){
      lights_last_change = millis();
      lights_on = !lights_on;
    }    
  }
  digitalWrite(25, lights_on);

  tft.fillScreen(ST77XX_BLACK);
  tft.setTextColor(ST77XX_WHITE);
  tft.setTextSize(1);
  tft.setCursor(10, 20);

  int water_level = digitalRead(34);
  Serial.println(water_level);
  if (water_level == 1) {
    tft.println("water detected");
  } else {
    tft.println("no water detected");
  }
  int soil_1 = analogRead(35);
  int soil_2 = analogRead(32);
      tft.print("Soil moisture 1: "); tft.println(soil_1);
      tft.print("Soil moisture 2: "); tft.println(soil_2);
  if (soil_2 <= 2500) {
    digitalWrite(33,1);
  } else {
    digitalWrite(33, 0);
  }
  Serial.print("Temp (°C): ");
  Serial.print(sht3x.getTemperatureC());
  Serial.print("  Humidity (%RH): ");
  Serial.println(sht3x.getHumidityRH());
  
  tft.print("Temp (°C): ");
  tft.println(sht3x.getTemperatureC());
  tft.print("Humidity (%RH): ");
  tft.println(sht3x.getHumidityRH());
  delay(1000);
}
