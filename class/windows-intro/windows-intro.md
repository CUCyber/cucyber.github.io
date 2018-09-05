# Windows and Windows Security

CU Cyber

## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>


## Intro to Windows


### Objectives

* Windows vs Windows Server
* Basic Windows functions
	- Users and Groups
	- GPO
	- Kerberos
* Powershell
* Event Logs


### Windows vs Windows Server

* Personal environment - Install Windows normally
* Enterprise environment:
	- Windows Enterprise Edition - User's workstations
	- Windows Server - used for servers. Needed in enterprise for AD


### Local users vs Domain users

* Local users - connect to local box
* Domain users - connect to any device which is connected to domain


### Group Policy Object (GPO)

* Settings to define how AD acts
* Describes what domain can (and can't) do
* Uses inheritance model


### Kerberos

* Authentication to Windows
* Does not require DC to reauthenticate
* Tickets


### Powershell

* Like bash, but better
* Verb-Noun/Verb-AdjNoun Idiom


#### Commands

* Get-Process
* Get-LocalUser (Get-ADUser -Filter *)
* Get-Help


### Event Viewer

* Windows does a good job of logging
* Searching through logs is the hard part
* LOL exe to find Event Logs
* ELK/Splunk would be easier



# In-class game
