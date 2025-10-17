# Sumo Project

#### Introduction

The Zumo 32U4 robot is a small robot made to fit into the mini sumo(500 gram class and 10cm * 10cm). This robot comes both in a kit version and a pre-assmbled version. We--our class--received the pre-assmbled version. 

This robot comes with motors, proximity sensors, line sensors, an LCD, and a piezo buzzer. 

The operation of the sumo-bot is to use the proximity sensors to find oponnents, when they find the oponnent they attempt to knock them out of the ring. The ring consists of a large black surface with a white edge. Using the line sensors the autonomous sumo-bot determines whether or not it has reached the white edge. When the white edge is found the bot will turn by some amount set by the programmer--usually a random value between two angles. 

Through basic programmable rules, such as when it finds an oponnent it tries to knock them out of the ring,a nd when it sees the white edge it knows it has to back up or turn around, we end up with a fully autonomous robot. This acts as a demonstration of how the addition of simple rules can result in the emergence of what appears to be complex behavior. 

The Zumo 32U4 is based on the Parallax SumoBot, but this bot uses an Arduino Uno rather than the Pic processor. 

The Zumo-32U4 also comes with an accelerometer, compass, and gyro, although we didn't use any of these in our project. 

### The microcontroller

The Zumo-32U4 ships with the ATmega32U4 microcontroller, an 8-bit AVR microcontroller running at 16 MHz. It includes:

* 32 KB flash memory

This is used to store the program that automates the bot

* 2.5 KB SRAM

This is used to store temporary variables and the state of the program. It does not persist between power cycles

* 1 KB EEPROM

This is used to store the state of the program between power cycles.

* USB-to-Serial

This allows the bot to be programmed and communicated with directly without an external programmer

* Pulse Width Modulation pins

This allows sending voltages from 0v to 5v, rather than just 5 volts for on and 0 volts for off. PWN is used to accelerate or decelerate the motors, which produces smoother operation than only being able to provide 5 volts.

### The Sensors

* Reflectance Sensor Array

Located on the underside of the bot, these IR sensors read different values based on the contrast of the surface underneath the bot. The darker the sufrace the lower the value the IR sensor will read. When on a white surface the sensors read close to the maximum which is 2^10, and when on a black surface they read close to the minimum which is 0. Actual read values will vary based on each sensor and the suface contrast and material. 

* Proximity Sensors

Two IR sensors are mounted on the front of the bot, which are used to detect nearby objects or opponents. These are used during competition to seek for oponnents to attack

* (IMU) - Acceleromter, Gyroscope, and Magnetometer

This is a 9-axis inertial measurment unit that will detect motion, orientation, and acceleration. This is used for advanced navigation tasks, although we didn't use the IMU in this project. 

* Battery Voltage Monitor

This allows the bot to monitor its power supply and react if the voltage is too low--this could include playing a tone so the operator knows to replace the batteries. 

### The motors

The Zumo-32U4 uses two metal gearmotors, one for each track. Each motor is a DC brushed motor connected to a gear reduction system, which provides both speed and torque for smooth motion and strong pushing force. 

Features:

* Independant motor control:

This allways each motor to be driven separately, allowing for differential steering--turning by varying the speed of each motor, one motor could be run slower than the other, or even in the opposite direction.

* PWN speed control: 

The motors are controlled by pulse-width moduction from the microcontroller, allowing precise speed and direction adjustment. 

* H-bridge: 

This is an integrated motor driver that acts as protection to the microcontroller. It allows for a a load current to the motors that the microcontroller couldn't handle. Essentially the microcontrollers sends a signal to the hbridge which allows the current delivered to the motors to be drawn from the battery directly rather than through a pin on the microcontroller. 

### Other parts

* Piezo Buzzer 

This buzzer is capable of producing varying tones, which can be used as alerts or simple melodies. It was used in the competition to signal that the sumo bot was activated and the countdown before it started it's routine began. 

* LCD Display

This small 2-line LCD screen can display various information, including sensor readings or debugging information.

* Push Buttons

These allow for starting and stopping the robot, as well as possibly switching modes--the bot could be programmed to act in different ways which could be switched using the buttons. 

### Difficulties faced and troubleshooting suggestions

* Motor Alignment

Early on we found that the bot would drift slightly to one side. We fixed this by slowing down one motor and speeding the other one up. We tested the drift by programming the bot to turn in place by 90 degrees. As we calibrated the motor alighment we could get the bot to turn in place by 90 degrees multiple times without much drift. 

I don't think the drift was much of a concern while seeking, but it didn't affect the ability to turn precisely. I would suggest marking the testing surface with tape along two sides of the bot to be able to tell how much it's drifting while turning by 90 degrees. the reason for 90 degrees is that it's the smallest turning radius possible where the bot should end up exactly in the spot it started from, but with a shift of 90 degrees. Another test could be to get the bot to move forward for some amount of time and then backwards for the same amount of time. If the bot ends up back where it started then there is no drift. 

* Sensor Calibration

When testing the proximity sensors we found that some varied by a large amomount. When we tested with an object in front of the bot we found that the left sensor value was 50% more than the right sensor value, but that the left front and right front read the same value. 

When testing the reflective contrast sensors, we found that the sensor read almost 100% more on sensor 5 than on sensor 1. During other tests the varriance was less, but still enough that would lead one to believe that each sensor were seeing different contrasts, when at most there could be some minor surface damage to the platform we usd. 

The suggestion here would be to test each sensor individually and then when reading from each sensor to modify the value before storing or using it. e.g. If one sensor reads a value 30% higher than another sensor, either multiply the lower one by 1.3 or multiply the higher one by 0.7.

* Other Troubleshooting tips

Use the serial monitor in arduino studio to to print sensor values while testing. 

A move advanced option would be to leverage the EEPROM to store a small amount of sensor data while the device is running, and then dump the contents of the EEPROM over USB serial, but there are limitations based on the 1 KB limit of the EEPROM. 

### Future Work

* Advanced pathing by mapping the ring. 

If the bot were to keep track of where it has been recently it could make decisions based on which direction to turn when it finds the white border. 

* Routine to get away when being pushed

Using the IMU there could be ways to determine the direction being pushed, and if the advanced pathing I mentioned above were implemented, the bot could know how close to the edge it is given it's being pushed in one direction. The bot could make a decision on whether or not it could quickly move backwards and turn before the oponnent could push it off the edge. 


* differenciate between being collided with and colliding with an oponent

This would allow to make decisions based on whether or not the bot has been hit or has hit something. Possibly the bot would want to increase the speed to max if it's hit something and is still moving forward, and could try to escape if it's been hit and is moving in a direction other than the direction the motors should be moving the bot. 

* adjust when head to head

the bot could determine when it's head to head with an opponent and based on whether it's moving the other opponent or not it could choose to keep going or try to escape. 

# Code

Most of the code was provided for us, but we changed a few things. The full code is attached, but I'll explain my changes here

* #define REVERSE_SPEED 100

The value given to us was 200. We decreased it because this value is paired with a reverse duration, and we didn't want to reverse a large distance before turning. 

* 
