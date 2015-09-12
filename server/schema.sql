CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
	id int AUTO_INCREMENT,
	message varchar(300),
	username varchar(20),
	roomname varchar(30),
	PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
	id int AUTO_INCREMENT,
	username varchar(20),
	PRIMARY KEY (id)
);

CREATE TABLE roomname (
	id int AUTO_INCREMENT,
	roomname varchar(30),
	PRIMARY KEY (id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

