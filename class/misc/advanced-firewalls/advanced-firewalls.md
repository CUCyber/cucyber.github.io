## Cybersecurity Competition Training

CPSC 4810 - Section 4


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



# Firewalls




## Host-Based vs. Network-based Firewalls

Note:
Host based firewalls are run in conjunction with a network based firewall as all traffic is allowed inside of a zone


### Host-Based

* UFW
* Firewalld


#### UFW

* ufw enable
* ufw allow 22 OR ufw allow ssh


#### FirewallD

* systemctl enable firewalld
* firewall-cmd --permanent --add-port=22/tcp
* firewall-cmd --reload


### Network-based


* Palo Alto
* PFSense



## Firewalls: Stateful, Stateless


### Stateful

* Firewalls have memory to store traffic information
    - Traffic is looked at in context
    - This is called stateful packet inspection (SPI)
* Only packets of a known connection are allowed to pass the firewall
* Firewalls also implement rules on the traffic during SPI

Note:
* Can tell what stage of a TCP connection the communication is in
* Can tell if the MTU has changed
* Can tell if the packet has fragmented


### Stateless

* Do not store traffic information
* Each packet is treated as a new connection
* Based on rules
    - These are sometimes referred to as access control lists (ACLs)

Note:
 * Does not know if a packet is pretending to be something you requested



# Traffic Control


## Rules 



### Why Rules


* Different requirements for each machine on the network
* Competitions are typically small enough for simple rule based policies
* Granular control over traffic flow


### Basics

* Source: where the traffic came from
* Destination: where the traffic is going
* Service: the service that the traffic is for
* Interface: interface the traffic is expected from
* Direction: going in or coming out
* Action: allow, deny, drop, reject

Note:
* Source: You can specify computers that traffic is allowed to come from.
* Destination: You can specify where traffic is going.
* Service: You can specify what service is allowed to connect to this.
* Interface: You only want traffic that is coming in on Ethernet.
* Direction: You can only SSH out of the network no incoming connections are allowed.
* Action: You can drop or allow connections matching the above rules.


### Examples

```
allow from external to 10.0.0.4 proto tcp port 22
allow from 10.0.1.0/24 to 10.0.0.5 proto tcp port 3306
allow from internal to external proto tcp port 80
allow from internal to external proto tcp port 443
allow from internal to external proto tcp port 587
```


## Zones


### Why Zones

* Different requirements for different parts of the network
* Businesses are typically too large for simple rule based policies
* More granular control over traffic flow than a flat network
* Control Inter-Zone traffic

Note:
Equate this to network segmentation based on zones


## Typical Zones


### Internal

* Internal network usually are more dynamic than external networks
* Typically require dynamic routing

Note:
* What would you put in the internal network?
    - databases
    - another firewall
    - things that do not need to be public
    - AD / Internal DNS


### DMZ

* Does not have a way into the internal network
* Has the most strict rules (typically no traffic can leave unless specifically allowed)

Note:
* What are things you would put in a DMZ?
    - DNS
    - static websites
    - etc.


## Separation

* Separation requires packets between them to go through firewall
* Generally physically separated onto different ports on the firewall




# Packet Inspection


## Deep Packet Inspection (DPI)

* In DPI routers look at the whole packet instead of just the relevant layer 3 header
* Many commercial firewall solutions, e.g. Palo Alto, have this feature



## App-ID

* Use in creating rules based on the detected application
* E.g. allow actual MySQL data on a port instead of TLS data



# NAT


## Why NAT

* Used to change what box a service is on without updating the scoreboard
* Used by the competition staff to translate ISP level ips to the same ip for every team


## Source Translation

* Changes the source address of a packet
* Can make a packet from 10.0.0.3 appear as though it is coming from 10.0.0.5


## Destination Translation

* Changes the destination address of a packet
* Can make a packet going to 10.0.0.3 instead go to 10.0.0.5


## NAPT

* Network Address and Port Translation
* A type of translation where multiple addresses are multiplexed behind a single address
* Can make a packet from 10.0.0.4 go to 130.127.255.250 and back without 130.127.255.250 knowing the actual source address



### NAPT

* Does source translation so that source address is that of the router
* Adds routes based on addresses and ports of connection to allow those packets to get back to the original host


## Interaction with Rules

* Rules are applied to pre-NAT source and destination address
* Rules are applied to post-NAT zones
* Translation of the IP address and port do not occur until the packet leaves the firewall



# Interfacing with the Firewall


## Firewall Changes

* Changes do not take effect until after committing them


## Command line vs. Web GUI

* Web GUI can be accessed from a zone on the network
* This provides access to the red team if they can pivot inside that zone
* Command line accessed from hypervisor
