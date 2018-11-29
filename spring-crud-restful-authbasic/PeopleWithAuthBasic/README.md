# Spring CRUD RESTFul with Basic Auth using JPA accessing MySQL

It's just that... A simple project to demonstrate the use of Spring Security Basic Auth. The project is a RESTFul CRUD and use JPA accessing MySQL. The Users and Roles are in the MySQL database too.

## Getting Started

For the initial steps give a try to my following video:
https://www.youtube.com/watch?v=DvzGf0cAlg4

It's a step by step guide to understand how to make a Spring project implementing RESTFul and JPA accessing MySQL.

For the theory envolving Basic Auth in Spring Security I recommend you:
https://www.javacodegeeks.com/2018/01/enable-http-basic-authentication-spring-security-using-java-xml-config.html

After that clone this project and try it.

The Database is here:
https://github.com/tcrurav/SpringCrudBasicAuthRestJPAMySQL/blob/master/db_people.sql

It's interesting that you take the cookies into account when testing the Basic Auth with Postman:

![alt text](https://github.com/tcrurav/SpringCrudBasicAuthRestJPAMySQL/blob/master/cookies.gif)


### A Basic, basic, basic version with hard coded users

For such a version of this project use git to checkout the second commit called: 

==> Auth Basic: a bit more complex, https://github.com/tcrurav/SpringCrudBasicAuthRestJPAMySQL/tree/c5ac1f247d51679254c8297a0e459d67287878b7

### Prerequisites

All you need is... some time and...
* Eclipse IDE.
* STS 4, installed through the Eclipse Marketplace.
* MySQL Workbench, to host the database also included in the project.
* PostMan, for the RESTFul tests.
* More hours than you first could think of...

## Built With

* [Eclipse IDE](https://www.eclipse.org/ide/) - The IDE used
* [Maven](https://maven.apache.org/) - Dependency Management
* [Spring Tools 4](https://spring.io/tools) - The framework used
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - The Database used

## Acknowledgments

* https://spring.io/understanding/CORS. Good link to understand CORS.
* https://www.getpostman.com/. Used to test the RESTFul end points of the project.
* https://giphy.com/. Used to create the animated gif.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://www.dailycred.com/article/bcrypt-calculator. A helpfull bcrypt calculator.
