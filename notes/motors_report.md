# Maze-Robot Project

### ICCI 1116: Motors and Actuators

#### Jack Watt
#### EET - SJ
#### NBCC
#### 2026-02-18

# Introduction

In this project we were given all the components to build a mazebot. Everything was already in place, we just had to wire the project. 

The objective of this project was to create a robot that will stay within a black tape boundary to traverse a track, and then enter a maze with cardboard walls. Not driving over the black tape and not hitting the walls is the desired outcome of running the bot through the maze. 


# The components

## Diagram

<img width="1498" height="1037" alt="{4358290F-F209-4BC7-B888-9938237A42E6}" src="https://github.com/user-attachments/assets/521bdf42-24bd-4db4-96cc-6f59a2827211" />


## Arduino Uno

For this project we used the arduino uno

<img width="1086" height="798" alt="{8792E636-1236-4583-A3CB-4466EF9111F8}" src="https://github.com/user-attachments/assets/0fd76845-5aa9-4098-885d-574961739dd4" />


## 9g Micro Servo - Positional

The 9g servo is used to rotate the head, which holds our distance sensor. It takes a pulse width from 0.5 ms to 2.5 ms. When set to 500 microseconds the positional servor will rotate as far to the east as possible, and when set to 2500 microseconds it will rotate as far west as possible. This is how the mazebot looks east and west. 

<img width="768" height="524" alt="image" src="https://github.com/user-attachments/assets/ef915fbd-697a-40b6-b4e7-c2063cb513b0" />


## QT1 reflective sensors

Our down sensors are QT1 reflective sensors. when they read above 400 we treat them as if they are seeing a black surface, and below we treat them as if they are seeing a white surface. Where the actual threshold is for our black surface we don't want to drive over isn't exactly at 400, but this is the value we tested with that worked for us. 

<img width="1181" height="1200" alt="image" src="https://github.com/user-attachments/assets/8f7a9001-5bfe-47aa-bee6-ed998b4ceffd" />


## HC-SR04 Ultraconic Sensor

Our Ultrasonic range finder is the HC-SR04. As the 9g servo motor pans back and forth from east to west, we periodically ping to see if there is anything to our east, north, and west, and then make decisions on which direction to move in based on those values. If we see an obstacle that is less than 20 cm to the east or west we turn in the opposite direction. 

<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/754888bf-d095-4ab0-a09d-aa4b9276f52e" />


## Parallax continuous rotation servos

Our continous servos are what drive our mazebot. The left and right are mirror images of each other, which means that to drive forward we need to give them different pulse widths. To move forward we set the left to 1700 microseconds and the right to 1300 microseconds. To stop we set both to 1500. To turn we can either set one to 1500 and then use the other one to turn, or we can use both in opposite directions to turn in place quickly. We opted to stop one wheel while turning because it helped us not go out of bounds during the track portion of the maze. 

# Difficulties faced

The Biggest difficulties of this project were coding. Finding a way to complete tasks without blocking by using delays. The other was the fact this was a group project. I feel as though my partner could have done a better job without me and that I could have done a better job without him. In the end we worked together and both contributed to the project, but once we started to take our existing code and try to implement the next thing on our own, I found we became more productive. We didn't have our own code, but we had the mutual code and then were modifying it until we got a result that was better than what we had before, and then we'd both start working from that code. 

I feel like in the end the track code was mostly mine and the maze code was mostly Tiago's, but he for sure made my maze code better and I helped him improve his maze code. We didn't set out to seperate the project like this, but when we were passing the keyboard back and forth I got the track code working well, and he got the maze code working well. 

I'm glad I had Tiago as a partner because there were a few times he said "It looks like you have an idea" and he'd slide his laptop towards me. Even though I would say working in a group was a difficulty faced, I think we got over it nicely. 

I am however not satisfied with the code we ended up with or the result we got. Possibly because this was a mazebot we only got to work on a few hours per week. It would have been good to be able to take the project home and work on it there, but all of the difficulties and handicaps I mentioned, are also things I can recognize are key parts of the project. 

# Future Work

For future work, I would like to get the mazebot to never stop or go backwards, or at least do so as little as possible. Our track code was didn't stop, but it did go out of bounds once. 

A good improvement would be to track the last few turns to have some idea of which way is backwards, to prevent from turning around and going back. Our mazebot didn't end up being turned around, but on a more complicated maze I could see that happening. 

I could also see improvements such as keeping track of how long it has been since the last turn, and then drifting back towards the direction from which the bot turned. I say this knowing that the maze is only ever going to be so wide, so if the bot is headed in one direction for some amount of time, turning back the other way could be a good strategy to avoid walls. 

