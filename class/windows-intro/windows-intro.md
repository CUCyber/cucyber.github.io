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
  - Authentication (Kerberos)
* Powershell
* Event Logs



### Windows vs Windows Server

Note:
Has anybody used Windows Server?
How is Windows server different from Windows Home?



### Windows vs Windows Server

* Personal environment
* Domain environment

Note:
Most people use the personal environment. Authentication is done locally.
To make a domain, you must have AD/DS running in a Windows Server instance. Draw Windows server and AD/DS as concentric circles where AD/DS is inside Server to show difference.



## Services

Note:
Can anybody summarize what a service is?



## Services

* Programs that operate in the background
* Task Manager -> Services
* svchost.exe
* Service groups

Note:
taskmgr.exe
A few should be memorized but most can be ignored



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
Why is centralized users, groupus, and computer management useful?



### Domain Name System(DNS)

* Comes with AD/DS
* New computers on domain get record with computer name
* Edit DNS records with "DNS Manager"

Note:
DNS will probably come up later (unless we want to talk about it now)



### Group Policy Object (GPO)

* "Group Policy Management"
* Settings to define how AD acts
* Describes what domain can (and can't) do
* Uses inheritance model



### Kerberos

* Authentication to Windows
* Does not require DC to reauthenticate
* Tickets

Note:
We'll talk a lot more about Kerberos later.



#### How does Kerberos work?

1. Request TGT from AS
2. AS responds with
  1. User ID, TGS ID, session key encrypted w/ *TGS secret key*
  2. User ID, TGS ID, session key encrypted w/ *client secret key*
3. Client decrypts 2nd message
4. Client encrypts 1st message with session key
5. Client sends message to server
6. Server authenticates with client

Note:
Similar process is done in other direction so that user knows server is correct



#### Authentication with application server

1. User requests ticket for application
2. Server responds with server-known encrypted message
3. User sends message to application



### Powershell

* It's like Bash, but better
* Verb-Noun Idiom
  * Get-Service, Get-LocalUser

Note:
Everything today has been in GUI, but it can also be done in PowerShell. PowerShell is wrapper for C#, with easy-to-use API. Windows exposes C# API for most internal tools. Useful because PowerShell commands (shouldn't) change from Windows Server versions.



#### Get-Service + Get-Help

* Get-Service lists all services
* RTFM
* Get-Help / Update-Help
* Get-Help Get-Service



#### Process

* Get-Process
* Stop-Process



#### Pipe

* Get-Process | ?{$\_.Id -eq "<Number>"} | Stop-Process
* Get-Process | Stop-Process



#### Windows Server

* Get-ADUser -Filter *



### Event Viewer

* Windows does a good job of logging
* Searching through logs is the hard part
* LOLBaS to find Event Logs
* ELK/Splunk would be easier



# In-class game

1. Identify malicious event
2. Draw a timeline of events that occured
