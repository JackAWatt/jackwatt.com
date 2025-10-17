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

These allow for starting and stopping the robot, as well as possibly switching modes 
