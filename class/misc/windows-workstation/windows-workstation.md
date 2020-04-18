## Windows Workstation Security

CPSC 4810 - Section 11



## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



### Objectives

* User management
* Firewall
* Scheduled tasks/jobs
* Adding computer to domain



#### First Thing to Do on Windows



#### PATCH ETERNAL BLUE

```powershell
PS C:\> Set-SmbServerConfiguration 
    -EnableSMB1Protocol $false
PS C:\> Set-SmbServerConfiguration 
    -EnableSMB2Protocol $true
```



#### User Management

* Control Panel
  * User Acounts and Family Safety
    * Add or remove user accounts



#### Firewall

* Control Panel
  * System and Security
    * Windows Firewall
* Turn it on



#### Firewall: Add rules

* Advanced Setting -> "Inbound rule"
* Follow wizard



#### Scheduled Tasks

* `Get-ScheduledTask`
* `Get-ScheduledJob`

Note:
* Scheduled task is the normal task scheduler
* Scheduled job is a PS thing



#### Add Workstation to Domain

* Control Panel
  * System and Security
    * System
      * Advanced Settings
* "Change" -> "Member of"
