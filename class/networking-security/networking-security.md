## Activity

* Open Wireshark and navigate to a website
* Discuss with your partner what you think you are seeing


## Discussion


## Big Picture



## Intro to Network Security

CPSC 2810 - Section 2


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## Overview

* An introduction to networking and basic network security principles.



## Learning Objectives

* Identify common local firewalls (UFW and firewalld).
* Utilize common local firewalls (UFW and firewalld) to secure services.
* Identify the benefits of network segmentation.
* Identify common network segments for small networks.



## Intro to Networking Security


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

* Does not have a way into the internal network
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

* Internal network usually are more dynamic than external networks
* Typically require dynamic routing

Note:
* What would you put in the internal network?
    - databases
    - another firewall
    - things that do not need to be public
    - AD / Internal DNS


#### DMZ

* DMZ or the Demilitarized Zone is a network zone which is segregated from the internal network.
* The hosts most vulnerable to attack are those that provide services to users outside of the local area network, such as e-mail, Web and Domain Name System (DNS) servers. Because of the increased potential of these hosts suffering an attack, they are placed into this specific subnetwork in order to protect the rest of the network should any of them become compromised.



#### Internal
The internal zone is the one that generally hosts internal company systems and services.
Any service that should be only allowed to users on the internal network is placed in the internal network. The most common of these services are:
HR web application servers
CIFS/NFS/ZFS servers
User endpoints are on this network.
This zone generally has no inbound rules and some outbound restrictions in a well set up corporate environment.



### VLAN
Zones are generally implemented in one of two ways: LANs and VLANs. LANs are separated at the physical port level of the router. VLANs (Virtual LANs) are separated at the virtual layer 2 packet header level.
VLANs can be configured for managed switches down the line and all plugged in, eventually, to a single port on the router.
Ones needs to be careful when implementing these to only allow tagged traffic from trusted sources such as routers, other switches, and hypervisors.



### Questions?


### Homework


### Lab
