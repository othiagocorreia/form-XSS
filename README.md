# Form-XSS 🔓

A form with an XSS reflected vulnerability that allows the attacker to catch the email and password victim

About
=========
* [Getting Started](https://github.com/thiagodk0/form-XSS/blob/master/README.md#getting-started-)
* [How it works](https://github.com/thiagodk0/form-XSS/blob/master/README.md#getting-started-)
* [Stats](https://github.com/thiagodk0/form-XSS/blob/master/README.md#stats-)

## Getting Started 🏁
To execute the project, you'll need a server capable of running PHP, such as:
  *  [Xampp](https://www.apachefriends.org/index.html)
  *  [Apache](https://httpd.apache.org/download.cgi). 
  *  *I had used [000webhost](https://www.000webhost.com/)*

## How it works?❓
The form has a flaw in the registration script that does not encrypt the passed data and let it be available to any type of connection.
```
if(!isset($_COOKIE["cookieEmail"])|| (!isset($_COOKIE["cookieSenha"]))){ 
            setcookie("cookieEmail", $email, 0, "/", "", False, False);
            setcookie("cookieSenha", $senha, 0, "/", "", False, False);
            echo "Cookie criado";
        }
```        
So the person's password and e-mail address are stored in cookies that are visible to everyone. 

To solve this, the last two parameters must be changed to "True".

```
            setcookie("cookieEmail", $email, 0, "/", "", True, True);
            setcookie("cookieSenha", $senha, 0, "/", "", True, True);
```    

## Stats 🚧
I am *still finishing* some questions about the project, as the README, and thinking about a JS file with some validation rules for the form
