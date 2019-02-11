## Previous Information

* Layer 2 is to MAC address as Layer 3 is to ...
* Homework Review


## Big Picture



## Intro to Network Security

CPSC 2810 - Section 2


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## Overview

* An introduction to basic network security principles.



## Learning Objectives

* Identify common local firewalls (UFW and firewalld).
* Utilize common local firewalls (UFW and firewalld) to secure services.
* Identify the benefits of network segmentation.
* Identify common network segments for small networks.



## Intro to Networking Security

Note:
What does networking security mean to you?



## Host-Based and Network-based Firewalls

Note:
Host-based firewalls are typically run in conjunction with a network-based firewall as all traffic is allowed inside of a zone


### Host-Based

* UFW
* Firewalld
* IPTables


#### UFW

* UFW (uncomplicated firewall) is a very popular option when managing your local firewall
* UFW is the default host-based firewall for Ubuntu
* UFW was developed with ease-of-use in mind


#####  UFW Commands

* Enable UFW:
 - sudo ufw enable
* Disable UFW:
 - sudo ufw disable
* Check the status of UFW:
 - sudo ufw status verbose


##### UFW Commands

* Allow HTTP:
 - sudo ufw allow http
* Allow an arbitrary port (TCP and UDP):
 - sudo ufw allow 1000
* Allow an arbitrary port on a specific protocol:
 - sudo ufw allow 1000/tcp


#### FirewallD

* The standard firewall on CentOS and Fedora
* Slightly more complicated than UFW, but much better than IPTables
* Has the concept of zones where UFW does not


##### FirewallD Commands

* Enable and start firewalld:
 - sudo systemctl enable --now firewalld
* Disable and stop firewalld:
 - sudo systemctl disable --now firewalld
* Check the status of firewalld:
 - sudo firewall-cmd --state


##### FirewallD Commands

* Add HTTP to the public zone:
 - sudo firewall-cmd --zone=public --add-service=http --permanent
* Add an arbitrary port:
 - sudo firewall-cmd --zone=public --add-port=1234/tcp --permanent


##### FirewallD Commands

* Remove an arbitrary port:
 - sudo firewall-cmd --zone=public --remove-port=1234/tcp --permanent
* Reload the firewalld configuration:
 - sudo firewall-cmd --reload


#### IPTables


##### IPTables Commands

* Show IPTables rules:
 - iptables -L --line-numbers
* Add an arbitrary port:
 - iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT
* Remove an arbitrary port:
 - iptables -D INPUT $rule_number
* Saving IPTables rules:
 - service iptables save


### Network-based

* Palo Alto
* PFSense

Note:
We don't cover Network-based firewalls in the intro-level class.



## Zones


### Why Zones

* Different requirements for different parts of the network
* Businesses are typically too large for simple rule based policies
* More granular control over traffic flow than a flat network
* Control Inter-Zone traffic

Note:
Equate this to network segmentation based on zones


## Typical Zones

* External
* DMZ
* Internal


#### External

* The external zone is the zone that is beyond the border router (the main gateway for your network).


### DMZ

* Does not have a way into the internal network unless specifically allowed
* Has the most strict rules (typically no traffic can leave unless specifically allowed)

Note:
What services should go inside the DMZ?

Any service that is being provided to users on the external network can be placed in the DMZ. 

The most common of these services are:
* Web servers
* Mail servers
* DNS servers
* FTP servers
* VoIP servers

Web servers that communicate with an internal database require access to a database server, which may not be publicly accessible and may contain sensitive information. The web servers can communicate with database servers either directly or through an application firewall for security reasons.


### Internal

* The internal zone is the one that generally hosts internal company systems and services.
* Any service that should be only allowed to users on the internal network is placed in the internal network.
* This zone generally has no inbound rules and some outbound restrictions in a well set up corporate environment.

Note:
* What would you put in the internal network?
 - databases
 - another firewall
 - things that do not need to be public
 - AD / Internal DNS
 - HR Webapp



### Questions?


### Homework


### Lab
