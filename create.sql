CREATE TABLE Groups
	(
	  gid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	  groupname VARCHAR(1) NOT NULL
);
	--Groups Data
        INSERT INTO Groups(groupName) VALUES ('A');
	INSERT INTO Groups(groupName) VALUES ('B');
	INSERT INTO Groups(groupName) VALUES ('C');
	INSERT INTO Groups(groupName) VALUES ('D');
	INSERT INTO Groups(groupName) VALUES ('E');
	INSERT INTO Groups(groupName) VALUES ('F');
	INSERT INTO Groups(groupName) VALUES ('G');
	INSERT INTO Groups(groupName) VALUES ('H');

CREATE TABLE Countries(
	abbreviation VARCHAR(3) NOT NULL PRIMARY KEY,
	countryName TEXT NOT NULL,
	gid INT NOT NULL REFERENCES Groups(gid)
);
--Countries Data
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('RUS','Russia',1);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('KSA','Saudi Arbaia',1);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('EGY','Egypt',1);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('ERU','Uruguay',1);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('POR','Portugal',2);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('SPA','Spain',2);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('MOR','Morocco',2);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('IRN','Iran',3);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('FRA','France',3);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('AUS','Australia',3);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('PER','Peru',3);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('DEN','Denmark',3);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('ARG','Argentia',3);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('ICE','Iceland',4);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('CRO','Croatia',4);
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('NGA','Nigeria',4)
	INSERT INTO Countries(abbreviation,countryName,gid) VALUES ('COR','Crotia',4)

CREATE TABLE Plays(
	matchNumber INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	playDate TEXT NOT NULL,
	PlayTime TEXT NOT NULL,
	venue TEXT,
	CONSTRAINT no_self_match CHECK (team1 <> team2)
);
--Match Data
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES ('RUS','KSA','14 June 2018','12:00','Luzhniki Stadium, Moscow');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('EGP','ERU','15 June 2018','14:00','Central Stadium, Yekaterinburg');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('MOR','IRN','15 June 2018','17:00','Saint Petersburg Stadium Saint Petersburg');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('POR','SPA','15 June 2018','20:00','Fisht Stadium Sochi');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('FRA','AUS','16 JUN ','12:00','Kazan Arena Kazan');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('ARG','ICE','16 JUN 2018','15:00','Spartak Stadium Moscow');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('PER','DEN','16 JUN 2018','18:00','Mordovia Arena Saransk');
INSERT INTO Plays (team1, team2, playDate, PlayTime, venue) VALUES('COR','NGA','16 JUN 2018','21:00','Kaliningrad Stadium Kaliningra');
CREATE TABLE MatchResults(
	matchNumber INT  PRIMARY KEY REFERENCES Plays(matchNumber),
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	goals1 INT NOT NULL,
	goals2 INT NOT NULL,
	CONSTRAINT no_self_match1 CHECK (team1 <> team2)
	);
--Result Data
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (1,'RUS','KSA','2','1');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (2,'EGP','PER','2','1');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (3,'MOR','IRN','2','2');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (4,'POR','SPA','2','3');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (5,'FRA','AUS','3','1');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (6,'ARG','ICE','2','0');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (7,'PER','DEN','1','2');
INSERT INTO MatchResults (matchNumber,team1, team1, goals1, goals2) VALUES (8,'COR','NGA','1','1');


CREATE VIEW ResultTable (matchNnumber, team1, goals1, goals2,team2, pdate) AS
	(SELECT M.matchNumber, M.team1, M.goals1, M.goals2, M.team2, playDate FROM MatchResults M, Plays P WHERE M.matchNumber=P.matchNumber
);

