## Windows Local Security Policy

CPSC 2810



## Introduction Questions



### Introduction Questions

What is wrong with allowing users to set their own passwords?

Note:
* Passwords will likely be easily brute-forcable



### Introduction Questions

What is wrong with only letting IT people set each person's password?

Note:
* The password will not be secure since multiple people know it
* Password reuse



### Introduction Questions

What is a security policy?

Note:
Don't give an answer for this



### SANS Policy Templates



### Explore

1. Get into pairs
2. Navigate to Local Security Policy
3. Edit
  * Minimum password length
  * Turn on "Audit Logon Events"
  * Turn off "Allow log on through Remote Desktop Services"
4. Make note of other options that seem useful



### Local Security Policy

* LSP allows enforcing many system-, user- and security-related settings
* secpol.msc


### Auditing

* Enables logs for specific events in EventViewer


### Options in LSP

* Account logon auditing
* Object access
* Application whitelisting
* Password strength
* Much more


### Command Line

Export LSP: `secedit /export /cfg c:\secpol.cfg`


### Homework

Find 5 LSP options that could be used to make a computer more secure. Give a few sentences explaining what it is and how it could relate to computer security.


### Questions?
