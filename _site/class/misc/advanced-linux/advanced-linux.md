## Advanced Linux Security

CPSC 4810 - Section 4


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## Advanced Linux Security



### Utilize single user mode to reset a root password

Note:
1. Reboot
2. Get to GRUB
3. Press `e` to edit the menu
4. Add `single` or `init=/bin/bash` at the end of the `linux` line



### Demonstrate fixing a broken package manager (yum or apt)

Note:
* Yum dir is /etc/yum.repos.d/
* yum mirrors must have .repo extension, to be recognized by YUM
* Apt dir is /etc/apt/sources.list



### Utilize journalctl to search through logs

Note:
Either you can journalctl -bra or you can't.



### Identify reverse shells using "users" and "watch ss -tpn"



### Demonstrate transfering files with netcat and curl or /dev/tcp


#### netcat and curl

Note:
* cat file.tar.gz | nc -lvp 8888
* curl ip:8888 > file.tar.gz


#### netcat and /dev/tcp

Note:
* cat file.tar.gz | /dev/tcp/127.0.0.1/8888
* cat </dev/tcp/127.0.0.1/8888 > output



### Utilize the proc filesystem to extract a running binary from memory

Note:
cat /proc/$PID/exe > $BINARY
