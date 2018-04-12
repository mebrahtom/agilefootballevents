CREATE TABLE Groups
	( 
	  groupName VARCHAR(1) PRIMARY KEY
);
CREATE TABLE Countries(
	abbreviation VARCHAR(3) NOT NULL PRIMARY KEY,
	countryName TEXT NOT NULL,
	groupName  VARCHAR(1) REFERENCES Groups(groupName )
     
);
CREATE TABLE MatchFixtures(
	matchNumber INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	playingDate TEXT NOT NULL,
	PlayingTime TEXT NOT NULL,
	stadium TEXT,
	CONSTRAINT no_self_match CHECK (team1 <> team2)
);
CREATE TABLE MatchResults(
        groupName  VARCHAR(1) REFERENCES Groups(groupName ),
	matchNumber INT NOT NULL  PRIMARY KEY REFERENCES MatchFixtures(matchNumber),
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	goals1 INT NOT NULL,
	goals2 INT NOT NULL,
	CONSTRAINT no_self_match1 CHECK (team1 <> team2)
	);
CREATE VIEW LatestMatchResults(matchNnumber,groupName , team1, goals1,terminator, goals2,team2) AS
	(SELECT M.matchNumber, groupName , M.team1, M.goals1,'-' AS TEXT , M.goals2, M.team2 FROM MatchResults M);

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



CREATE VIEW FinalResultTable (team,countryName, MP,W, D,L,GF, GA, Diff, points, groupName ) AS 
(SELECT team, countryName, COUNT(MP),COUNT(W), COUNT(D),COUNT(L), SUM(GF), SUM(GA),SUM(Diff), 
SUM(points), groupName FROM HelperResultTable H NATURAL JOIN Countries
 C where H.team=C.abbreviation group BY team, groupName, countryName, points ORDER BY groupName, points DESC);

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


CREATE VIEW MatchUpcomings(matchNumber,team1,terminator,team2, playingDate,playingTime, stadium) AS
	(SELECT matchNumber, team1,'Vs' AS TEXT, team2, playingDate, playingTime, stadium FROM MatchFixtures);

    DELIMITER //
CREATE TRIGGER matchResult_trriger
AFTER INSERT ON MatchResults FOR EACH ROW
BEGIN
IF(EXISTS (SELECT matchNumber FROM MatchResults WHERE NEW.matchNumber=matchNumber))
THEN
 DELETE FROM MatchUpcomings WHERE matchNumber=NEW.matchNumber;
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


              
        INSERT INTO Groups(groupName) VALUES ('A');
	INSERT INTO Groups(groupName) VALUES ('B');
	INSERT INTO Groups(groupName) VALUES ('C');
	INSERT INTO Groups(groupName) VALUES ('D');
	INSERT INTO Groups(groupName) VALUES ('E');
	INSERT INTO Groups(groupName) VALUES ('F');
	INSERT INTO Groups(groupName) VALUES ('G');
	INSERT INTO Groups(groupName) VALUES ('H');	
	

	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('RUS','Russia','A');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('KSA','Saudi Arbaia','A');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('EGY','Egypt','A');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ERY','Uruguay','A');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('POR','Portugal','B');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SPA','Spain','B');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('MOR','Morocco','B');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('IRN','Iran','B');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('FRA','France','C');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('AUS','Australia','C');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('PER','Peru','C');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('DEN','Denmark','C');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ARG','Argentia','D');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ICE','Iceland','D');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('CRO','Croatia','D');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('NGA','Nigeria','D');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('BRA','Brazil','E');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SWI','Switherland','E');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('CRC','Costa Rica','E');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SER','Serbia','E');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('GER','Germany','F');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('MEX','Mexico','F');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SWE','Sweden','F');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('KOR','Korea','F');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('BEL','Belgium','G');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('PAN','Panama','G');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('TUN','Tunisia','G');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ENG','England','G');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('POL','Poland','H');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SEN','Sengal','H');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('COL','Colombia','H');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('JPN','Japan','H');

	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES (1,'RUS','KSA','14 June 2018','12:00','Luzhniki Stadium, Moscow');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(2,'EGY','ERY','15 June 2018','14:00','Central Stadium, Yekaterinburg');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(3,'MOR','IRN','15 June 2018','17:00','Saint Petersburg Stadium Saint Petersburg');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(4,'POR','SPA','15 June 2018','20:00','Fisht Stadium Sochi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(5,'FRA','AUS','16 JUN ','12:00','Kazan Arena Kazan');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(6,'ARG','ICE','16 JUN 2018','15:00','Spartak Stadium Moscow');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(7,'PER','DEN','16 JUN 2018','18:00','Mordovia Arena Saransk');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(8,'CRO','NGA','16 JUN 2018','21:00','Kaliningrad Stadium Kaliningra');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(9,'BRA','SWI','17 June','21:00','Rostov-on-Don');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(10,'CRC','SER','17 June','16:00','Samara, Samara Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(11,'GER','MEX','17 June','18:00','Moscow, "Luzhniki stadium", ');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(12,'SWE','KOR','18 June','15:00','Nizhny Novgorod');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(13,'BEL','PAN','18 June','18:00','ochi, Fisht Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(14,'TUN','ENG','18 June','21:00','Volgograd, Volgograd Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(15,'POL','SEN','19 June','18:00','Moscow, Otkritie Arena Stadium,');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(16,'COL','JPN','19 June','15:00','Saransk, Mordovia Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(17,'RUS','EGY','19 June','21:00','Saint Petersburg');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(18,'ERY','KSA','20 June','18:00','Rostov-on-Don, Rostov Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(19,'POR','MOR','20 June','15:00','Moscow,');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(20,'IRN','SPA','20 June','21','Kazan, Kazan Arena Stadium');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',1,'RUS','KSA','3','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',2,'EGY','PER','2','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',3,'MOR','IRN','2','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',4,'POR','SPA','1','3');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',5,'FRA','AUS','3','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',6,'ARG','ICE','2','0');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',7,'PER','DEN','1','2');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',8,'CRO','NGA','1','3');













