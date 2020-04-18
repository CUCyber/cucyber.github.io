## Activity

* You have 10 minutes to decide whether or not this box has been hacked
* Work with your group

`ssh week3lab@week3.vm.cucyber.net`

password: `week3lab`


## Big Picture


## Previous Questions

Note:
* Have someone in the class explain level 12 bandit OTW.
* ssh bandit12@bandit.labs.overthewire.org -p 2220
* 5Te8Y4drgCRfCx8ugdwuEX8KFC6k2EUu


## Hackpack

CPSC 2810 - Section 2


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## What is a Hackpack?


### What is a Hackpack?

* A hackpack is a collection of checklists, service hardening information, and dos and don'ts that you can use as a reference during a cyberdefense competition.


## Why should we have a Hackpack?

Note:
Propose this question to the students. Answer it if it hasn’t be answered.



## CU Cyber Hackpack

Note:
* Pull up the CU Cyber hackpack here: https://cucyber.net/documents/hackpack.html
* List each section contained in the hackpack


## 30 Minute Checklist


### What is a "30 Minute Checklist"


### Why would you want to have a "30 Minute Checklist"?

Note:
You don’t need a 30 minute checklist in your final project and we would be excited if you figured out a different way to do it, but we’ve found that it’s very important to cybersecurity competition documentation.


### 30 Minute Checklist

* Change the password for the root account
  - find path to 'passwd'
   + `type passwd`
  - ensure passwd is not a script
   + `cat <path to passwd>`
  - `passwd <user>`


### 30 Minute Checklist

* Audit users and groups for invalid entries
 - cat /etc/passwd
 - cat /etc/shadow
 - cat /etc/group
 - '/etc/fstab' - owned by 'root:root' - has permission '0644'
 - '/etc/passwd', '/etc/shadow', & '/etc/group' are all owned by 'root:root'
 - '/etc/passwd' & '/etc/group' - has permission 644
 - '/etc/shadow' - has permission 400


### 30 Minute Checklist

* Check the crontab(s) for running tasks
 - crontab -l
 - crontab -e
* Limit cron to root
 - cd /etc/
 - /bin/rm -f cron.deny at.deny
 - echo root >cron.allow
 - echo root >at.allow
 - /bin/chown root:root cron.allow at.allow
 - /bin/chmod 400 cron.allow at.allow


### 30 Minute Checklist

* Create a report of running processes
 - ps aux


### 30 Minute Checklist

* Create a report of running services
 - ss -tulpn


### 30 Minute Checklist

* Check for files with wide permissions and setuid
 - setuid bit
  + `find <dir> -perm -u=s`
 - world writable
  + `find <dir> -perm -o=w`


### 30 Minute Checklist

* Check mounted filesystems
 - lsblk


### 30 Minute Checklist

* Prevent device files, setuid files, and executables in globally writable directories
 - mount -o remount,nodev,nosuid,noexec /tmp
 - mount -o remount,nodev,nosuid,noexec /var/tmp
 - mount -o remount,nodev,nosuid,noexec /dev/shm


### 30 Minute Checklist

* Install important system and security updates
 - OpenSSL, OpenSSH, Apache, FTP, SMTP, DNS
 - Linux kernel (requires reboot)


### 30 Minute Checklist

* Run a full system backup


### 30 Minute Checklist

* Check and configure '/etc/sudoers' and '/etc/sudoers.d/*'


### 30 Minute Checklist

* Harden the service(s) for your machine
* Check for misconfigured files
* Install and configure a firewall
 - UFW or Firewalld


### CU Cyber’s 30 Minute Checklist

* Write an audit report containing changes made



## Semester Project



# Questions?



# Homework



# Lab
