CREATE TABLE Groups
	( groupId INT AUTO_INCREMENT PRIMARY KEY,
	  groupname VARCHAR(1) NOT NULL
);
CREATE TABLE Countries(
	abbreviation VARCHAR(3) NOT NULL PRIMARY KEY,
	countryName TEXT NOT NULL,
	groupId INT REFERENCES Groups(groupId)
);
CREATE TABLE MatchFixture(
	matchNumber INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	playDate TEXT NOT NULL,
	PlayTime TEXT NOT NULL,
	venue TEXT,
	CONSTRAINT no_self_match CHECK (team1 <> team2)
);
CREATE TABLE MatchResults(
        groupId INT  REFERENCES Groups(groupId),
	matchNumber INT NOT NULL  PRIMARY KEY REFERENCES MatchFixture(matchNumber),
	team1 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	team2 VARCHAR (3) NOT NULL REFERENCES Countries(abbreviation),
	goals1 INT NOT NULL,
	goals2 INT NOT NULL,
	CONSTRAINT no_self_match1 CHECK (team1 <> team2)
	);
CREATE VIEW LatestMatchResults(matchNnumber,groupId, team1, goals1,terminator, goals2,team2, pdate) AS
	(SELECT M.matchNumber, groupId, M.team1, M.goals1,'Vs' AS TEXT , M.goals2, M.team2, playDate FROM MatchResults M, MatchFixture P WHERE M.matchNumber=P.matchNumber);
--Helper table for the final result
CREATE VIEW HelperResultTable (team, MP,W, D, L,GF, GA, Diff, pts,groupId) AS 
(SELECT team1, COUNT(team1), COUNT(matchNumber),0, 0, SUM(goals1), SUM(goals2),SUM(goals1)-SUM(goals2), 3, groupId FROM MatchResults
    WHERE goals1 > goals2 group BY team1,groupId)
    UNION
(SELECT team1, COUNT(team1),0, COUNT(matchNumber),0, SUM(goals1), SUM(goals2),SUM(goals1)-SUM(goals2), 1 ,groupId FROM MatchResults
    WHERE goals1 = goals2 group BY team1,groupId)
    UNION
(SELECT team1, COUNT(team1),0,0,COUNT(matchNumber),SUM(goals1), SUM(goals2),SUM(goals1)-SUM(goals2), 0,groupId FROM MatchResults
    WHERE goals1 < goals2 group BY team1,groupId)
    UNION
(SELECT team2, COUNT(team2), COUNT(matchNumber),0, 0, SUM(goals2), SUM(goals1),SUM(goals2)-SUM(goals1), 3 ,groupId FROM MatchResults
    WHERE goals2 > goals1 group BY team2,groupId)
    UNION
(SELECT team2, COUNT(team2),0, COUNT(matchNumber),0, SUM(goals2), SUM(goals1),SUM(goals2)-SUM(goals1), 1 ,groupId FROM MatchResults
    WHERE goals2 = goals1 group BY team2,groupId)
    UNION
(SELECT team2, COUNT(team2),0,0,COUNT(matchNumber), SUM(goals2), SUM(goals1),SUM(goals2)-SUM(goals1), 0 ,groupId FROM MatchResults
    WHERE goals2 < goals1 group BY team2,groupId);
--Final Result
CREATE VIEW FinalResultTable (team, MP,W, D,L,GF, GA, Diff, pts, groupof) AS 
 (SELECT team, COUNT(MP),COUNT(W), COUNT(D),COUNT(L), SUM(GF), SUM(GA),SUM(Diff), SUM(pts) as pts, groupName FROM HelperResultTable NATURAL JOIN Groups
     group BY team, groupName, pts ORDER BY groupName, pts DESC);
--Trriger function used to delete passed games
DELIMITER //
CREATE TRIGGER matchResult_trriger
AFTER INSERT
   ON MatchResults FOR EACH ROW
BEGIN
IF(EXISTS (SELECT NEW.matchNumber FROM MatchResults WHERE matchNumber=matchNumber))
THEN
 DELETE FROM MatchFixture WHERE matchNumber=NEW.matchNumber;
END IF;
END; //
DELIMITER ;
