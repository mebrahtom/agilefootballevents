 INSERT INTO Groups(groupName) VALUES ('A');
 INSERT INTO Groups(groupName) VALUES ('B');
 INSERT INTO Groups(groupName) VALUES ('C');
 INSERT INTO Groups(groupName) VALUES ('D');
 INSERT INTO Groups(groupName) VALUES ('E');
 INSERT INTO Groups(groupName) VALUES ('F');
 INSERT INTO Groups(groupName) VALUES ('G');
 INSERT INTO Groups(groupName) VALUES ('H');

 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('RUS','Russia','A');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('KSA','Saudi Arabia','A');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('EGY','Egypt','A');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('URU','Uruguay','A');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('POR','Portugal','B');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SPA','Spain','B');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('IRN','Iran','B');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('MOR','Morocco','B');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('FRA','France','C');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('AUS','Australia','C');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('PER','Peru','C');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('DEN','Denmark','C');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ARG','Argentina','D');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ICE','Iceland','D');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('CRO','Croatia','D');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('NIG','Nigeria','D');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('BRA','Brazil','E');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SWI','Switzerland','E');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('COS','Costa Rica','E');
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
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('SEN','Senegal','H');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('COL','Colombia','H');
 INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('JPN','Japan','H');

	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES (1,'RUS','KSA','14 June ','12:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(2,'EGY','URU','15 June ','14:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(3,'MOR','IRN','15 June ','17:00','Bravida Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(4,'POR','SPA','15 June ','20:00','Valhalla IP');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(5,'FRA','AUS','16 JUN ','12:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(6,'ARG','ICE','16 JUN ','15:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(7,'PER','DEN','16 JUN ','18:00','Bravida Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(8,'CRO','NIG','16 JUN ','21:00','Valhalla IP');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(9,'BRA','SWI','17 June','21:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(10,'COS','SER','17 June','16:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(11,'GER','MEX','17 June','18:00','Bravida Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(12,'SWE','KOR','18 June','15:00','Valhalla IP');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(13,'BEL','PAN','18 June','18:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(14,'TUN','ENG','18 June','21:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(15,'POL','SEN','19 June','18:00','Bravida Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(16,'COL','JPN','19 June','15:00','Valhalla IP');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(17,'RUS','EGY','19 June','21:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(18,'URU','KSA','20 June','18:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(19,'POR','MOR','20 June','15:00','Bravida Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(20,'IRN','SPA','20 June','21:00','Valhalla IP');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(21,'FRA','PER','21 June','20:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(22,'DEN','AUS','21 June','16:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(23,'ARG','CRO','21 June','21:00','Bravida Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(24,'NIG','ICE','22 June','18:00','Valhalla IP');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(25,'BRA','COS','22 June','15:00','Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(26,'SER','SWI','22 June','20:00','Gamla Ullevi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(27,'GER','SWE','23 June','21:00','Bravida Arena');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(28,'KOR','MEX','23 June','18:00','Gamla Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(29,'BEL','TUN','23 June','15:00','Moscow, Otkritie Arena');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(30,'ENG','PAN','24 June','15:00','Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(31,'POL','COL','24 June','21:00','Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(32,'JPN','SEN','24 June','20:00','Valhalla IP');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(33,'URU','RUS','25 June','18:00','Gamla Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(34,'KSA','EGY','25 June','17:00','Bravida Arena');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(35,'IRN','POR','25 June','21:00','Gamla Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(36,'SPA','MOR','25 June','20:00','Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(37,'DEN','FRA','26 June','17:00','Gamla Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(38,'AUS','PER','26 June','17:00','Valhalla IP');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(39,'NIG','ARG','26 June','21:00','Bravida Arena');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(40,'ICE','CRO','26 June','21:00','Gamla Ullevi');
  INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(41,'SER','BRA','7 June','21:00','Valhalla IP');


  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',1,'RUS','KSA','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',2,'EGY','URU','2','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',3,'MOR','IRN','2','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',4,'POR','SPA','1','3');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',5,'FRA','AUS','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',7,'PER','DEN','1','2');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',6,'ARG','ICE','2','0');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',8,'CRO','NIG','1','3');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('E',9,'BRA','SWI','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('E',10,'COS','SER','2','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('F',11,'GER','MEX','2','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('F',12,'SWE','KOR','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('G',13,'BEL','PAN','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('G',14,'TUN','ENG','1','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('H',15,'POL','SEN','2','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('H',16,'COL','JPN','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',17,'RUS','EGY','3','3');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',18,'URU','KSA','3','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',19,'POR','MOR','2','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',20,'IRN','SPA','1','3');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',21,'FRA','PER','1','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',22,'DEN','AUS','1','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',23,'ARG','CRO','1','0');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',24,'NIG','ICE','0','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('E',25,'BRA','COS','0','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('E',26,'SER','SWI','0','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('F',27,'GER','SWE','0','1');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('F',28,'KOR','MEX','1','3');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('G',29,'BEL','TUN','2','0');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('G',30,'ENG','PAN','2','0');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('H',31,'POL','COL','2','0');
  INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('H',32,'JPN','SEN','2','2');

INSERT INTO Players (id ,country , countryName, firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (1, 'SWE', 'Sweden', 'Ola','Toivonen' , 20, 'Forward', 2, 'Toulouse FC', 191, 75, 'ola_toivonen');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (2, 'SWE', 'Sweden', 'Robin', 'Olsen', 1, 'Goalkeeper', 0, 'FC KØBENHAVN', 191, 75, 'robin_olsen');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (3, 'SWE', 'Sweden', 'Andreas', 'Granqvist', 4, 'Defender', 0, 'FC KRASNODAR', 191, 75, 'andreas_granqvist');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (4, 'SWE', 'Sweden', 'Mikael', 'Lustig', 2, 'Defender', 0, 'CELTIC FC', 191, 75, 'mikael_lustig');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (5, 'SWE', 'Sweden', 'Martin', 'Olsson', 5, 'Defender', 0, 'SWANSEA CITY AFC', 191, 75, 'martin_olsson');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (6, 'SWE', 'Sweden', 'Victor', 'N Lindelöf', 3, 'Defender', 0, 'MANCHESTER UNITED FC', 191, 75, 'victor_lindelof');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (7, 'SWE', 'Sweden', 'Jimmy', 'Durmaz', 21, 'Midfielder', 1, 'TOULOUSE FC', 191, 75, 'jimmy_durmaz');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (9, 'SWE', 'Sweden', 'Emil', 'Forsberg', 10, 'Midfielder', 0, 'RB LEIPZIG', 191, 75, 'emil_forsberg');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (10, 'SWE', 'Sweden', 'Sebastian', 'Larsson', 7, 'Midfielder', 0, 'HULL CITY FC', 191, 75, 'sebastian_larsson');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (11, 'SWE', 'Sweden', 'John', 'Guidetti', 11, 'Forward', 1, 'RC CELTA DE VIGO', 191, 75, 'john_guidetti');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (12, 'SWE', 'Sweden', 'Marcus', 'Berg', 9, 'Forward', 0, 'AL AIN FC', 191, 75, 'marcus_berg');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (13, 'SWE', 'Sweden', 'Janne', 'Andersson', 0, 'Coach', 0, '', 191, 75, 'janne_andersson');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (14, 'SWE', 'Sweden', 'Peter', 'Wettergren', 0, 'Ass. Coach', 0, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (15, 'ENG', 'England', 'DUMMY', 'DUMMY', 2, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (16, 'RUS', 'Russia', 'Fyodor', 'Smolov', 6, 'Forward', 6, '', 191, 75, 'fyodor_smolov');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (17, 'KSA', 'Saudi Arabia', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (18, 'EGY', 'Egypt', 'Mohamed', 'Salah', 6, 'Forward', 5, '', 191, 75, 'mohamed_salah');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (19, 'URU', 'Uruguay', 'Edinson', 'Cavani', 6, 'Player', 4, '', 191, 75, 'edinson_cavani');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (20, 'POR', 'Portugal', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (21, 'SPA', 'Spain', 'Álvaro', 'Morata', 6, 'Forward', 6, '', 191, 75, 'alvaro_morata');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (22, 'IRN', 'Iran', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (23, 'MOR', 'Morocco', 'DUMMY', 'DUMMY', 6, 'Player', 4, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (24, 'FRA', 'France', 'DUMMY', 'DUMMY', 6, 'Player', 4, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (25, 'AUS', 'Australia', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (26, 'PER', 'Peru', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (27, 'DEN', 'Denmark', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (28, 'ARG', 'Argentina', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (29, 'ICE', 'Iceland', 'DUMMY', 'DUMMY', 6, 'Player', 1, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (30, 'CRO', 'Croatia', 'DUMMY', 'DUMMY', 6, 'Player', 1, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (31, 'NIG', 'Nigeria', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (32, 'BRA', 'Brazil', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (33, 'SWI', 'Switzerland', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (34, 'COS', 'Costa Rica', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (35, 'SER', 'Serbia', 'DUMMY', 'DUMMY', 6, 'Player', 1, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (36, 'GER', 'Germany', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (37, 'MEX', 'Mexico', 'DUMMY', 'DUMMY', 6, 'Player', 4, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (38, 'KOR', 'Korea', 'DUMMY', 'DUMMY', 6, 'Player', 2, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (39, 'BEL', 'Belgium', 'Eden', 'Hazard', 6, 'Player', 5, '', 191, 75, 'eden_hazard');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (40, 'PAN', 'Panama', 'DUMMY', 'DUMMY', 6, 'Player', 1, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (41, 'TUN', 'Tunisia', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (42, 'POL', 'Poland', 'DUMMY', 'DUMMY', 6, 'Player', 4, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (43, 'SEN', 'Senegal', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (44, 'COL', 'Colombia', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');
INSERT INTO Players (id ,country , countryName,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (45, 'JPN', 'Japan', 'DUMMY', 'DUMMY', 6, 'Player', 3, '', 191, 75, '');

CREATE TABLE PlayerGoals AS 
  SELECT id, country, countryName ,firstname, surname, goals, img_id
  FROM Players
  ORDER BY goals DESC;

CREATE TABLE TeamGoals AS
  SELECT Countries.abbreviation, Countries.countryName, SUM(Players.goals) AS goals
  FROM Countries, Players
  WHERE Countries.abbreviation = Players.country
  GROUP BY Countries.abbreviation, Players.country
  ORDER BY goals DESC;
  
INSERT INTO CountryInformation (abbreviation, worldrank, history) VALUES ('SWE', 18, 'Sweden have been one of the more successful national teams in the history of the World Cup having reached 4 semi-finals and becoming runners-up on home ground in 1958. They have been present at 11 out of 20 World Cups by 2014. They will make their twelfth appearance at the finals in the 2018 FIFA World Cup in Russia. Throughout the World Cup history Brazil became Swedens historical rival. The two countries have met each other seven times but Sweden never managed to win with five victories for the Brazilian side and two draws. Another historical opponent of Sweden in the finals is (West) Germany: four encounters with three wins for Germany and one for Sweden.');

INSERT INTO CountryInformation (abbreviation, worldrank, history) VALUES ('SPA', 6, 'Spain is one of only eight countries ever to have won the FIFA World Cup which it did at the 2010 FIFA World Cup in South Africa the first time the team had reached the final. The team is one of the most present at the World Cup finals with 14 appearances out of the 20 tournaments. Spain reached fourth-place in 1950 and has reached the quarter-finals four times. The Spanish team has also won three UEFA European Football Championships in 1964 2008 and 2012 and the Olympic football tournament in 1992.');

INSERT INTO CountryInformation (abbreviation, worldrank, history) VALUES ('ARG', 4, 'Argentina is one of the most successful national football teams in the world having won 2 World Cups in 1978 and 1986. Argentina has been runners up three times in the 1930 1990 and 2014. The team was present in all but four of the World Cups being behind only Brazil Italy and Germany in number of appearances. Argentina has also won the Copa América 14 times one less than Uruguay. Moreover Argentina has also won the Confederations Cup and the gold medal at the Olympic football tournament in 2004 and 2008. Prior to that occasion Argentina had obtained two silver medals in the 1928 and 1996 editions. On other levels of international competition Argentina has won the FIFA U-20 World Cup a record six times. The FIFA U-17 World Cup is the only FIFA international competition yet to be obtained.');

INSERT INTO CountryInformation (abbreviation, worldrank, history) VALUES ('AUS', 39, 'The Australia national soccer team nicknamed the Socceroos has represented Australia at the FIFA World Cup on four occasions: in 1974, 2006, 2010, 2014 and will represent Australia in the 2018 World Cup. In Australias first appearance representing OFC a team made up entirely of amateurs secured a scoreless draw against Chile though eventually departed from the 1974 tournament without a goal to show from their inaugural appearance. Australia made up for lost time at Germany 2006 and qualified for the Round of 16 before narrowly falling to eventual champions Italy.The German theme continued at South Africa 2010 although this time Australia now representing the AFC suffered a 4-0 loss against the European giants in a scoreline which ultimately scuppered their progress.A ten-man 1–1 draw against Ghana and a 2–1 win against Serbia saw Australia eliminated on goal difference three goals off the Africans.');
