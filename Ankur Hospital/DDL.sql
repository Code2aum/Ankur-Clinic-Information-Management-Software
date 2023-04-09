CREATE DATABASE HMS;
USE HMS;

CREATE TABLE Patient(
email varchar(50) PRIMARY KEY,
password varchar(30) NOT NULL,
name varchar(50) NOT NULL,
address varchar(60) NOT NULL,
gender VARCHAR(20) NOT NULL
);

CREATE TABLE MedicalHistory(
id int PRIMARY KEY,
date DATE NOT NULL,
conditions VARCHAR(100) NOT NULL, 
surgeries VARCHAR(100) NOT NULL, 
medication VARCHAR(100) NOT NULL
);

CREATE TABLE Doctor(
email varchar(50) PRIMARY KEY,
gender varchar(20) NOT NULL,
password varchar(30) NOT NULL,
name varchar(50) NOT NULL
);

CREATE TABLE Appointment(
id int PRIMARY KEY,
date DATE NOT NULL,
starttime TIME NOT NULL,
endtime TIME NOT NULL,
status varchar(15) NOT NULL
);

CREATE TABLE PatientsAttendAppointments(
patient varchar(50) NOT NULL,
appt int NOT NULL,
concerns varchar(40) NOT NULL,
symptoms varchar(40) NOT NULL,
FOREIGN KEY (patient) REFERENCES Patient (email) ON DELETE CASCADE,
FOREIGN KEY (appt) REFERENCES Appointment (id) ON DELETE CASCADE,
PRIMARY KEY (patient, appt)
);

CREATE TABLE Schedule(
id int NOT NULL,
starttime TIME NOT NULL,
endtime TIME NOT NULL,
breaktime TIME NOT NULL,
day varchar(20) NOT NULL,
PRIMARY KEY (id, starttime, endtime, breaktime, day)
);

CREATE TABLE PatientsFillHistory(
patient varchar(50) NOT NULL,
history int NOT NULL,
FOREIGN KEY (patient) REFERENCES Patient (email) ON DELETE CASCADE,
FOREIGN KEY (history) REFERENCES MedicalHistory (id) ON DELETE CASCADE,
PRIMARY KEY (history)
);

CREATE TABLE Diagnose(
appt int NOT NULL,
doctor varchar(50) NOT NULL,
diagnosis varchar(40) NOT NULL,
prescription varchar(50) NOT NULL,
FOREIGN KEY (appt) REFERENCES Appointment (id) ON DELETE CASCADE,
FOREIGN KEY (doctor) REFERENCES Doctor (email) ON DELETE CASCADE,
PRIMARY KEY (appt, doctor)
);

CREATE TABLE DocsHaveSchedules(
sched int NOT NULL,
doctor varchar(50) NOT NULL,
FOREIGN KEY (sched) REFERENCES Schedule (id) ON DELETE CASCADE,
FOREIGN KEY (doctor) REFERENCES Doctor (email) ON DELETE CASCADE,
PRIMARY KEY (sched, doctor)
);

CREATE TABLE DoctorViewsHistory(
history int NOT NULL,
doctor varchar(50) NOT NULL,
FOREIGN KEY (doctor) REFERENCES Doctor (email) ON DELETE CASCADE,
FOREIGN KEY (history) REFERENCES MedicalHistory (id) ON DELETE CASCADE,
PRIMARY KEY (history, doctor)
);

-- insertions
INSERT INTO Patient(email,password,name,address,gender)
VALUES
('patient1@gmail.com','Password','patient1','State-1', 'male'),
('patient2@gmail.com','password','patient2','State-2', 'male'),
('patient3@gmail.com','password','patient3','State-3', 'male'),
('patient4@gmail.com','password','patient4','State-4', 'male'),
('patient5@gmail.com','password','patient5','State-5', 'male'),
('patient6@gmail.com','password','patient6','State-6', 'male'),
('patient7@gmail.com','password','patient7','State-7', 'male'),
('patient8@gmail.com','password','patient8','State-8', 'male'),
('patient9@gmail.com','password','patient9','State-9', 'male'),
('patient10@gmail.com','password','patient10','State-10', 'male')
;

INSERT INTO MedicalHistory(id,date,conditions,surgeries,medication)
VALUES
(1,'19-01-14','Pain in abdomen','Heart Surgery','Crocin'),
(2,'19-01-14','Frequent Indigestion','none','none'),
(3,'19-01-14','Body Pain','none','Iodex'),
(4,'19-01-14','Heart Problems','open heart surgery','remifentanil'),
(5,'19-01-14','sore throat','none','studol'),
(6,'19-01-14','frequent alergy','none','montelucast tablets'),
(7,'19-01-14','burns','none','burnol'),
(8,'19-01-14','frequent ear wax','none','solivax'),
(9,'19-01-14','nose blockage','none','ottrivon'),
(10,'19-01-14','dengue','none','Analgesic')
;

INSERT INTO Doctor(email, gender, password, name)
VALUES
('doctor1@gmail.com', 'male', 'password', 'Doc-Name'),
('doctor2@gmail.com', 'male', 'password', 'Doc-Name')
;

INSERT INTO Appointment(id,date,starttime,endtime,status)
VALUES
(1, '19-01-15', '09:00', '10:00', 'Done'),
(2, '19-01-16', '10:00', '11:00', 'Done'),
(3, '19-01-18', '14:00', '15:00', 'Done'),
(4, '11-05-22', '11:00', '12:00', 'Done'),
(5, '12-03-01', '16:00', '17:00', 'Done'),
(6, '07-11-21', '10:00', '11:00', 'Done'),
(7, '09-11-09', '14:00', '15:00', 'Done'),
(8, '15-02-17', '9:00', '10:00', 'Done'),
(9, '31-12-24', '13:00', '14:00', 'Done'),
(10, '17-06-14', '16:00', '17:00', 'Done')
;

INSERT INTO PatientsAttendAppointments(patient,appt,concerns,symptoms)
VALUES
('patient1@gmail.com',1, 'none', 'itchy throat'),
('patient2@gmail.com',2, 'infection', 'fever'),
('patient3@gmail.com',3, 'nausea', 'fever'),
('patient4@gmail.com',4, 'none', 'skin burn'),
('patient5@gmail.com',5, 'eye problem', 'burning sensation'),
('patient6@gmail.com',6, 'none', 'vomitting'),
('patient7@gmail.com',7, 'stool', 'loose motion'),
('patient8@gmail.com',8, 'none', 'headache'),
('patient9@gmail.com',9, 'none', 'migrane'),
('patient10@gmail.com',10, 'cold', 'flem, blocked nose')
;

INSERT INTO Schedule(id,starttime,endtime,breaktime,day)
VALUES
(001,'09:00','17:00','12:00','Tuesday'),
(001,'09:00','17:00','12:00','Friday'),
(001,'09:00','17:00','12:00','Saturday'),
(001,'09:00','17:00','12:00','Sunday'),
(002,'09:00','17:00','12:00','Wednesday'),
(002,'09:00','17:00','12:00','Friday')
;

INSERT INTO PatientsFillHistory(patient,history)
VALUES
('patient1@gmail.com', 1),
('patient2@gmail.com', 2),
('patient3@gmail.com', 3),
('patient4@gmail.com', 4),
('patient5@gmail.com', 5),
('patient6@gmail.com', 6),
('patient7@gmail.com', 7),
('patient8@gmail.com', 8),
('patient9@gmail.com', 9),
('patient10@gmail.com', 10)
;

INSERT INTO Diagnose(appt,doctor,diagnosis,prescription)
VALUES
(1,'doctor1@gmail.com', 'Bloating', 'Ibuprofen as needed'),
(2,'doctor2@gmail.com', 'Muscle soreness', 'Stretch morning/night'),
(3,'doctor2@gmail.com', 'Vitamin Deficiency', 'Good Diet'),
(4,'doctor2@gmail.com', 'Lethargy', 'Exercise'),
(5,'doctor2@gmail.com', 'Glucoma', 'Sugar Treatment and control'),
(6,'doctor2@gmail.com', 'food poisoning', 'Good Diet and water'),
(7,'doctor2@gmail.com', 'food poisoning', 'Good Diet and water, ORS'),
(8,'doctor2@gmail.com', 'eye related problem', 'reduce screen time'),
(9,'doctor2@gmail.com', 'eye related problem', 'reduce screen time'),
(10,'doctor2@gmail.com', 'Asthama, wheezing', 'Good Diet, yoga, swimming, exercise')
;

INSERT INTO DocsHaveSchedules(sched,doctor)
VALUES
(001,'doctor1@gmail.com'),
(002,'doctor2@gmail.com')
;

INSERT INTO DoctorViewsHistory(history,doctor)
VALUES
(1,'doctor1@gmail.com'),
(2,'doctor2@gmail.com'),
(3,'doctor2@gmail.com'),
(4,'doctor2@gmail.com'),
(5,'doctor2@gmail.com'),
(6,'doctor2@gmail.com'),
(7,'doctor2@gmail.com'),
(8,'doctor2@gmail.com'),
(9,'doctor2@gmail.com'),
(10,'doctor2@gmail.com')
;
