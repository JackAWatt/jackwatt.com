DROP TABLE Rep Cascade Constraints Purge;

DROP TABLE Customer Cascade Constraints Purge;

DROP TABLE Orders Cascade Constraints Purge;

DROP TABLE Part Cascade Constraints Purge;

DROP TABLE OrderLine Cascade Constraints Purge;

Commit;

CREATE TABLE Rep
(RepNum CHAR(2) PRIMARY KEY,
LastName CHAR(15),
FirstName CHAR(15),
Street CHAR(15),
City CHAR(15),
State CHAR(2),
Zip CHAR(5),
Commission DECIMAL(7,2),
Rate DECIMAL(3,2) );
CREATE TABLE Customer
(CustomerNum CHAR(3) PRIMARY KEY,
CustomerName CHAR(35) NOT NULL,
Street CHAR(15),
City CHAR(15),
State CHAR(2),
Zip CHAR(5),
Balance DECIMAL(8,2),
CreditLimit DECIMAL(8,2),
RepNum CHAR(2) )
;
CREATE TABLE Orders
(OrderNum CHAR(5) PRIMARY KEY,
OrderDate DATE,
CustomerNum CHAR(3) )
;
CREATE TABLE Part
(PartNum CHAR(4) PRIMARY KEY,
Description CHAR(15),
OnHand DECIMAL(4,0),
Class CHAR(2),
Warehouse CHAR(1),
Price DECIMAL(6,2) )
;
CREATE TABLE OrderLine
(OrderNum CHAR(5),
PartNum CHAR(4),
NumOrdered DECIMAL(3,0),
QuotedPrice DECIMAL(6,2),
PRIMARY KEY (OrderNum, PartNum) )
;
INSERT INTO Rep
VALUES
('20','Kaiser','Valerie','624 Randall','Grove','FL','33321',20542.50,0.05);
INSERT INTO Rep
VALUES
('35','Hull','Richard','532 Jackson','Sheldon','FL','33553',39216.00,0.07);
INSERT INTO Rep
VALUES
('65','Perez','Juan','1626 Taylor','Fillmore','FL','33336',23487.00,0.05);
INSERT INTO Customer
VALUES
('148','Al''s Appliance and Sport','2837 Greenway','Fillmore','FL','33336',6550.00,7500.00,'20');
INSERT INTO CUSTOMER
VALUES
('282','Brookings Direct','3827 Devon','Grove','FL','33321',431.50,10000.00,'35');
INSERT INTO CUSTOMER
VALUES
('356','Ferguson''s','382 Wildwood','Northfield','FL','33146',5785.00,7500.00,'65');
INSERT INTO CUSTOMER
VALUES
('408','The Everything Shop','1828 Raven','Crystal','FL','33503',5285.25,5000.00,'35');
INSERT INTO CUSTOMER
VALUES
('462','Bargains Galore','3829 Central','Grove','FL','33321',3412.00,10000.00,'65');
INSERT INTO CUSTOMER
VALUES
('524','Kline''s','838 Ridgeland','Fillmore','FL','33336',12762.00,15000.00,'20');
INSERT INTO CUSTOMER
VALUES
('608','Johnson''s Department Store','372 Oxford','Sheldon','FL','33553',2106.00,10000.00,'65');
INSERT INTO CUSTOMER
VALUES
('687','Lee''s Sport and Appliance','282 Evergreen','Altonville','FL','32543',2851.00,5000.00,'35');
INSERT INTO CUSTOMER
VALUES
('725','Deerfield''s Four Seasons','282 Columbia','Sheldon','FL','33553',248.00,7500.00,'35');
INSERT INTO CUSTOMER
VALUES
('842','All Season','28 Lakeview','Grove','FL','33321',8221.00,7500.00,'20');
INSERT INTO ORDERS
VALUES
('21608',to_date('20-OCT-2007','DD-MON-YYYY'),'148');
INSERT INTO ORDERS
VALUES
('21610',to_date('20-OCT-2007','DD-MON-YYYY'),'356');
INSERT INTO ORDERS
VALUES
('21613',to_date('21-OCT-2007','DD-MON-YYYY'),'408');
INSERT INTO ORDERS
VALUES
('21614',to_date('21-OCT-2007','DD-MON-YYYY'),'282');
INSERT INTO ORDERS
VALUES
('21617',to_date('23-OCT-2007','DD-MON-YYYY'),'608');
INSERT INTO ORDERS
VALUES
('21619',to_date('23-OCT-2007','DD-MON-YYYY'),'148');
INSERT INTO ORDERS
VALUES
('21623',to_date('23-OCT-2007','DD-MON-YYYY'),'608');
INSERT INTO PART
VALUES
('AT94','Iron',50,'HW','3',24.95);
INSERT INTO PART
VALUES
('BV06','Home Gym',45,'SG','2',794.95);
INSERT INTO PART
VALUES
('CD52','Microwave Oven',32,'AP','1',165.00);
INSERT INTO PART
VALUES
('DL71','Cordless Drill',21,'HW','3',129.95);
INSERT INTO PART
VALUES
('DR93','Gas Range',8,'AP','2',495.00);
INSERT INTO PART
VALUES
('DW11','Washer',12,'AP','3',399.99);
INSERT INTO PART
VALUES
('FD21','Stand Mixer',22,'HW','3',159.95);
INSERT INTO PART
VALUES
('KL62','Dryer',12,'AP','1',349.95);
INSERT INTO PART
VALUES
('KT03','Dishwasher',8,'AP','3',595.00);
INSERT INTO PART
VALUES
('KV29','Treadmill',9,'SG','2',1390.00);
INSERT INTO OrderLine
VALUES
('21608','AT94',11,21.95);
INSERT INTO OrderLine
VALUES
('21610','DR93',1,495.00);
INSERT INTO OrderLine
VALUES
('21610','DW11',1,399.99);
INSERT INTO OrderLine
VALUES
('21613','KL62',4,329.95);
INSERT INTO OrderLine
VALUES
('21614','KT03',2,595.00);
INSERT INTO OrderLine
VALUES
('21617','BV06',2,794.95);
INSERT INTO OrderLine
VALUES
('21617','CD52',4,150.00);
INSERT INTO OrderLine
VALUES
('21619','DR93',1,495.00);
INSERT INTO OrderLine
VALUES
('21623','KV29',2,1290.00);

Commit;
