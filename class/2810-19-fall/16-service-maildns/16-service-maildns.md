## Linux Mail and DNS

CPSC 2810



### Introduction Questions

What is DNS?



### Introduction Questions

Who is in charge of all domains and subdomains?



### Introduction Questions

What is a recursive DNS server?



### Introduction Questions

Has anyone set up a mailserver?



### Explore

1. On the server
  1. Install BIND9
  2. Create "example.com" zone
  3. Create 2 A records
  4. Add TXT record
  4. Allow zone transfers from any computer
2. On your computer
  * Find the A record
  * Pull the entire list of records



### DNS Basics

* Phonebook for the internet
* DNS maps domain names to IP addresses
* Each seperation by the '.' is a different server
* Recursive vs authoritative

Note:
* Authoritative DNS servers decide which hostnames match which IPs
* Recursive DNS servers ask authoritative DNS servers for their hostnames



### Recursive DNS

![recursive](dns-recursive.png)



### Authoritative DNS

![authoritative](dns-authoritative.png)



### Question

Why are recursive DNS servers useful?



### Add DNS Records Using Bind9

/etc/bind/db.zone1
```
lab.local IN A 192.168.1.3;
lab2.local IN A 192.168.1.4;
```

Note:
* You can add any type of record here
* Replace A with TXT to create a TXT record



### Misconfiguration: Zone Transfer

* Allow clients to pull ALL records in a domain
* Why is this a misconfiguration?
* When would this feature be useful?



### Disable Zone Transfers Using Bind9

```
options {
   ....
   // ban everyone by default
   allow-transfer {"none";};
};
...
zone "example.com" in{
  ....
  allow-transfer {192.168.0.3;};
};
```



### Mail

Mail is super complex and nobody knows how to do it.



### You've Got Mail - Postfix/Dovecot

* Postfix - Mail transfer agent. Configured to send mail
* Dovecot - Implements IMAP and POP3 for capturing and storing mail



### Dovecot User Management

/etc/dovecot/passwd

```
max:{PLAIN}pass::::::
weston:{PLAIN}secret::::::
matt:{PLAIN}hello123::::::
```

Note:
* As always, you will need to do user management when working with mail
* Users on the server are also have mail boxes by default



### Dovecot User Management

More secure way of storing passwords

```
doveadm pw -s ssha256
Enter new password: password
Retype new password: password
{SSHA256}ZpgszeowIcHdoxe3BNqvUTtPxFd6fMsyQxEWyY0Qlobaacjk
```

Note:
* Why is this a better way of storing passwords?



## Questions?
