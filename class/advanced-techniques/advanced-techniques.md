# Advanced Techniques

CPSC 2810 - Section 2



## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>


## Learning Objectives

* Explain the implications of your system being vulnerable to EternalBlue.
* Explain the implications of your system being vulnerable to DirtyCow.


## EternalBlue Overview

* SMB 101
* EternalBlue Exploit
* EternalBlue Detection/Remediation


## EternalBlue

* Exploit in SMBv1
* Written by NSA
* Leaked by Shadow Brokers in 2017
* Used in NotPetya
* Autoexploit to SYSTEM


### SMB 101

* Internet file system
* Port 445
* Always seems to have bad security holes


#### SMB 101

* Linux has SAMBA
* Windows has SMB features that can be turned on/off
  * Control Panel -> Programs -> Turn Windows Features On/Off
  * Options for SMBv1, SMBv2, SMBv3 (sometimes)


#### Essentially...

* There was a buffer overflow in SMB


### Basic Buffer Overflow

```C
char buffer[10];
strcpy(buffer, "Hello, world! My name is Nick");
```


### High-level Explanation

1. Exploit SMB memory allocation operation
2. Write shellcode to connection close handler in memory
3. Close connection
4. ??
5. Profit


### Higher-level Explanation

1. Run pre-written exploit
2. Buffer Overflow in SMBv1
3. ???
4. Profit


## Detection

* `Get-SmbConnection`?
* Check for named pipes/post-exploit stuff


## Remediation

1. Patch `KB4012598`
2. Turn off SMBv1


### Enable SMBv2

`Set-SmbServerConfiguration -EnableSMB2Protocol $false`


### Turn off SMBv1

`Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol`


### Demo



## DirtyCoW

> A race condition was found in the way the Linux kernel's memory subsystem handled the copy-on-write (CoW) breakage of private read-only memory mappings.


### High-level concept

1. Old kernel with a vulnerability in memory mappings
2. Executable runs to cause a race condition
3. /etc/passwd or SUID binary overwritten
4. ...


### High-level concept

![Groot](groot.jpg)


### Demo



# Questions?



# Lab

1. Download a dirtycow exploit
2. Compile it
3. Run it to get root privileges
4. Show me that you succesfully did it or submit a screenshot to Canvas
