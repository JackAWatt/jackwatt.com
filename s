#include <SoftwareSerial.h>

// SoftwareSerial pins
SoftwareSerial bt(8, 9); // RX = 8, TX = 9

void setup() {
  Serial.begin(9600);      // For USB monitor
  bt.begin(38400);         // HC-05 baud rate
  Serial.println("Bluetooth Test Started");
}

void loop() {
  // 1. Send '1' to the other Arduino
  bt.write('1');          
  Serial.println("Sent: 1");
  
  delay(1000); // wait 1 second

  // 2. Check if anything was received
  while (bt.available()) {
    char c = bt.read();
    Serial.print("Received: ");
    Serial.println(c);
  }
}
