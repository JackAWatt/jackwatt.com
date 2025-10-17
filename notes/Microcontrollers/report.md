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

# Code changes

Most of the code was provided for us, but we changed a few things. The full code is attached, but I'll explain our changes here.

* #define REVERSE_SPEED 100

The value given to us was 200. We decreased it because this value is paired with a reverse duration, and we didn't want to reverse a large distance before turning. 

* #define TURN_SPEED 300 and #define TURN_DURATION 160

The values given to us were a turning speed of 200 and a turning duration 300. We increased the turning speed and decreased the turning duration so it would more in a shorter period of time. In total the bot's turning radius has been reduced because we found that the default behavior of the bot had it turning so much when it found the edge that somtimes it would immiedately run back into the edge and then be put back into the turning routine. 

* #define SEARCH_SPEED 400

The value given to us was 200. We increased this to the max because while searching if the bot finds an opponent, then it will be at it's max speed and because F = MA, we know that the force we'll hit the opponent with is at it's maximum when the acceleation is also at it's maximum. 

* define STOP_DURATION 200

The default stop during given was 100. We increased it to create a smoother turning or backing up motion. This allows the bot to settle before trying to move. Of all the changes we made, this one is the one I'm the least confident in whether or not it benefited the operation of our bot, but in theory it seems to be a good change.

# code



#include <avr/pgmspace.h>
#include <Wire.h>
#include <Zumo32U4.h>

// #define LOG_SERIAL // write log output to serial port

// Change next line to this if you are using the older Zumo 32U4
// with a black and green LCD display:
// Zumo32U4LCD display;
Zumo32U4LCD lcd;

Zumo32U4ButtonA button;

// Accelerometer Settings
#define RA_SIZE 3  // number of readings to include in running average of accelerometer readings
#define XY_ACCELERATION_THRESHOLD 2400  // for detection of contact (~16000 = magnitude of acceleration due to gravity)

// Reflectance Sensor Settings
#define NUM_SENSORS 5
unsigned int sensor_values[NUM_SENSORS];
// this might need to be tuned for different lighting conditions, surfaces, etc.
#define QTR_THRESHOLD  1000 // microseconds
Zumo32U4LineSensors sensors;

// Motor Settings
Zumo32U4Motors motors;

// these might need to be tuned for different motor types
#define REVERSE_SPEED     100 // Altered by Jack and Tiago
#define TURN_SPEED        300 // Altered by Jack and Tiago
#define SEARCH_SPEED      400 // Altered by Jack and Tiago
#define SUSTAINED_SPEED   400 // switches to SUSTAINED_SPEED from FULL_SPEED after FULL_SPEED_DURATION_LIMIT ms
#define FULL_SPEED        400
#define STOP_DURATION     200 // Altered by Jack and Tiago
#define REVERSE_DURATION  200 // ms
#define TURN_DURATION     160 // Altered by Jack and Tiago

#define RIGHT 1
#define LEFT -1

enum ForwardSpeed { SearchSpeed, SustainedSpeed, FullSpeed };
ForwardSpeed _forwardSpeed;  // current forward speed setting
unsigned long full_speed_start_time;
#define FULL_SPEED_DURATION_LIMIT     300  // ms

// Sound Effects
Zumo32U4Buzzer buzzer;
const char sound_effect[] PROGMEM = "O4 T100 V15 L4 MS g12>c12>e12>G6>E12 ML>G2"; // "charge" melody
 // use V0 to suppress sound effect; v15 for max volume

 // Timing
unsigned long loop_start_time;
unsigned long last_turn_time;
unsigned long contact_made_time;
#define MIN_DELAY_AFTER_TURN          400  // ms = min delay before detecting contact event
#define MIN_DELAY_BETWEEN_CONTACTS   1000  // ms = min delay between detecting new contact event

// RunningAverage class
// based on RunningAverage library for Arduino
// source:  http://playground.arduino.cc/Main/RunningAverage
template <typename T>
class RunningAverage
{
  public:
    RunningAverage(void);
    RunningAverage(int);
    ~RunningAverage();
    void clear();
    void addValue(T);
    T getAverage() const;
    void fillValue(T, int);
  protected:
    int _size;
    int _cnt;
    int _idx;
    T _sum;
    T * _ar;
    static T zero;
};

// Accelerometer Class -- extends the Zumo32U4IMU class to support reading and
//   averaging the x-y acceleration vectors from the accelerometer
class Accelerometer : public Zumo32U4IMU
{
  typedef struct acc_data_xy
  {
    unsigned long timestamp;
    int x;
    int y;
    float dir;
  } acc_data_xy;

  public:
    Accelerometer() : ra_x(RA_SIZE), ra_y(RA_SIZE) {};
    ~Accelerometer() {};
    void getLogHeader(void);
    void readAcceleration(unsigned long timestamp);
    float len_xy() const;
    float dir_xy() const;
    int x_avg(void) const;
    int y_avg(void) const;
    long ss_xy_avg(void) const;
    float dir_xy_avg(void) const;
  private:
    acc_data_xy last;
    RunningAverage<int> ra_x;
    RunningAverage<int> ra_y;
};

Accelerometer acc;
boolean in_contact;  // set when accelerometer detects contact with opposing robot

// forward declaration
void setForwardSpeed(ForwardSpeed speed);

void setup()
{
  sensors.initFiveSensors();

  // Initialize the Wire library and join the I2C bus as a master
  Wire.begin();

  // Initialize accelerometer
  acc.init();
  acc.enableDefault();

#ifdef LOG_SERIAL
  acc.getLogHeader();
#endif

  randomSeed((unsigned int) millis());

  // Uncomment if necessary to correct motor directions:
  //motors.flipLeftMotor(true);
  //motors.flipRightMotor(true);

  ledYellow(1);
  buzzer.playMode(PLAY_AUTOMATIC);
  waitForButtonAndCountDown(false);
}

void waitForButtonAndCountDown(bool restarting)
{
#ifdef LOG_SERIAL
  Serial.print(restarting ? "Restarting Countdown" : "Starting Countdown");
  Serial.println();
#else
  (void)restarting; // suppress unused variable warning
#endif

  ledRed(0);

  ledYellow(1);
  lcd.clear();
  lcd.print(F("Press A"));

  button.waitForButton();

  ledYellow(0);
  lcd.clear();

  // play audible countdown
  for (int i = 0; i < 3; i++)
  {
    delay(1000);
    buzzer.playNote(NOTE_G(3), 50, 12);
  }
  delay(1000);
  buzzer.playFromProgramSpace(sound_effect);
  delay(1000);

  // reset loop variables
  in_contact = false;  // 1 if contact made; 0 if no contact or contact lost
  contact_made_time = 0;
  last_turn_time = millis();  // prevents false contact detection on initial acceleration
  _forwardSpeed = SearchSpeed;
  full_speed_start_time = 0;
}

void loop()
{
  if (button.isPressed())
  {
    // if button is pressed, stop and wait for another press to go again
    motors.setSpeeds(0, 0);
    button.waitForRelease();
    waitForButtonAndCountDown(true);
  }

  loop_start_time = millis();
  acc.readAcceleration(loop_start_time);
  sensors.read(sensor_values);

  if ((_forwardSpeed == FullSpeed) && (loop_start_time - full_speed_start_time > FULL_SPEED_DURATION_LIMIT))
  {
    setForwardSpeed(SustainedSpeed);
  }

  if (sensor_values[0] < QTR_THRESHOLD)
  {
    // if leftmost sensor detects line, reverse and turn to the right
    turn(RIGHT, true);
  }
  else if (sensor_values[NUM_SENSORS - 1] < QTR_THRESHOLD)
  {
    // if rightmost sensor detects line, reverse and turn to the left
    turn(LEFT, true);
  }
  else  // otherwise, go straight
  {
    if (check_for_contact()) on_contact_made();
    int speed = getForwardSpeed();
    motors.setSpeeds(speed, speed);
  }
}

// execute turn
// direction:  RIGHT or LEFT
// randomize: to improve searching
void turn(char direction, bool randomize)
{
#ifdef LOG_SERIAL
  Serial.print("turning ...");
  Serial.println();
#endif

  // assume contact lost
  on_contact_lost();

  static unsigned int duration_increment = TURN_DURATION / 4;

  // motors.setSpeeds(0,0);
  // delay(STOP_DURATION);
  motors.setSpeeds(-REVERSE_SPEED, -REVERSE_SPEED);
  delay(REVERSE_DURATION);
  motors.setSpeeds(TURN_SPEED * direction, -TURN_SPEED * direction);
  delay(randomize ? TURN_DURATION + (random(8) - 2) * duration_increment : TURN_DURATION);
  int speed = getForwardSpeed();
  motors.setSpeeds(speed, speed);
  last_turn_time = millis();
}

void setForwardSpeed(ForwardSpeed speed)
{
  _forwardSpeed = speed;
  if (speed == FullSpeed) full_speed_start_time = loop_start_time;
}

int getForwardSpeed()
{
  int speed;
  switch (_forwardSpeed)
  {
    case FullSpeed:
      speed = FULL_SPEED;
      break;
    case SustainedSpeed:
      speed = SUSTAINED_SPEED;
      break;
    default:
      speed = SEARCH_SPEED;
      break;
  }
  return speed;
}

// check for contact, but ignore readings immediately after turning or losing contact
bool check_for_contact()
{
  static long threshold_squared = (long) XY_ACCELERATION_THRESHOLD * (long) XY_ACCELERATION_THRESHOLD;
  return (acc.ss_xy_avg() >  threshold_squared) && \
    (loop_start_time - last_turn_time > MIN_DELAY_AFTER_TURN) && \
    (loop_start_time - contact_made_time > MIN_DELAY_BETWEEN_CONTACTS);
}

// sound horn and accelerate on contact -- fight or flight
void on_contact_made()
{
#ifdef LOG_SERIAL
  Serial.print("contact made");
  Serial.println();
#endif
  in_contact = true;
  contact_made_time = loop_start_time;
  setForwardSpeed(FullSpeed);
  buzzer.playFromProgramSpace(sound_effect);
  ledRed(1);
}

// reset forward speed
void on_contact_lost()
{
#ifdef LOG_SERIAL
  Serial.print("contact lost");
  Serial.println();
#endif
  in_contact = false;
  setForwardSpeed(SearchSpeed);
  ledRed(0);
}

// class Accelerometer -- member function definitions

void Accelerometer::getLogHeader(void)
{
  Serial.print("millis    x      y     len     dir  | len_avg  dir_avg  |  avg_len");
  Serial.println();
}

void Accelerometer::readAcceleration(unsigned long timestamp)
{
  readAcc();
  if (a.x == last.x && a.y == last.y) return;

  last.timestamp = timestamp;
  last.x = a.x;
  last.y = a.y;

  ra_x.addValue(last.x);
  ra_y.addValue(last.y);

#ifdef LOG_SERIAL
 Serial.print(last.timestamp);
 Serial.print("  ");
 Serial.print(last.x);
 Serial.print("  ");
 Serial.print(last.y);
 Serial.print("  ");
 Serial.print(len_xy());
 Serial.print("  ");
 Serial.print(dir_xy());
 Serial.print("  |  ");
 Serial.print(sqrt(static_cast<float>(ss_xy_avg())));
 Serial.print("  ");
 Serial.print(dir_xy_avg());
 Serial.println();
#endif
}

float Accelerometer::len_xy() const
{
  return sqrt(last.x*a.x + last.y*a.y);
}

float Accelerometer::dir_xy() const
{
  return atan2(last.x, last.y) * 180.0 / M_PI;
}

int Accelerometer::x_avg(void) const
{
  return ra_x.getAverage();
}

int Accelerometer::y_avg(void) const
{
  return ra_y.getAverage();
}

long Accelerometer::ss_xy_avg(void) const
{
  long x_avg_long = static_cast<long>(x_avg());
  long y_avg_long = static_cast<long>(y_avg());
  return x_avg_long*x_avg_long + y_avg_long*y_avg_long;
}

float Accelerometer::dir_xy_avg(void) const
{
  return atan2(static_cast<float>(x_avg()), static_cast<float>(y_avg())) * 180.0 / M_PI;
}



// RunningAverage class
// based on RunningAverage library for Arduino
// source:  http://playground.arduino.cc/Main/RunningAverage
// author:  Rob.Tillart@gmail.com
// Released to the public domain

template <typename T>
T RunningAverage<T>::zero = static_cast<T>(0);

template <typename T>
RunningAverage<T>::RunningAverage(int n)
{
  _size = n;
  _ar = (T*) malloc(_size * sizeof(T));
  clear();
}

template <typename T>
RunningAverage<T>::~RunningAverage()
{
  free(_ar);
}

// resets all counters
template <typename T>
void RunningAverage<T>::clear()
{
  _cnt = 0;
  _idx = 0;
  _sum = zero;
  for (int i = 0; i< _size; i++) _ar[i] = zero;  // needed to keep addValue simple
}

// adds a new value to the data-set
template <typename T>
void RunningAverage<T>::addValue(T f)
{
  _sum -= _ar[_idx];
  _ar[_idx] = f;
  _sum += _ar[_idx];
  _idx++;
  if (_idx == _size) _idx = 0;  // faster than %
  if (_cnt < _size) _cnt++;
}

// returns the average of the data-set added so far
template <typename T>
T RunningAverage<T>::getAverage() const
{
  if (_cnt == 0) return zero; // NaN ?  math.h
  return _sum / _cnt;
}

// fill the average with a value
// the param number determines how often value is added (weight)
// number should preferably be between 1 and size
template <typename T>
void RunningAverage<T>::fillValue(T value, int number)
{
  clear();
  for (int i = 0; i < number; i++)
  {
    addValue(value);
  }
}
