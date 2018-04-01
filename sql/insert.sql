                  --All input data
--Groups Data
        INSERT INTO Groups(groupName) VALUES ('A');
	INSERT INTO Groups(groupName) VALUES ('B');
	INSERT INTO Groups(groupName) VALUES ('C');
	INSERT INTO Groups(groupName) VALUES ('D');
	INSERT INTO Groups(groupName) VALUES ('E');
	INSERT INTO Groups(groupName) VALUES ('F');
	INSERT INTO Groups(groupName) VALUES ('G');
	INSERT INTO Groups(groupName) VALUES ('H');	
	
--Countries Data
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
--Match Data
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

--Result Data
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',1,'RUS','KSA','3','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',2,'EGY','PER','2','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',3,'MOR','IRN','2','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',4,'POR','SPA','1','3');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',5,'FRA','AUS','3','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',6,'ARG','ICE','2','0');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',7,'PER','DEN','1','2');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',8,'CRO','NGA','1','3');



