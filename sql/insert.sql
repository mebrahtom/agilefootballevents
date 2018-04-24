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
        INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ARG','Argentia','C');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('ICE','Iceland','C');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('PER','Peru','D');
	INSERT INTO Countries(abbreviation,countryName,groupName ) VALUES ('DEN','Denmark','D');
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

	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES (1,'RUS','KSA','14 June ','12:00','Luzhniki Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(2,'EGY','ERY','15 June ','14:00','Central Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(3,'MOR','IRN','15 June ','17:00','Saint Petersburg');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(4,'POR','SPA','15 June ','20:00','Fisht Stadium Sochi');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(5,'FRA','AUS','16 JUN ','12:00','Kazan Arena Kazan');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(6,'ARG','ICE','16 JUN ','15:00','Spartak Stadium Moscow');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(7,'PER','DEN','16 JUN ','18:00','Mordovia Arena Saransk');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(8,'CRO','NGA','16 JUN ','21:00','Kaliningrad Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(9,'BRA','SWI','17 June','21:00','Rostov-on-Don');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(10,'CRC','SER','17 June','16:00','Samara, Samara Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(11,'GER','MEX','17 June','18:00','Moscow, Luzhniki stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(12,'SWE','KOR','18 June','15:00','Nizhny Novgorod');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(13,'BEL','PAN','18 June','18:00','ochi, Fisht Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(14,'TUN','ENG','18 June','21:00','Volgograd, Volgograd Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(15,'POL','SEN','19 June','18:00','Otkritie Arena Stadium,');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(16,'COL','JPN','19 June','15:00','Saransk, Mordovia Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(17,'RUS','EGY','19 June','21:00','Saint Petersburg');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(18,'ERY','KSA','20 June','18:00','Rostov-on-Don, Rostov Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(19,'POR','MOR','20 June','15:00','Moscow,');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(20,'IRN','SPA','20 June','21:00','Kazan, Kazan Arena Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(21,'FRA','PER','21 June','20:00','Ekaterinburg, Ekaterinburg ');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(22,'DEN','AUS','21 June','16:00','Samara, Samara Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(23,'ARG','CRO','21 June','21:00','Nizhny Novgorod, Nizhny ');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(24,'NIG','ICA','22 June','18:00','Volgograd, Volgograd Arena');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(25,'BRA','COS','22 June','15:00','Saint Petersburg Stadium');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(26,'SER','SWI','22 June','20:00','Stadium, Solnechnyy bulvar');
	INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(27,'GER','SWE','23 June','21:00','Sochi, Fisht Stadium');


	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',1,'RUS','KSA','3','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('A',2,'EGY','ERY','2','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',3,'MOR','IRN','2','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('B',4,'POR','SPA','1','3');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',5,'FRA','AUS','3','1');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('C',6,'ARG','ICE','2','0');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',7,'PER','DEN','1','2');
	INSERT INTO MatchResults (groupName ,matchNumber,team1, team2, goals1, goals2) VALUES ('D',8,'CRO','NGA','1','3');

INSERT INTO Arenas(arena, latitude, longitude) VALUES ('Ullevi', 57.7059, 11.9873);
INSERT INTO Arenas(arena, latitude, longitude) VALUES ('Gamla Ullevi', 57.7063, 11.9801);
INSERT INTO Arenas(arena, latitude, longitude) VALUES ('Bravida Arena', 57.7192, 11.9305);
INSERT INTO Arenas(arena, latitude, longitude) VALUES ('Valhalla IP', 57.7000, 11.9896);

<<<<<<< HEAD
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (1, 'SWE', 'Ola','Toivonen' , 20, 'Forward', 0, 'Toulouse FC', 191, 75, 'ola_toivonen');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (2, 'SWE', 'Robin', 'Olsen', 1, 'Goalkeeper', 0, 'FC KØBENHAVN', 191, 75, 'robin_olsen');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (3, 'SWE', 'Andreas', 'Granqvist', 4, 'Defender', 0, 'FC KRASNODAR', 191, 75, 'andreas_granqvist');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (4, 'SWE', 'Mikael', 'Lustig', 2, 'Defender', 0, 'CELTIC FC', 191, 75, 'mikael_lustig');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (5, 'SWE', 'Martin', 'Olsson', 5, 'Defender', 0, 'SWANSEA CITY AFC', 191, 75, 'martin_olsson');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (6, 'SWE', 'Victor', 'N Lindelöf', 3, 'Defender', 0, 'MANCHESTER UNITED FC', 191, 75, 'victor_lindelof');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (7, 'SWE', 'Jimmy', 'Durmaz', 21, 'Midfielder', 0, 'TOULOUSE FC', 191, 75, 'jimmy_durmaz');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (9, 'SWE', 'Emil', 'Forsberg', 10, 'Midfielder', 0, 'RB LEIPZIG', 191, 75, 'emil_forsberg');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (10, 'SWE', 'Sebastian', 'Larsson', 7, 'Midfielder', 0, 'HULL CITY FC', 191, 75, 'sebastian_larsson');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (11, 'SWE', 'John', 'Guidetti', 11, 'Forward', 0, 'RC CELTA DE VIGO', 191, 75, 'john_guidetti');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (12, 'SWE', 'Marcus', 'Berg', 9, 'Forward', 0, 'AL AIN FC', 191, 75, 'marcus_berg');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (13, 'SWE', 'Janne', 'Andersson', 0, 'Coach', 0, '', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (14, 'SWE', 'Peter', 'Wettergren', 0, 'Ass. Coach', 0, '', 191, 75, '');
=======
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (1, 'SWE', 'Ola','Toivonen' , 20, 'Forward', 0, 'Toulouse FC', 191, 75, 'ola_toivo');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (2, 'SWE', 'Robin', 'Olsen', 1, 'Goalkeeper', 0, 'FC KØBENHAVN', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (3, 'SWE', 'Andreas', 'Granqvist', 2, 'Defender', 0, 'FC KRASNODAR', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (4, 'SWE', 'Mikael', 'Lustig', 3, 'Defender', 0, 'CELTIC FC', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (5, 'SWE', 'Martin', 'Olsson', 4, 'Defender', 0, 'SWANSEA CITY AFC', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (6, 'SWE', 'Victor', 'Nilsson Lindelöf', 5, 'Defender', 0, 'MANCHESTER UNITED FC', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (7, 'SWE', 'Jimmy', 'Durmaz', 6, 'Midfielder', 0, 'TOULOUSE FC', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (8, 'SWE', 'Albin', 'Ekdal', 7, 'Midfielder', 0, 'HAMBURGER SV', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (9, 'SWE', 'Emil', 'Forsberg', 8, 'Midfielder', 0, 'RB LEIPZIG', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (10, 'SWE', 'Sebastian', 'Larsson', 9, 'Midfielder', 0, 'HULL CITY FC', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (11, 'SWE', 'John', 'Guidetti', 10, 'Forward', 0, 'RC CELTA DE VIGO', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (12, 'SWE', 'Marcus', 'Berg', 11, 'Forward', 0, 'AL AIN FC', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (13, 'SWE', 'Janne', 'Andersson', 12, 'Coach', 0, '', 191, 75, '');
INSERT INTO Players (id ,country ,firstname, surname, shirtNumber ,position, goals, club, height, weight , img_id) VALUES (14, 'SWE', 'Peter', 'Wettergren', 13, 'Ass. Coach', 0, '', 191, 75, '');
>>>>>>> dev
