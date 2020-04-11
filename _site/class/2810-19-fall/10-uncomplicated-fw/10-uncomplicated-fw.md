## Uncomplicated Firewall

CPSC 2810



### Introduction Questions

Who knows which firewalls we have by default on Ubuntu?


### Introduction Questions

What is the difference between the inbound and outbound rule chains?



## Explore

* Get into pairs
* Add a firewall rule that blocks incoming http traffic
* Try accessing the website at your ip address? What happens and why?
* Delete the rule blocking http
* Set the default outbound policy to Deny. What practical effect does this have?



## UFW Basics


### UFW = Uncomplicated FireWall


### UFW Basics: Syntax

View the current ruleset

```
sudo ufw status verbose
```

This shows the current logging level, chain defaults, and the active ruleset.


### UFW Basics: Syntax 

Enable the firewall

```
sudo ufw enable
```

This turns on the firewall



### UFW Allow Rule

```
ufw allow <in|out> port
```


### UFW Allow Example

```
1. $ ufw allow in 22
```

Note:
Allow people outside your machine to access a local ssh server


### UFW Allow Rule

In/Out is from the perspective of the firewall


### UFW Deny Rule

```
ufw deny <in|out> port
```


### UFW Deny Example

What is the difference between these two rules?

```
1. $ ufw deny in 80
2. $ ufw deny out 80
```

Note:
1. is blocking inbound traffic to a local web server
2. is blocking outgoing web traffic. Won't be able to get to many websites.


### UFW Default Rule

Controls whitelist vs blacklist

```
ufw default <allow|deny|reject> [incoming|outgoing|routed]
```


### UFW Default Rule Example

```
1. $ ufw default deny outgoing
2. $ ufw default allow incoming
```
