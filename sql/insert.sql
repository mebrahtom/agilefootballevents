                  --All input data
--Groups Data
        INSERT INTO Groups(groupId,groupName) VALUES (1,'A');
	INSERT INTO Groups(groupId,groupName) VALUES (2,'B');
	INSERT INTO Groups(groupId,groupName) VALUES (3,'C');
	INSERT INTO Groups(groupId,groupName) VALUES (4,'D');
	INSERT INTO Groups(groupId,groupName) VALUES (5,'E');
	INSERT INTO Groups(groupId,groupName) VALUES (6,'F');
	INSERT INTO Groups(groupId,groupName) VALUES (7,'G');
	INSERT INTO Groups(groupId,groupName) VALUES (8,'H');
--Countries Data
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('RUS','Russia',1);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('KSA','Saudi Arbaia',1);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('EGY','Egypt',1);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('ERU','Uruguay',1);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('POR','Portugal',2);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('SPA','Spain',2);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('MOR','Morocco',2);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('IRN','Iran',3);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('FRA','France',3);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('AUS','Australia',3);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('PER','Peru',3);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('DEN','Denmark',3);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('ARG','Argentia',3);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('ICE','Iceland',4);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('CRO','Croatia',4);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('NGA','Nigeria',4);
	INSERT INTO Countries(abbreviation,countryName,groupId) VALUES ('COR','Crotia',4);
--Match Data
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES (1,'RUS','KSA','14 June 2018','12:00','Luzhniki Stadium, Moscow');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(2,'EGY','ERU','15 June 2018','14:00','Central Stadium, Yekaterinburg');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(3,'MOR','IRN','15 June 2018','17:00','Saint Petersburg Stadium Saint Petersburg');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(4,'POR','SPA','15 June 2018','20:00','Fisht Stadium Sochi');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(5,'FRA','AUS','16 JUN ','12:00','Kazan Arena Kazan');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(6,'ARG','ICE','16 JUN 2018','15:00','Spartak Stadium Moscow');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(7,'PER','DEN','16 JUN 2018','18:00','Mordovia Arena Saransk');
	INSERT INTO MatchFixture (matchnumber,team1, team2, playDate, PlayTime, venue) VALUES(8,'COR','NGA','16 JUN 2018','21:00','Kaliningrad Stadium Kaliningra');
--Result Data
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (1,1,'RUS','KSA','2','1');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (1,2,'EGY','PER','2','1');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (2,3,'MOR','IRN','2','2');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (2,4,'POR','SPA','2','3');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (3,5,'FRA','AUS','3','1');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (3,6,'ARG','ICE','2','0');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (4,7,'PER','DEN','1','2');
	INSERT INTO MatchResults (groupId,matchNumber,team1, team2, goals1, goals2) VALUES (4,8,'COR','NGA','1','1');
