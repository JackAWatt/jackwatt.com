# Expected

$$V_1 = 2.16\ V$$

$$V_2 = 3.23\ V$$

$$V_3 = 4.61\ V$$

$$V_T = 10\ V$$

$$R_3 = 4.7k$$

$$R_2 = \frac {3.23}{980\ \micro\text{A}} = 3.296k$$

$$R_1 = \frac {2.16}{980\ \micro\text{A}} = 2.204k$$

$$I = \frac {4.61}{4.7k} = 980\ \micro\text{A}$$


# Fault 1

$$V_1 = 6.52\ V$$

$$V_2 = 1.43\ V$$

$$V_3 = 2.04\ V$$

**V_2 went down while V_1 and V_3 went up.**

$$I = \frac {6.52\ V}{2.204k} = 2.958\ mA$$

$$R_2 = \frac {1.43\ V}{2.958\ mA} = 483.435$$

**R_2 appears to be a 483 ohm resistor rather than the 3.2k ohm expected**

# Fault 2

$$V_1 = 0\ V$$

$$V_2 = 10\ V$$

$$V_3 = 0\ V$$

**This could be an open circuit at R_2, or short circuits at both R_1 and R_3. The open at R_2 is more likely**

# Fault 3

$$V_1 = 3.67\ V$$

$$V_2 = 5.50\ V$$

$$V_3 = 833\ mV$$

**V_3 went down while V_2 and V_1 went up**

$$I = \frac {3.67}{2.204k} = 1.67\ mA$$

$$R_3 = \frac {833\ mV}{1.67\ mA} = 498.8 ohm$$

**R_3 was a 498.8 ohm resistor rather than the expected 4.7k**

# Part C

$$V_T = 25\ V$$

$$V_1 = 6.1\ V$$

$$V_2 = 8.8\ V$$

$$V_3 = 7.3\ V$$

$$V_4 = 2.9\ V$$

$$R_1 = 4.7\ k$$

$$R_2 = 6.8\ k$$

$$R_3 = 5.6\ k$$

$$R_4 = 2.2\ k$$

# Fault 1

**Open on V_r3**

# Fault 2

**V_R3 went down**

$$I = \frac {7.6\ V}{6.8\ K} = 1.12\ mA$$

$$R_3 = \frac {2.9\ V}{1.12\ mA} = 2.59\ K$$

**R_3 is a 2.59 kOhm resistor**

# Fault 3

**Short on V_r4**

# Fault 4

**V_1 went down, while V_2, V_3, and V_4 all went up**

$$I = \frac {10.9\ V}{6.8\ K} = 1.6\ mA$$

$$V_1 = \frac {1.6\ V}{1.6\ mA} = 1k$$

**R_3 is a 1 kOhm resistor**
