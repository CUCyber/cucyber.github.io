## Windows Firewall

CPSC 2810



### Introduction Questions

What is a port?



### Introduction Questions

What is the purpose of a firewall?



### Introduction Questions

Why is a firewall useful?



### Explore

1. Get into pairs
2. Add outbound Firewall to deny on port 80
3. Try accessing a website
4. Remove created Firewall rule
5. Write down why you think the internet didn't work



### Ports

* "Endpoint of communication"
* Different services live on their own port
* Colon (':') seperates ports from host
* 192.168.1.1:80



### Common Ports

|port| service|
|:--:|:------:|
| 21 | FTP    |
| 22 | SSH    |
| 25 | SMTP   |
| 80 | HTTP   |
| 443| HTTPS  |



### Inbound vs Outbound

![directions](directions.png)



### Public vs Private

* Windows sets connections to either public and private
* Public - Starbucks
* Private - Home



### Firewall

* Specifies which ports the computer is allowed to communicate over
* Blocking port 80 outbound stops HTTP requests
* PLP - If you are managing an HTTP server, only allow port 80 inbound



### netsh

* CLI tool to reset firewall
* Done before setting up rules
* `netsh advfirewall reset`


### PowerShell



### PowerShell

```powershell
New-NetFirewallRule -DisplayName "Block Outbound Port 80" -Direction Outbound -LocalPort 80 -Protocol TCP -Action Block
```

Note:
If there is time leftover, get them to do the same lab, but using PS. Remember to reset the firewall or else the same rule will stick



## Questions?
