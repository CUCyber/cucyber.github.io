## Cybersecurity Competition Training

CPSC 4810



### Introduction Questions

What is a database?



### Introduction Questions
Why are databases useful?



### Introduction Questions
What language is used to query data from MySQL?



### Explore

1. Get into groups of two
2. Use MySQL
  * Get all products
  * Get all product names
  * Add a product
  * Update a product
  * Remove a product



### Lab Tutorial

* Get All Users: `SELECT * FROM products`
* Get Usernames: `SELECT name FROM products`
* Add User: `INSERT INTO products VALUES('apple', 2)`
* Update Product: `UPDATE products SET name = 'banana' WHERE name = 'apple'`
* Remove Product: `DELETE FROM products WHERE name = 'banana'`



### MySQL Users

* `SELECT * FROM mysql.user`
* `CREATE USER max IDENTIFIED BY 'abc123!!!'`

Note:
* Select users
* Create user



### MySQL Change Password

* `SET PASSWORD FOR max = 'new_pass'`



### MySQL Permissions

* `GRANT ALL PRIVILEGES ON database.table TO max`
* `DROP USER max`



### MySQL History

* File `~/.mysql_history` is created
* Disable by `export MYSQL_HISTFILE=/dev/null`



### MongoDB

* MongoDB is a document store database
* Doesn't have authentication by default

Note:
* Installing MongoDB is a misconfiguration



### MongoDB Add Admin User

```
use admin
db.createUser(
  {
    user: "admin",
    pwd: "abc123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```



### MongoDB Enforce Authorization

* Configure `/etc/mongodb/conf.yml`

```
security:
    authorization: enabled
```



## Questions?
