## Cybersecurity Competition Training

CPSC 4810



### Introduction Questions

What is the AD responsible for?



### Introduction Questions

Why is it so important to secure AD/DS?



### Introduction Questions

What does DNS do?



### Introduction Questions

Why is DNS needed for an AD installation?



### Explore

1. Get into pairs
2. Use Mimikatz to dump cleartext credentials
3. Use PSExec in Metasploit to log in with found credentials
4. Use PowerView to find Domain Admins



### Dumping credentials

* Data is stored in lsass.exe
* Mimikatz reads from lsass.exe memory

Note:
* Point 2 is actually a lie, but that's the easiest way of describing it
* How can this be prevented?
  * It can't really unless Microsoft fixes it
  * In the mean time, just watch for processes that are reading memory from lsass



### PSExec

* Like Telnet or SSH for Windows
* Part of sysinternals
* Communication through SMB
* If psexec is used, hard to tell if legit or not

Note:
* It's apart of homework to find out how psexec usage can be found
  * Hint: it has to do with Sysmon


### PowerView

* Windows host enumeration
* `Get-NetGroup "Domain Admins" | Get-NetGroupMember`
* How does this information help us? (Think Mimikatz)
* How can this be detected if used on the network?



#  Questions?
