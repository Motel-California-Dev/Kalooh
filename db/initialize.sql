CREATE TABLE users (
	ID		SERIAL,	
	user_name 	VARCHAR(255) NOT NULL,
	firstName	VARCHAR(255) NOT NULL,
	lastName	VARCHAR(255) NOT NULL,
	email		VARCHAR(255) NOT NULL,
	password	VARCHAR(255) NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (ID),
	CONSTRAINT user_email UNIQUE (email),	
	CONSTRAINT user_UN UNIQUE (user_name)
);

CREATE TABLE follow (
	leader		int NOT NULL,
	follower	int NOT NULL,
	CONSTRAINT follow_pk PRIMARY KEY (leader, follower),
	CONSTRAINT follow_fk_user FOREIGN KEY (leader)
	REFERENCES users(ID),
	CONSTRAINT follow_fk_follower FOREIGN KEY (follower)
	REFERENCES users(ID)
);

CREATE TABLE post (
    	ID 		SERIAL,
	poster_ID	int NOT NULL,
	post_time	TIMESTAMP NOT NULL,
	title 		VARCHAR(255) NOT NULL,
	message 	VARCHAR(255) NOT NULL,
  	lati 		FLOAT,
  	long  	  	FLOAT,
	CONSTRAINT post_pk PRIMARY KEY (ID),
	CONSTRAINT post_fk_user FOREIGN KEY (poster_ID)
	REFERENCES users(ID)
  );
  
CREATE TABLE comment (
    	ID 		SERIAL,
    	POST_ID 	int NOT NULL,
	commenter_ID	int NOT NULL,
	comment_time	TIMESTAMP NOT NULL,
	text		VARCHAR(255) NOT NULL,
	CONSTRAINT comment_pk PRIMARY KEY (ID),
	CONSTRAINT comment_fk_user FOREIGN KEY (commenter_ID)
	REFERENCES users(ID),
	CONSTRAINT comment_fk_post FOREIGN KEY (POST_ID)
	REFERENCES post(ID)
  );

INSERT INTO users (user_name, firstName, LastName, email, password)
  VALUES
  ('Test1','Nathan','Rice', 'n8@cambium5.com','nathan'),
  ('Test2','Eric','Do','ericdo62497@gmail.com','eric'),
  ('Test3','Kyle','Mazza','kylemazza@gmail.com','kyle'),
  ('Test4','Kian','Badie','kianbadie@gmail.com','kian'),
  ('Test5','Christian','Wance','christian.wance@gmail.com','weKnow');

Insert Into post (poster_ID, post_time, title, message, lati, long)
  VALUES
  (5,TIMESTAMP '2019-02-19 12:00:00','FIRST!','First Post of any kind!!',33.7817,-118.1135),
  (3,TIMESTAMP '2019-02-19 12:05:00','Wow Nate','Could you not Nathan...',33.7820,-118.1130),
  (2,TIMESTAMP '2019-02-19 14:15:00','Free fries at outpost','Whisper "give me all your money" and they will give you free fries.',33.7814,-118.1140);

Insert Into comment (commenter_ID, POST_ID, comment_time, text)
  VALUES
  (1, 2,TIMESTAMP '2019-02-19 12:10:00','What do you want Kyle? >:('),
  (3, 3,TIMESTAMP '2019-02-19 12:11:00','You know what you did!!'),
  (4, 3,TIMESTAMP '2019-02-19 12:12:00','Woah guys, I feel like I caused this... :(');

Insert Into follow (leader, follower)
  VALUES
  (2,1),
  (2,3),
  (3,2),
  (4,1),
  (5,4);
  
