//modified from the example code
#include <DFRobot_SHT3x.h>

DFRobot_SHT3x sht3x(&Wire, 0x44);

void setup() {

  Serial.begin(9600);
    //Initialize the chip to detect if it can communicate properly.
  while (sht3x.begin() != 0) {
    Serial.println("Failed to initialize the chip, please confirm the chip connection");
    delay(1000);
  }
  
  /**
   * readSerialNumber Read the serial number of the chip
   * @return Return 32-digit serial number
   */
  Serial.print("chip serial number: ");
  Serial.println(sht3x.readSerialNumber());
  /**
   * softReset Send command resets via IIC, enter the chip's default mode single-measure mode, 
   * turn off the heater, and clear the alert of the ALERT pin.
   * @return Read the status register to determine whether the command was executed successfully, 
   * and return true indicates success.
   */
   if(!sht3x.softReset()){
     Serial.println("Failed to reset the chip");
   }
 
  if(!sht3x.startPeriodicMode(sht3x.eMeasureFreq_Hz5)){
    Serial.println("Failed to enter the periodic mode");
  }
  Serial.println("------------------Read data in cycle measurement mode-----------------------");
}

void loop() {

  Serial.print("Ambient temperature(°C/F):");
  /**
   * getTemperatureC Get the measured temperature (in degrees Celsius).
   * @return Return the float temperature data.
   */
  Serial.print(sht3x.getTemperatureC());
  Serial.print(" C/");
  /**
   * getTemperatureF Get the measured temperature (in degrees Fahrenheit).
   * @return Return the float temperature data. 
   */
  Serial.print(sht3x.getTemperatureF());
  Serial.print(" F ");
  Serial.print("Relative humidity(%RH):");
  /**
   * getHumidityRH Get measured humidity(%RH)
   * @return Return the float humidity data
   */
  Serial.print(sht3x.getHumidityRH());
  Serial.println(" %RH");
  //Please adjust the frequency of reading according to the frequency of the chip collection data.
  //The frequency to read data must be greater than the frequency to collect the data, otherwise the returned data will go wrong.
  delay(100);
  if(millis() > 10000 && millis() < 10200){
    /**
     * stopPeriodicMode() Exit from the cycle read data
     * @return Read the status of the register to determine whether the command was executed successfully, 
     * and return true indicates success.
     */
    sht3x.stopPeriodicMode();
    Serial.println("Exited from the cycle measurement mode, enter the single measurement mode");
  }

}
