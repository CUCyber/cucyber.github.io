## Intro to Windows and Windows Security

CPSC 2810 - Section 2



## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



### Objectives

* Windows vs Windows Server
* Services
* Basic Windows Server functions
  - Users and Groups
  - DNS
  - GPO



### Windows vs Windows Server

Note:
* Has anybody used Windows Server?
* How is Windows server different from Windows Home?



### Windows vs Windows Server

* Personal environment
* Domain environment

Note:
* Most people use the personal environment. Authentication is done locally.
* To make a domain, you must have AD/DS running in a Windows Server instance.
* Draw Windows server and AD/DS as concentric circles where AD/DS is inside Server to show difference.



## Services

Note:
Can anybody summarize what a service is?



## Services

* Programs that operate in the background
* Task Manager -> Services
* svchost.exe

Note:
* taskmgr.exe
* A few should be memorized but most can be ignored



## Windows Server

Note:
Has anyone used Windows server?



### Roles

* Abstraction of installing programs
* Windows server "services"
* AD/DS or Web Server
* Server Manager



### Features

* Augments usage of Roles
* .NET version 3.5
* HTTP Support
* RSAT-AD-PowerShell

Note:
RSAT-AD-PowerShell allows you to manage AD with PowerShell



### User Management

* Available in AD/DS
* Active Directory Users and Groups
* Centralized users, groups, and computer management

Note:
* Why is centralized users, groupus, and computer management useful?
* Demo



### Domain Name System (DNS)

* Comes with AD/DS
* New computers on domain get record with computer name
* Edit DNS records with "DNS Manager"



### Group Policy Object (GPO)

* "Group Policy Management"
* Settings to define how AD acts
* Describes what domain can (and can't) do
* Uses inheritance model
