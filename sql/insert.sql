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

INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(1,'RUS','KSA','14 June 2018','12:00','Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(2,'EGY','ERY','15 June 2018','14:00','Gamla Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(3,'MOR','IRN','15 June 2018','17:00','Bravida Arena');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(4,'POR','SPA','15 June 2018','20:00','Valhalla IP');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(5,'FRA','AUS','16 June 2018','12:00','Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(6,'ARG','ICE','16 June 2018','15:00','Gamla Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(7,'PER','DEN','16 June 2018','18:00','Bravida Arena');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(8,'CRO','NGA','16 June 2018','21:00','Valhalla IP');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(9,'BRA','SWI','17 June 2018','21:00','Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(10,'CRC','SER','17 June 2018','16:00','Gamla Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(11,'GER','MEX','17 June 2018','18:00','Bravida Arena');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(12,'SWE','KOR','18 June 2018','15:00','Valhalla IP');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(13,'BEL','PAN','18 June 2018','18:00','Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(14,'TUN','ENG','18 June 2018','21:00','Gamla Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(15,'POL','SEN','19 June 2018','18:00','Bravida Arena');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(16,'COL','JPN','19 June 2018','15:00','Valhalla IP');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(17,'RUS','EGY','19 June 2018','21:00','Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(18,'ERY','KSA','20 June 2018','18:00','Gamla Ullevi');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(19,'POR','MOR','20 June 2018','15:00','Bravida Arena');
INSERT INTO MatchFixtures (matchnumber,team1, team2, playingDate, playingTime, stadium) VALUES(20,'IRN','SPA','20 June 2018','21:00','Valhalla IP');

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
