### Schema

CREATE DATABASE EDB_db;

USE EDB_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(300) NOT NULL,
	eatEmUp BOOLEAN DEFAULT false, 
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

