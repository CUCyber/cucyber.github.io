## Secure Service Setup

CPSC 4810 - Section 5


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## Overview

* Identify common services
* Identify misconfigurations in common services
* Identify configuration locations



## Common Services

Protocol Activity:

* FTP
* SSH
* SMTP
* DNS
* HTTP

Note:
* Give the port number and actual services that implement these protocols



## Common Misconfigurations



Note:
* Web server
* The administrator uses the console to log into the system.



### FTP Server

```
listen=YES
local_enable=YES
write_enable=YES
xferlog_file=YES

anonymous_enable=YES
anon_root=/var/http/html

chown_uploads=YES
chown_username=apache2
```



### Web Server

```
Port 80

User apache2
Group apache2
DocumentRoot "/var/http/html"

<Directory /var/http/html>
  Options +Indexes
  AllowOverride None
  Order allow,deny
  Allow from all
</Directory>

```



### DNS

```
zone "example.com" in{
  notify "yes";
  file "/var/named";
  allow-transfer {192.168.0.3;};
};
```



### SSH

```
 Port 22
ListenAddress 192.168.1.1
HostKey /etc/ssh/ssh_host_key
ServerKeyBits 1024
LoginGraceTime 600
KeyRegenerationInterval 3600
PermitRootLogin yes
IgnoreRhosts yes
IgnoreUserKnownHosts yes
StrictModes yes
X11Forwarding no
```



## What did we learn?

Note:
Looking for overarching principles

* Don't allow the user to access more than they should be allowed to access



### This is the key to security!



## Configuration Location

* Linux: /etc/{Service Name}
* Windows: Literally everywhere
