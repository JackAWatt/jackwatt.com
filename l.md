# 5

* 12

$$12 \mod 16 = 0\ R\ 12$$

$$12_{10} = C_{16}$$

* 123

$$123 \mod 16 = 7\ R\ 11$$

$$11 \mod 16 = 0\ R\ 11$$

$$123_{10} = 7B_{16}$$

* 63

$$63 \mod 16 = 3\ R\ 15$$

$$15 \mod 16 = 0\ R\ 15$$

$$63_{10} = 3F_{16}$$

* 128

$$128 \mod 16 = 8\ R\ 0$$

$$128_{10} = 80_{16}$$


* 1000

$$1000 \mod 16 = 62\ R\ 8$$

$$62\ R\ 16 = 3\ R\ 14$$

$$3 \mod 16 = 0\ R\ 3$$

$$1000^{10} = 3E8_{8}$$

# 6

* 1001010

$$1001010 \barwedge 1001010 \rightarrow 0110101$$

$$0110101 + 1 = 0110110$$

$$0110110$$

* 111001

$$111001 \barwedge 111001 \rightarrow 000110$$

$$000110 + 1 = 000111$$

$$000111$$

* 10000010

$$10000010 \barwedge 10000010 \rightarrow$ 01111101$$

$$01111101 + 1 = 01111110$$

$$01111110$$

* 111110001

$$111110001 \barwedge 111110001 \rightarrow 000001110$$

$$000001110 + 1 = 000001111$$

$$000001111$$

# 9

$$0_{chr} = 48_{dec} = 30_{hex}$$

* 0

$$0_{chr} = 48_{dec}$$

$$0_{chr} = 30_{hex}$$

* 1

$$1_{chr} = 48_{dec} + 1 = 49_{dec}$$

$$1_{chr} = 30_{hex} + 1 = 31_{hex}$$

* 2

$$1_{chr} = 48_{dec} + 2 = 50_{dec}$$

$$1_{chr} = 30_{hex} + 2 = 32_{hex}$$

* 3

$$1_{chr} = 48_{dec} + 3 = 51_{dec}$$

$$1_{chr} = 30_{hex} + 3 = 33_{hex}$$

* 4

$$1_{chr} = 48_{dec} + 4 = 52_{dec}$$

$$1_{chr} = 30_{hex} + 4 = 34_{hex}$$

* 5

$$1_{chr} = 48_{dec} + 5 = 53_{dec}$$

$$1_{chr} = 30_{hex} + 5 = 35_{hex}$$

* 6

$$1_{chr} = 48_{dec} + 6 = 54_{dec}$$

$$1_{chr} = 30_{hex} + 6 = 36_{hex}$$

* 7

$$1_{chr} = 48_{dec} + 7 = 55_{dec}$$

$$1_{chr} = 30_{hex} + 7 = 37_{hex}$$

* 8

$$1_{chr} = 48_{dec} + 8 = 56_{dec}$$

$$1_{chr} = 30_{hex} + 8 = 38_{hex}$$

* 9

$$1_{chr} = 48_{dec} + 9 = 57_{dec}$$

$$1_{chr} = 30_{hex} + 9 = 39_{hex}$$


# 10

$$A_{chr} = 41_{hex}$$

* NBCC

$$N_{chr} = 41_{hex} + 13 = 4E$$

$$B_{chr} = 41_{hex} + 1 = 42_{hex}$$

$$C_{chr} = 41_{hex} + 2 = 43_{hex}$$

$$NBCC_{chr} = 4E\ 42\ 43\ 43_{hex}$$

# 21

* (a) How many nibbles are 16 bits?

$$16 / 4 = 4$$

* (b) How many bytes are 32 bits?

$$32 / 8 = 4$$

* (c) If a word is defined as 16 bits, how many words is a 64-bit data item?

$$64 / 16 = 4$$

* (d) What is the exact value (in decimal) of 1 meg?

$$1 * 10^6 = 1,000,000$$

> without a suffix meg just means 1 million, but I'll also answer as if the question were what is the exact value of 1 megabyte.

$$2^{10*2} = 1,048,576$$

* (e) How many kilobytes is 1 meg?

$$1024$$

* (f) What is the exact value (in decimal) of 1 gigabyte?

$$2^{10*3} = 1,073,741,824$$

* (g) How many kilobytes is 1 gigabyte?

$$1 * 1024 * 1024 = 1,048,576$$

* (h) How many megs is 1 gigabyte?

$$1024$$

* (i) If a given computer has a total of 8 megabytes of memory, how many bytes (in decimal) is this? How many kilobytes is this?

> 8 megabytes to bytes

$$8 * 2^20 = 8,388,608$$

> 8 megabytes to kilobytes

$$8 * 1024 = 8,192$$

# 25

> $2^n-1$ converted to hex will always be a string of F's with $\frac{n}{4}$ digits

* (a) Apple 2 with an 8-bis data bus

$$2^8-1 = 255_{dec} = FF_{hex}$$

* (b) x86 PC with a 16-bit data bus

$$2^16-1 = 65535_{dec} = FFFF_{hex}$$

* (c) x86 PC with a 32-bit data bus

$$2^32-1 = 4294967295_{dec} = FFFFFFFF_{hex}$$

* (d) cray supercomputer with a 64-bit data bus

$$2^64-1 = 18446744073709551615_{dec} = FFFFFFFFFFFFFFFF_{hex}$$



# 27 

* Of the data bus and address bus, which is unidirectional and which is bidirectional?

> The address bus is unidirectional. Data flows from the CPU to memory or frmo the CPU to I/O devices

> The data bus is bidirectional. Data flows back and forth between memory and the CPU

# 28

* What is the difference in capacity between a 4M memory chip and 4M of computer memory?

> this is another poorly written question. A chip labeled 4M will usually mean 4 megabits. When a computer has 4M of memory, it almost always means 4 megabytes.I believe the correct answer to this question is that the computer memory has 8 times the capacity of the memory chip. The key words in my answer are usually and almost always.

# 29

* True or false. The more address pins, the more memory locations are inside the chip. (Assume that the number of data pins is fixed.)

> true

# 30

* True or false. The more data pins, the more each location inside the chip will hold.

> true

# 31

* True or false. The more data pins, the higher the capacity of the memory chip.

> true

# 32

* True or false. The more data pins and address pins, the greater the capacity of the memory chip.

> true

# 33

* The speed of a memory chip is referred to as its _____________.

> cycle time

# 34

* True or false. The price of memory chips varies according to capacity and speed.

> The nuanced answer to this question is false, becuase the price of memory chips does vary, but not necessarily according to capacity and speed. Capacity and speed are a factor in varied pricing, but so are other factors such as brand quality, interface type, ECC vs non-ECC, power consumption, etc. So, capacity and speed are a factor in price variance, but it would be incorrect to say that the price of memory chips varies according to capacity and speed, what would be correct would be to say capacity and speed tend to vary the cost of memory chips. 

# 35

* The main advantage of EEPROM over UV-EPROM is _______________.

> There are 2 major advantages. 1: EEPROM is erased electrically, where UV_EPROM is erased using UV light. 2: EEPROM is far more durable and can be erased many more times. EEPROM can be erased somwhere between 10^3 and 10^6 times, where UV-EPROM can typically be erased fewer than 100 times. EEPROM was developed to avoid the need for UV light, enable in-circuit reprogramming, and impromved endurance and reliability. 

# 36

* True or false. SRAM has a larger cell size than DRAM.

> true

# 37

* Which of the following, EPROM, DRAM, or SRAM, must be refreshed periodically?

> DRAM as it stores data as charge in capacitors that leak over time. SRAM and ROM do not require refreshing. 

# 38

* Which memory is used for PC cache?

> SRAM

# 39

* Which of the following, SRAM, UV-EPROM, NV-RAM, or DRAM, is volatile memory?

> DRAM and SRAM are volatile. 

# 40

* RAS and CAS are associated with which type of memory?

> (c) DRAM

# 41

* Which type of memory needs an external multiplexer?
> (c) DRAM

# 53 List the three bus types present in every CPU

> Address, Data, and Control. Not every CPU seperates these out into their own seperate busses, early microcontrollers such as the 8051 multiplexed address and data lines to save pins. RISC-V cores on FPGAs may seperate the three busses out into logical groupings rather than seperate physical busses. 


