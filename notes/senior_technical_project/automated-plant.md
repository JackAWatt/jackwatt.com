# device smart plant monitor for a greenhouse

* Build an enslosure to grow a plant and add a temperature sensor, Ph, humidity, and moisture sensor.
* Calibrate the sensors
* buy a plant and research optimal conditions
* open and close a valve to be able to water the plant and have a way to mist the plant
* turn on and off a fan as well as turn on and off a heater
* create a web server to be able to monitor and configure the device remotely
* create some sort of PCB or way to make the circuit permenant and possibly 3D print a case for the actual device(I say possibly because it could just be put in a project case)
* create a way to bring more than one of the devices online at once. 

<img width="790" height="500" alt="image" src="https://github.com/user-attachments/assets/faf7828b-7997-47f4-bd3d-d22d839fc6db" />


# use case

The use case for this product is to have a central device that monitors plants to determine Ph, humidity, moisture, and temperature. 

The plant could be put in a glass case with a water resovior and a heater and a fan, where: 

* if the temperature goes too low, the heater will come on
* if the moisture is too low it will water the plant on mist the leaves
* if the temperature is too high, it will turn the fan on
* if the ph is too high or too low it will do something--I have no idea what to do in that case

There would be a website that would display the information for the system. Multiple of these devices could be created. My plan would be to create 2 of them, where the site would automatically add a new interface for each device added. 

There could also be a bluetooth connection to figure the devices to allow them onto a wifi network and to put in the credentials to connect to the web server, and for the ability to configure the device. 
