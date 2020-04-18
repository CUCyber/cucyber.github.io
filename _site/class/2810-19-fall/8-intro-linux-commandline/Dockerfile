FROM ubuntu:16.04


# SSH Setup
RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /var/run/sshd
RUN useradd -m -s /bin/bash cucyber
RUN echo 'cucyber:password' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile


# Box Setup
RUN mkdir -p /home/cucyber/hello/world/
RUN mkdir -p /home/cucyber/.super_secrets/
RUN echo "2810{f1rst_message!}" >/home/cucyber/first_file
RUN echo "2810{message_deux}" >/home/cucyber/hello/world/second_file
RUN echo "2810{tres_three_tres}" >/home/cucyber/.third_file
RUN echo "2810{fer_is_lonely}" >/home/cucyber/.super_secrets/fourth_file
RUN echo "2810{fifth_isnt_here_long}" >/tmp/fifth_file
RUN echo "2810{six_log_successful}" >/var/log/sixth_file

USER root
WORKDIR /home/cucyber

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
