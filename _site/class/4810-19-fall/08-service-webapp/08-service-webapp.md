## Cybersecurity Competition Training

CPSC 4810



### Introduction Questions

Has anyone done website development?



### Introduction Questions

What languages can websites be written in?



### Introduction Questions

Has anyone tried hacking a website?



### Introduction Questions

How would one go about hacking a website?



### Introduction Questions

How does a custom webapp differ from Apache or Nginx?



### Explore

1. Navigate to 10.0.129.144:80 and 10.0.129.144:8000
2. Given two websites, identify which is Apache and which is custom
3. Find a backdoor in the Apache



### How to Configure Apache

* Config directory: `/etc/apache2/`
* `Listen 127.0.0.1:80`



### How to Configure Nginx

* Config directory: `/etc/nginx`

```
server {
  listen 3200 default_server;
  ...
}
```



### Document Root

* Document root is where source files are stored
* Typically `/var/www/html`



### Misconfiguration: Directory Listing

```
<Directory /usr/local/apache2/htdocs/dontlistme>
  Options -Indexes
</Directory>
```

Note:
* Why is directory listing bad?



### Misconfiguration: Server Header

Gives more information about the server which could be used against you.

```
...
Header unset Server
```



### PHP Shells

* `system()`, `exec()`, `shell_exec()`
* system — Execute an external program and display the output
* Examine document root for these functions

Note:
* Do a `grep` for system



### SQL Injection

* `$conn->query('SELECT * FROM users WHERE id = '.id);`

Note:
* Use prepared queries instead of string appending



### Logs

* `/var/log/apache2`
* `/var/log/nginx`



### Custom Webapp

* Not every web server uses Apache or Nginx
* Custom webapps give developers more flexibility



### Custom Webapp: NodeJS

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Listening on :${port}!`));
```



### Custom Webapp: Flask

```
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
```



## Questions?
