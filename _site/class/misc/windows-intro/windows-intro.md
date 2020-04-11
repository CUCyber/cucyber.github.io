## Intro to Windows and Windows Security

CPSC 2810 - Section 2


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## Objectives

* Windows vs Windows Server
* Services
* Basic Windows Server functions
  - Users and Groups
  - DNS
  - GPO



## Windows vs Windows Server

Note:
* Has anybody used Windows Server?
* How is Windows Server different from Windows Workstation?
* Can't set up a domain environment from a Windows Workstation
* Can join a domain from a Windows Workstation


### Windows vs Windows Server

* Personal environment
* Domain environment

Note:
* Most people use the personal environment. Authentication is done locally.
* To make a domain, you must have AD/DS running in a Windows Server instance.
* Draw Windows server and AD/DS as concentric circles where AD/DS is inside Server to show difference.



## Windows Workstation


### Services

Note:
* Can anybody summarize what a service is?


### Services

* Programs that operate in the background
* Task Manager -> Services
* svchost.exe

Note:
* SVCHost spawns services and runs them in a secure contexttask
* taskmgr.exe
* A few should be memorized but most can be ignored



## Windows Server


### Roles

* Abstraction of installing programs
* Windows Server "services"
* Server Manager

Note:
* Roles are usually overarching purposes like "Web" or "Active Directory" or "Exchange Server"
* Open up Server Manager and show them the role menu


### Features

* Augments usage of Roles
* Generically adding support for something (Telnet, SMB, ...)

Note:
* HyperV is a feature
* Internet Explorer is a feature
* RSAT-AD-PowerShell allows you to manage AD with PowerShell


### User Management

* Available in AD/DS
* Active Directory Users and Groups
* Centralized users, groups, and computer management

Note:
* Why is centralized users, groups, and computer management useful?


### Domain Name System (DNS)

* Comes with AD/DS
* AD/DS relies on DNS
* New computers on domain get record with computer name
* Edit DNS records with "DNS Manager"


### Group Policy Object (GPO)

* "Group Policy Management"
* Settings to define what users can and can not do
* Password Policies, Installed Programs, User Environment (Desktop)

Note:
* Server Manager -> Tools -> Group Policy Management -> (Domains -> nick.com -> Default Domain Policy -> Settings)
