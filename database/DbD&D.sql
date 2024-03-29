DROP DATABASE IF EXISTS DB_PROJETO_DND;

CREATE DATABASE DB_PROJETO_DND;

USE DB_PROJETO_DND;

CREATE TABLE USER_U(
IDUSER INT NOT NULL AUTO_INCREMENT,
USERNAME VARCHAR(120) NOT NULL,
PASSWORD_U VARCHAR(16) NOT NULL,
TYPE_U boolean,
PRIMARY KEY(IDUSER)
);

CREATE TABLE INVENTORY(
IDINVENTORY INT NOT NULL AUTO_INCREMENT,
ITEM VARCHAR(120),
ITEMDESCRIPTION VARCHAR(200),
PRIMARY KEY(IDINVENTORY)
);

CREATE TABLE SPELL(
IDSPELL INT NOT NULL AUTO_INCREMENT,
SPELLNAME VARCHAR(45),
SPELLDESCRIPTION VARCHAR(200),
PRIMARY KEY(IDSPELL)
);


CREATE TABLE SHEET(
IDSHEET INT NOT NULL AUTO_INCREMENT,
IDUSER INT NOT NULL,
IDINVENTORY INT NOT NULL,
IDSPELL INT NOT NULL,
CHARACTERNAME VARCHAR(120),
LEVEL_C INT,
EXP INT,
RACE VARCHAR(45),
CLASS VARCHAR(45),
ARMORCLASS INT,
MOVESPEED INT,
STR INT,
ENDU INT,
DEX INT,
WIS INT,
INTE INT,
CHA INT,
PRIMARY KEY(IDSHEET),
FOREIGN KEY(IDUSER) REFERENCES USER_U(IDUSER),
FOREIGN KEY(IDSPELL) REFERENCES SPELL(IDSPELL),
FOREIGN KEY(IDINVENTORY) REFERENCES INVENTORY(IDINVENTORY)
);




INSERT INTO USER_U(USERNAME,PASSWORD_U,TYPE_U) VALUES ("Felipe",12345,"Player");
INSERT INTO USER_U(USERNAME,PASSWORD_U,TYPE_U) VALUES ("Cardano",12345,"Player");
INSERT INTO INVENTORY(ITEM,ITEMDESCRIPTION) VALUES ("pula pula do gugu","dificil essa vida de gaitero");
INSERT INTO SPELL(SPELLNAME,SPELLDESCRIPTION) VALUES ("Galatic Illusion", "a Gallatic illusion");

INSERT INTO 
SHEET(IDUSER,IDINVENTORY,IDSPELL,CHARACTERNAME,LEVEL_C,EXP,RACE,CLASS,ARMORCLASS,MOVESPEED,STR,ENDU,DEX,WIS,INTE,CHA)
VALUES
(1,1,1,"Jorge",3,300,"Human","Fighter",17,9,15,16,14,13,12,10);


SELECT * FROM INVENTORY;