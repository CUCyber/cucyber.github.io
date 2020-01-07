FROM ubuntu:16.04


# SSH Setup
RUN apt-get update
RUN apt-get install -y openssh-server
RUN mkdir /var/run/sshd
RUN useradd -m -s /bin/bash cucyber
RUN echo 'cucyber:password' | chpasswd
RUN echo 'root:password' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Add some default packages
RUN apt-get install -y vim less iputils-ping nano sudo libuser man


# Box Setup
RUN useradd -s /bin/bash -m john
RUN useradd -s /bin/bash -m jack
RUN useradd -s /bin/bash -m ryan
RUN useradd -s /bin/bash -m max
RUN useradd -s /bin/bash -m rex
RUN useradd -s /bin/bash -m nick
RUN useradd -s /bin/bash -m ronald
RUN useradd -s /bin/bash -m lioali

RUN usermod -a -G sudo ryan
RUN usermod -a -G audio ryan
RUN usermod -a -G users ryan

USER root
WORKDIR /root

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

