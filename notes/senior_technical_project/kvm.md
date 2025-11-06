# Objectives

* have a small screen and a usb keyboard hooked to the arduino and be able to type
* have a second usb for output, allow passthrough of the usb keyboard
* modify the keystrokes in transit(e.g. the key 'e' should send 'd')
* have a third usb for a seperate output, allowing to send keystrokes to both or only one output depending on configuration
* have multiple buttons hooked up that will allow for changing modes (e.g. passthrough to one device, passthrough to 2 devices, change to a different key layout, only send certain keystrokes to specific USB outputs)
* add a third, fourth, and fifth usb interface, allowing for any of them to be input or output
* write software to make the device reprogrammable
* design a PCB, order it, and put the components on it
* design a case and either 3 print it in the lab or order it
* put it all together


# research:

* Pick a microcontroller platform suited for USB (most likely arduino Ardunio leonardo)



# use case

There are multiple use cases for this project. 

### UC1

1 keyboard, and 2 foot pedals are hooked up. Keys that aren't used often, such as f keys can be remapped into macros, and the foot pedals can also have modifer keys or macros. 

### UC2

Remap keys to alternate layouts without needing software or an expensive keyboard

### UC3

A normal KVM switch allows sending the keyboard output to any one computer at once, this device would allow sending the output to one or many devices. 

(e.g. I could type the letter `a` on my keyboard and two separate keyboards could get the 
