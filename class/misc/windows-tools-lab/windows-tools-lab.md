# 4810 Lab 2/27

## Pre-requirements

* Windows Server 2008-2016
* Active directory installed and configured


## Steps

1. Turn on "use reversable encryption"
  * Open "Manage Security Policy" (Make sure it's not local security policy)
  * Computer Configuration\Windows Settings\Security Settings\Account Policies\Password Policy\
2. Download and start sysmon
  * https://live.sysinternals.com/Sysmon64.exe
  * `.\Sysmon.exe -i`
3. Add a user
  * Give it a simple password
4. Use mimikatz to get password
  * Use dcsync to get plaintext password (lsadump::dcsync)
5. Try to find yourself in the Sysmon logs
  * Sysmon logs are located at "Applications and Services Logs\Microsoft\Windows\Sysmon"
6. Use Mimikatz to get password
  * Run `privilege::debug`
  * Get NTLM Hash of a user (sekurlsa::logonpasswords)
7. Find yourself in the sysmon logs
8. Decrypt the NTLM hash using online tools


## Questions

1. What is the difference between `lsadump` and `sekurlsa`?
2. Were you able to find your newly created user in `sekurlsa`? Why or why not?
3. What did sysmon report in both instances?


## Stuck?

* Try logging into the new user account if you are unable to see it in `sekurlsa`
