CREATE TABLE Users(
userId VARCHAR(10) NOT NULL PRIMARY KEY,
userName TEXT NOT NULL,
role TEXT NOT NULL
);
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
CREATE VIEW LatestMatchResults(matchNnumber,groupName , team1, goals1,terminator, goals2,team2, playingDate) AS
	(SELECT M.matchNumber, groupName , M.team1, M.goals1,'Vs' AS TEXT , M.goals2, M.team2, playingDate FROM MatchResults M, MatchFixtures P 
             WHERE M.matchNumber=P.matchNumber);

CREATE VIEW MatchUpcomings(matchNumber,team1,terminator,team2, playingDate,stadium) AS
	(SELECT matchNumber, team1,'Vs' AS TEXT, team2, playingDate,stadium FROM MatchFixtures);
--Helper table for the final result
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


--Final Result
CREATE VIEW FinalResultTable (team, MP,W, D,L,GF, GA, Diff, points, groupName ) AS 
 (SELECT team, COUNT(MP),COUNT(W), COUNT(D),COUNT(L), SUM(GF), SUM(GA),SUM(Diff), SUM(points), groupName FROM HelperResultTable 
     group BY team, groupName, points ORDER BY groupName, points DESC);


--Qualified teams for Round 16

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

--Trriger function used to delete passed games
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
 --Semi_Final
INSERT INTO MatchFixtures VALUES(61, (select team FROM QualifiedQuarterFinal WHERE matchNumber=57),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=58),'Jul 10','19:00','Saint Petersburg');
INSERT INTO MatchFixtures VALUES(62, (select team FROM QualifiedQuarterFinal WHERE matchNumber=59),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=60),'Jul 10','19:00','Moscow');
  --Third place
INSERT INTO MatchFixtures VALUES(63, (select team FROM QualifiedQuarterFinal WHERE matchNumber=61),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=62),'Jul 14','15:00','Saint Petersburg');
   --Final
INSERT INTO MatchFixtures VALUES(64, (select team FROM QualifiedQuarterFinal WHERE matchNumber=61),(select team FROM QualifiedQuarterFinal
	     WHERE  matchNumber=62),'Jul 15','16:00','Moscow');
 END;
END IF;
END; //
DELIMITER ;


--THE END--










