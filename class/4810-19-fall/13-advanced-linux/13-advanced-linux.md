## Cybersecurity Competition Training

CPSC 4810



### Introduction Questions

Why might we need to recover a password?



### Introduction Questions

Who knows how to recover a password on Linux?



### Explore

1. Get into groups of two
2. Run the following command to set the immutable flag on `/etc/shadow`
 - `chattr +i /etc/shadow`
3. Attempt to change the password for any user on the system
4. Use the `strace` command to investigate what might be happening



### Explain


#### File Immutability

* The `chattr` command allows you to change file *attributes* on a Linux file system
* One common usage of `chattr` is to use it with the `+i` flag - this makes the file immutable
* Immutable means "unchanging over time or unable to be changed"
* Not even the root user is able to alter an immutable file - the flag must be removed first

Note:
* Why might you want to set a file to be immutable?
* What could happen if an important file like /etc/shadow is made immutable?


#### Linux Pluggable Authentication Module (PAM)

* PAM provides dynamic authentication support for applications and services on Linux
* Authentication is separated into four independent management groups


##### PAM Management Groups

* Account Modules: Check that the specified account is a valid authentication target
* Authentication Modules: Verify the user's identity
* Password Modules: Update passwords and enforce password policies
* Session Modules: Define actions that are performed at the beginning and end of sessions

Note:
* Account module checks may include conditions like account expiration, time of day, and that the user has access to the requested service
* Authentication modules may request and check a password or other secret
* Sessions start after a user has successfully authenticated


##### PAM and Passwords

* When you run the `passwd` command to reset a password, PAM
 - Checks to see if you are resetting your own password or someone elses
  + If you are resetting your own, prompts your current password to auth
  + If you are resetting someone elses, checks if you are effectively root
 - Reads the new password from your input
 - Checks to see if it conforms to the current password policy


##### PAM and Passwords (Cont.)

* When you run the `passwd` command to reset a password, PAM
 - Creates a file called `/etc/nshadow`
 - Reads `/etc/shadow`
 - Modifies its contents
 - Writes it to `/etc/nshadow`
 - Renames `/etc/nshadow` to `/etc/shadow`


#### Single User Mode

* Single user mode is a very minimal environment where only the system administrator is using the machine and as few system services, including logins, as possible are running
* To access single user mode when using GRUB
 - Restart your computer
 - At the GRUB boot screen, press `e` on the entry you want to boot into
 - On the line that says "linux", add `init=/bin/bash` and set `ro` to `rw`
 - Boot into your machine with `ctrl+x` or `F10`


#### /proc

* When running the `strace` command you were inspecting the system calls of a running process
* You should recall that we can see all of a Linux system's running processes with `ps aux` or `top`
* What we are seeing from `ps aux` is the output of what is called the *proc* filesystem
* The *proc* filesystem contains information about running processes and the kernel
* More precisely, it is a pseudo-filesystem which provides an interface to kernel data structures


##### /proc Entries

* If you run `ls` on `/proc`, you will predominantly see a lot of directories with numbers for their names
* This directory listing shows the directories of all running processes
* Within these folders, files contain meta information about each running processes
* Two important items within each folder are
 - `/proc/<pid>/exe` - Executable path
 - `/proc/<pid>/fd/` - File descriptors


##### /proc Entries (Cont.)

* `/proc/<pid>/exe` contains a symbolic link to the process' executable
* `/proc/<pid>/fd/` contains a symbolic link to all open file descriptors used by the process
* **By using the `cat` command and redirecting the output to another file, you can restore entire files (executables, open file descriptors, etc.) from the process.**
 - `cat /proc/1234/exe > /root/executable.bin`



### Activity

* Get back into groups of two
* Successfully recover the root password
* Use the /proc filesystem to extract a running binary
 - Run the binary yourself to recover the hidden message


Note:
* Students must successfully change the password using single user mode
* Students must be able to log into the machine under a normal boot after they have changed the password



### Questions?
