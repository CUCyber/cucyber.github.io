# Homework 3

## Task 1

Top left zone: DMZ
Top right zone: External
Bottom zone: Internal

## Task 2

### External can access each application in the DMZ except for the Database

* rule src External dst DMZ srcip Any dstip 10.0.1.3 svc DNS action allow
* rule src External dst DMZ srcip Any dstip 10.0.1.4 svc File action allow
* rule src External dst DMZ srcip Any dstip 10.0.1.5 svc SMTP action allow
* rule src External dst DMZ srcip Any dstip 10.0.1.6 svc Web action allow

OR

* rule src External dst DMZ scrip Any dstip 10.0.1.2 svc Database action deny
* rule src External dst DMZ srcip Any dstip Any svc Any action allow

### Internal can access DMZ

* rule src Internal dst DMZ scrip Any dstip Any svc Any action allow

### Internal can access Internet

* (Bonus) rule src Internal dst External scrip 10.0.2.2 dstip Any svc Any action deny
* (Bonus) rule src Internal dst External scrip 10.0.2.3 dstip Any svc Any action deny
* (Bonus) rule src Internal dst External scrip 10.0.2.4 dstip Any svc Any action deny
* rule src Internal dst External scrip Any dstip Any svc Any action allow
