DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   message_id MEDIUMINT NOT NULL AUTO_INCREMENT,
--   user_id MEDIUMINT,
--   room_id MEDIUMINT,
--   text TEXT,
--   created_at TIMESTAMP,
--   PRIMARY KEY (message_id)

-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id MEDIUMINT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30),
  roomname VARCHAR(30),
  text TEXT,
  created_at TIMESTAMP,
  PRIMARY KEY (message_id)

);

CREATE TABLE users (
  user_id MEDIUMINT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30),
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms(
  room_id MEDIUMINT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(30),
  PRIMARY KEY (room_id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

