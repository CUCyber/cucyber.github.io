# Homework 3

## Task 1

Label the following zones on the diagram: DMZ, Internal, and External
\ 

![Network Diagram](images/HW3.png)

\ 

## Task 2

```
Firewall Rule Format:


rule src <source zone/any> dst <destination zone/any> srcip <source ip/any> 
dstip <destination ip/any> svc <service/port/any> action allow
```
Use the rule format above to write the necessary firewall rules to satisfy the following requirements. Write one line per rule and replace things with brackets either by what they require or 'any' if any object is allowed to satisfy the rule.

* External can access each application in the DMZ **except for the Database**
* Internal can access DMZ
* Internal can access Internet


\ 

**Due Date:** Tuesday, September 25th, 5:59 PM on Canvas
