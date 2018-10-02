## Intro to Docker and Secure Service Setup

CPSC 2810 - Section 2


## You Can Find These Presentations Online

Visit [cucyber.net](https://cucyber.net/) to find these presentations and more online!

<span style="padding-top: 6em; font-size: 0.4em; float: left;">Material: <a href="https://tldrlegal.com/license/creative-commons-attribution-sharealike-4.0-international-(cc-by-sa-4.0)">Creative Commons Attribution-ShareAlike 4.0</a></span><span style="padding-top: 6em; font-size: 0.4em; float: right;">Code: <a href="https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)">BSD 2-Clause</a></span>



## Overview

* A brief overview of common misconfigurations on popular services, proper config files of each major service and what those options mean in the big picture (specifically against attacks). Also, we will cover what Docker is, how it is used in corporate environments, and how we can use it during a competition.



## Learning Objectives


* Be able to identify misconfigurations in Apache, Nginx, OpenSSH, and VSFTPd
* Understand what Docker is
* Understand Docker’s use in a corporate environment
* Be able to execute basic Docker commands
* Understand how misconfigurations in a Docker container can impact your security



## Intro to Docker and Secure Service Setup


### Services

Note:
Be able to identify misconfigurations in Apache, Nginx, OpenSSH, and VSFTPd


#### What is a service?

* An application that:
 - waits for a request from a client (internal or external)
 - processes this request
 - sends an appropriate response to the client

Note:
Generally, or at least in the context of a defense competition, a computer service is an application that waits for a request from a client (internal or external), processes this request, and will usually send some sort of response back to the client.
