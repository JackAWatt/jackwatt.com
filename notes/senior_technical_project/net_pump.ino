#include <WiFi.h>
#include <HTTPClient.h>

unsigned long lastTime = 0;
unsigned long timerDelay = 10000;

void wifiSetUp(){
  WiFi.mode(WIFI_STA);
  WiFi.begin("", "");
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
}

void get_config() {
  if ((millis() - lastTime) > timerDelay) {
    if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;

      String serverPath = "http://jackwatt.com/esp32";
      
      // Your Domain name with URL path or IP address with path
      http.begin(serverPath.c_str());

      // Send HTTP GET request
      int httpResponseCode = http.GET();
      
      if (httpResponseCode>0) {
        String payload = http.getString();
        Serial.println(payload[0]);
        digitalWrite(23, (payload[0] == '0')? 0: 1);
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
      delay(5000);
    }
    lastTime = millis();
  }
}

void setup() {
  Serial.begin(115200);
  wifiSetUp();
  pinMode(23, OUTPUT);

}

void loop() {
  get_config();
}
