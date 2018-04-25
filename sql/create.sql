CREATE TABLE Groups(
	groupName VARCHAR(1) PRIMARY KEY
);
CREATE TABLE admins(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(50),
	lastname VARCHAR(50),
	email VARCHAR(60),
	password VARCHAR(60)
);

CREATE TABLE Arenas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	arena TEXT NOT NULL,
	latitude DOUBLE,
	longitude DOUBLE
);

CREATE TABLE Countries(
	abbreviation VARCHAR(3) NOT NULL PRIMARY KEY,
	countryName TEXT NOT NULL,
	groupName VARCHAR(1) REFERENCES Groups(groupName)
);

CREATE TABLE CountryInformation(
		abbreviation VARCHAR(3) NOT NULL PRIMARY KEY REFERENCES Groups(groupName),
		worldrank INT NOT NULL,
		history TEXT
);

CREATE TABLE Players(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	country VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	firstname TEXT NOT NULL,
	surname TEXT NOT NULL,
	shirtNumber INT NOT NULL,
	position TEXT,
	goals INT DEFAULT 0,
	club TEXT,
	height INT,
	weight INT,
	img_id TEXT
);
CREATE TABLE MatchFixtures(
	matchNumber INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	team1 VARCHAR (3) NOT NULL,
	team2 VARCHAR (3) NOT NULL,
	playingDate TEXT NOT NULL,
	PlayingTime TEXT NOT NULL,
	stadium TEXT,
	FOREIGN KEY (team1) REFERENCES Countries(abbreviation) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (team2) REFERENCES Countries(abbreviation) ON UPDATE CASCADE ON DELETE RESTRICT,
	CHECK (team1 != team2)
);

 CREATE TABLE MatchFixturesBackUp(
	matchNumber INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	playingDate TEXT NOT NULL,
	PlayingTime TEXT NOT NULL,
	stadium TEXT
);

CREATE TABLE MatchResults(
    groupName  VARCHAR(1),
	matchNumber INT NOT NULL  PRIMARY KEY REFERENCES MatchFixtures(matchNumber),
	team1 VARCHAR (3) NOT NULL ,
	team2 VARCHAR (3) NOT NULL,
	goals1 INT NOT NULL,
	goals2 INT NOT NULL,
 FOREIGN KEY (team1) REFERENCES Countries(abbreviation) ON UPDATE CASCADE ON DELETE RESTRICT,
 FOREIGN KEY (team2) REFERENCES Countries(abbreviation) ON UPDATE CASCADE ON DELETE RESTRICT,
 FOREIGN KEY (groupName) REFERENCES Groups (groupName) ON UPDATE CASCADE ON DELETE RESTRICT
	);
CREATE VIEW Helper1(matchnumber,groupName, abbreviation1, team1,goals1, separe) AS
  (SELECT M.matchNumber, M.groupName,abbreviation,countryName, M.goals1, '-' AS TEXT FROM MatchResults M, Countries C where M.groupName=C.groupName AND team1=abbreviation);

CREATE VIEW Helper2(matchnumber,goals2,abbreviation2, team2) AS
(SELECT M.matchNumber, M.goals2 ,abbreviation,countryName FROM MatchResults M, Countries C where M.groupName=C.groupName AND team2=abbreviation);

 CREATE VIEW  Helper3 AS select *from  MatchFixturesBackUp WHERE matchNumber IN (SELECT matchNumber from MatchResults);

  CREATE VIEW LatestResultHelper4 AS (SELECT *FROM Helper1 natural JOIN Helper2);


 CREATE VIEW LatestMatchResults(playingDate, playingTime,groupName , abbreviation1, team1, goals1,terminator, goals2,abbreviation2,team2,stadium) AS
  SELECT  playingDate, playingTime,L.groupName ,abbreviation1, L.team1, L.goals1,L.separe, L.goals2,abbreviation2,L.team2, stadium FROM LatestResultHelper4  L, Helper3 H where L.matchnumber=H.matchNumber;

CREATE VIEW HelperResultTable (team, MP,W, D, L,GF, GA, Diff, points,groupName ) AS
(SELECT team1, COUNT(team1), COUNT(matchNumber),0, 0, SUM(goals1), SUM(goals2),SUM(goals1)-SUM(goals2), 3, groupName  FROM MatchResults
    WHERE goals1 > goals2 group BY team1,groupName )
    UNION
(SELECT team1, COUNT(team1),0, COUNT(matchNumber),0, SUM(goals1), SUM(goals2),SUM(goals1)-SUM(goals2), 1 ,groupName  FROM MatchResults
    WHERE goals1 = goals2 group BY team1,groupName )
    UNION
(SELECT team1, COUNT(team1),0,0,COUNT(matchNumber),SUM(goals1), SUM(goals2),SUM(goals1)-SUM(goals2), 0,groupName  FROM MatchResults
    WHERE goals1 < goals2 group BY team1,groupName )
    UNION
(SELECT team2, COUNT(team2), COUNT(matchNumber),0, 0, SUM(goals2), SUM(goals1),SUM(goals2)-SUM(goals1), 3 ,groupName  FROM MatchResults
    WHERE goals2 > goals1 group BY team2,groupName )
    UNION
(SELECT team2, COUNT(team2),0, COUNT(matchNumber),0, SUM(goals2), SUM(goals1),SUM(goals2)-SUM(goals1), 1 ,groupName  FROM MatchResults
    WHERE goals2 = goals1 group BY team2,groupName )
    UNION
(SELECT team2, COUNT(team2),0,0,COUNT(matchNumber), SUM(goals2), SUM(goals1),SUM(goals2)-SUM(goals1), 0 ,groupName  FROM MatchResults
    WHERE goals2 < goals1 group BY team2,groupName );

		CREATE VIEW HelperGroups (team,countryName, MP,W, D,L,GF, GA, Diff, points, groupName ) AS
	  (SELECT team, countryName, SUM(MP),SUM(W), SUM(D),SUM(L), SUM(GF), SUM(GA),SUM(Diff),
	 SUM(points), groupName FROM HelperResultTable H NATURAL JOIN Countries
	  C where H.team=C.abbreviation group BY team, groupName, countryName ORDER BY groupName);


CREATE VIEW FinalResultTableAll(team,countryName, MP,W, D,L,GF, GA, Diff, points, groupName ) AS
( select team as team, countryName as countryName, SUM(MP) as MP,SUM(W) as W, SUM(D) as D,SUM(L) as L, SUM(GF) as GF, SUM(GA) as GA,SUM(Diff) as diff,
SUM(points) as points, C.groupName FROM HelperResultTable H LEFT JOIN Countries C on H.team=C.abbreviation group BY H.team, C.groupName, C.countryName, points)
 	UNION
(select COALESCE(team, C.abbreviation) as team, countryName as countryName, COALESCE(SUM(MP),0) as MP,COALESCE(SUM(W),0) AS W, COALESCE(SUM(D),0) AS D, COALESCE(SUM(L),0) as L, COALESCE(SUM(GF),0) as GF, COALESCE(SUM(GA),0) as GA,COALESCE(SUM(Diff),0) as diff,
COALESCE(SUM(points),0) as points , C.groupName FROM HelperResultTable H RIGHT JOIN Countries C on H.team=C.abbreviation group BY C.abbreviation, C.groupName, C.countryName, points );

CREATE VIEW FinalResultTable (team,countryName, MP,W, D,L,GF, GA, Diff, points, groupName ) AS
SELECT *FROM HelperGroups ORDER BY groupName, points DESC, Diff DESC;

CREATE VIEW QualifiedToRound16GroupA(team, MP,W, D,L,GF, GA, Diff, points, position, groupName) AS
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='A' ORDER BY position DESC limit 1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='A' ORDER BY position DESC limit 2,1);





	CREATE VIEW QualifiedToRound16(team, MP,W, D,L,GF, GA, Diff, points, position, groupName) AS
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='A' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='A' ORDER BY Diff DESC, points DESC limit 1,1)
	   UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='B' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='B' ORDER BY Diff DESC, points DESC limit 1,1)
	 UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='C' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='C' ORDER BY Diff DESC, points DESC limit 1,1)
	 UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='D' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='D' ORDER BY Diff DESC, points DESC limit 1,1)
	 UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='E' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='E' ORDER BY Diff DESC, points DESC limit 1,1)
	 UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='F' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='F' ORDER BY Diff DESC, points DESC limit 1,1)
	 UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='G' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='G' ORDER BY Diff DESC, points DESC limit 1,1)
	 UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,1 AS position, groupName from FinalResultTable where groupName='H' ORDER BY Diff DESC, points DESC limit 0,1)
	  UNION ALL
	 (select DISTINCT team, MP, W, D, L, GF, GA, Diff, points,2 AS position, groupName from FinalResultTable where groupName='H' ORDER BY Diff DESC, points DESC limit 1,1);

CREATE VIEW  QualifiedQuarterFinal(matchNumber, team) AS
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=49 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=49 AND goals1<goals2)
 UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=50 AND goals1>goals2)
 UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=50 AND goals1<goals2)
  UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=51 AND goals1>goals2)
  UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=51 AND goals1<goals2)
  UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=52 AND goals1>goals2)
  UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=52 AND goals1<goals2)
  UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=53 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=53 AND goals1<goals2)
  UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=54 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=54 AND goals1<goals2)
	UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=55 AND goals1>goals2)
   UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=55 AND goals1<goals2)
	UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=56 AND goals1>goals2)
   UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=56 AND goals1<goals2)
        UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=57 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=57 AND goals1<goals2)
    UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=58 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=58 AND goals1<goals2)
    UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=59 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=59 AND goals1<goals2)
    UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=60 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=60 AND goals1<goals2)
    UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=61 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=61 AND goals1<goals2)
    UNION
	(SELECT matchNumber, team1 FROM MatchResults WHERE matchNumber=62 AND goals1>goals2)
	UNION
	(SELECT matchNumber, team2 FROM MatchResults WHERE matchNumber=62 AND goals1<goals2);

CREATE VIEW MatchUpcomingHelper1(matchNumber,abbreviation1, team1, terminator) AS
(SELECT M.matchNumber, abbreviation, countryName, 'Vs' AS TEXT FROM MatchFixtures M, Countries C where team1=abbreviation);

CREATE VIEW MatchUpcomingHelper2 (matchnumber,abbreviation2,team2, playingDate,playingTime, stadium) AS
(SELECT M.matchNumber, abbreviation,countryName, playingDate, playingTime, stadium FROM MatchFixtures M, Countries C where team2=abbreviation);

CREATE VIEW MatchUpcomings(matchNumber,abbreviation1,team1,terminator,abbreviation2,team2, playingDate,playingTime, stadium) AS
	(SELECT *FROM MatchUpcomingHelper1 NATURAL JOIN MatchUpcomingHelper2);


	delimiter //
	CREATE TRIGGER self_Team_check_insert_trg
	BEFORE INSERT ON MatchFixtures
	FOR EACH ROW
	BEGIN
	    DECLARE msg varchar(255);
	    IF NEW.team1 = NEW.team2 THEN
	        SET msg = 'A team can not play againest itself';
	        SIGNAL SQLSTATE '45000' SET message_text = msg;
	    END IF;
	END
	//


	delimiter //
	CREATE TRIGGER selfTeam_check_insert_trg
	BEFORE INSERT ON MatchResults
	FOR EACH ROW
	BEGIN
	    DECLARE msg varchar(255);
	    IF NEW.team1 = NEW.team2 THEN
	        SET msg = 'A team can not play againest itself';
	        SIGNAL SQLSTATE '45000' SET message_text = msg;
	    END IF;
	END
	//


   DELIMITER //
CREATE TRIGGER matchFixtures_trriger
AFTER INSERT ON MatchFixtures FOR EACH ROW
BEGIN
IF(EXISTS (SELECT matchNumber FROM MatchFixtures WHERE NEW.matchNumber=matchNumber))
THEN
  INSERT INTO  MatchFixturesBackUp (matchNumber,team1,team2,playingDate,PlayingTime,stadium) select *from MatchFixtures WHERE  NEW.matchNumber=matchNumber;
  END IF;
END; //
DELIMITER ;


    DELIMITER //
CREATE TRIGGER matchResult_trriger
AFTER INSERT ON MatchResults FOR EACH ROW
BEGIN
IF(EXISTS (SELECT matchNumber FROM MatchResults WHERE NEW.matchNumber=matchNumber))
THEN
  DELETE FROM MatchFixtures WHERE matchNumber=NEW.matchNumber;
END IF;
END; //
DELIMITER ;


  DELIMITER //
CREATE TRIGGER tr_Round16_QuarterFinals_SemiFinals_ThirdPlaceAnd_Final_Games
before INSERT ON MatchResults FOR EACH ROW
BEGIN
IF EXISTS( SELECT team FROM QualifiedToRound16 WHERE groupName='H' AND W=3)
THEN
BEGIN
	 INSERT INTO MatchFixtures VALUES(49, (select team FROM QualifiedToRound16 where groupName='C' AND position=1),
	 (select team FROM QualifiedToRound16 where groupName='D' AND position=2),'June 30','15:00','Kazan');

	 INSERT INTO MatchFixtures VALUES(50, (select team FROM QualifiedToRound16 where groupName='A' AND position=1),
	 (select team FROM QualifiedToRound16 where groupName='B' AND position=2),'June 30','19:00','Sochi');

	 INSERT INTO MatchFixtures VALUES(51, (select team FROM QualifiedToRound16 where groupName='B' AND position=1),
	 (select team FROM QualifiedToRound16 where groupName='A' AND position=2),'Jul 01','15:00','Moscow');

	INSERT INTO MatchFixtures VALUES(52, (select team FROM QualifiedToRound16 where groupName='D' AND position=1),
		 (select team FROM QualifiedToRound16 where groupName='C' AND position=2),'Jul 01','19:00','Nizhny Novgorod');

	INSERT INTO MatchFixtures VALUES(53, (select team FROM QualifiedToRound16 where groupName='E' AND position=1),
		 (select team FROM QualifiedToRound16 where groupName='F' AND position=2),'Jul 02','15:00','Samara');

	INSERT INTO MatchFixtures VALUES(54, (select team FROM QualifiedToRound16 where groupName='G' AND position=1),
		 (select team FROM QualifiedToRound16 where groupName='H' AND position=2),'Jul 02','19:00','Rostov-on-Don');

	INSERT INTO MatchFixtures VALUES(55, (select team FROM QualifiedToRound16 where groupName='F' AND position=1),
		 (select team FROM QualifiedToRound16 where groupName='E' AND position=2),'Jul 03','15:00','Saint Petersburg');

	INSERT INTO MatchFixtures VALUES(56, (select team FROM QualifiedToRound16 where groupName='H' AND position=1),
		 (select team FROM QualifiedToRound16 where groupName='G' AND position=2),'Jul 03','19:00','Moscow ');


	 INSERT INTO MatchFixtures VALUES(57, (select team FROM QualifiedQuarterFinal WHERE matchNumber=49),(select team FROM QualifiedQuarterFinal
		WHERE  matchNumber=50),'Jul 06','15:00','Nizhny Novgorod');

	INSERT INTO MatchFixtures VALUES(58, (select team FROM QualifiedQuarterFinal WHERE matchNumber=53),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=54),'Jul 06','19:00','Kazan');
INSERT INTO MatchFixtures VALUES(59, (select team FROM QualifiedQuarterFinal WHERE matchNumber=51),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=52),'Jul 07','19:00','Sochi');
INSERT INTO MatchFixtures VALUES(60, (select team FROM QualifiedQuarterFinal WHERE matchNumber=55),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=56),'Jul 07','15:00','Samara');

INSERT INTO MatchFixtures VALUES(61, (select team FROM QualifiedQuarterFinal WHERE matchNumber=57),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=58),'Jul 10','19:00','Saint Petersburg');
INSERT INTO MatchFixtures VALUES(62, (select team FROM QualifiedQuarterFinal WHERE matchNumber=59),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=60),'Jul 10','19:00','Moscow');

INSERT INTO MatchFixtures VALUES(63, (select team FROM QualifiedQuarterFinal WHERE matchNumber=61),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=62),'Jul 14','15:00','Saint Petersburg');

INSERT INTO MatchFixtures VALUES(64, (select team FROM QualifiedQuarterFinal WHERE matchNumber=61),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=62),'Jul 15','16:00','Moscow');
 END;
END IF;
END; //
DELIMITER ;
