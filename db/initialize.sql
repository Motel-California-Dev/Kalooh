CREATE TABLE users (
	user_name 	VARCHAR(255) NOT NULL,
	firstName	VARCHAR(255) NOT NULL,
	lastName	VARCHAR(255) NOT NULL,
	email		VARCHAR(255) NOT NULL,
	password	VARCHAR(255) NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (user_name),
	CONSTRAINT user_uni UNIQUE (email)
);

CREATE TABLE post (
    	ID 		SERIAL,
	poster_name	VARCHAR(255) NOT NULL,
	post_time	TIMESTAMP NOT NULL,
	title 		VARCHAR(255) NOT NULL,
	message 	VARCHAR(255) NOT NULL,
  	lati 		FLOAT,
  	long  	  	FLOAT,
	CONSTRAINT post_pk PRIMARY KEY (ID),
	CONSTRAINT post_fk_user FOREIGN KEY (poster_name)
	REFERENCES users(user_name)
  );
  
CREATE TABLE comment (
    	POST_ID 	int NOT NULL,
	user_name	VARCHAR(255) NOT NULL,
	poster_name	VARCHAR(255) NOT NULL,
	post_time	TIMESTAMP,
	comment_time	TIMESTAMP NOT NULL,
	text		VARCHAR(255) NOT NULL,
	CONSTRAINT comment_pk PRIMARY KEY (user_name, POST_ID, comment_time),
	CONSTRAINT comment_fk_user FOREIGN KEY (user_name)
	REFERENCES users(user_name),
	CONSTRAINT comment_fk_post FOREIGN KEY (POST_ID)
	REFERENCES post(ID)
  );

INSERT INTO "users" (user_name, firstName, LastName, email, password)
  VALUES
  ('Test1','Nathan','Rice', 'n8@cambium5.com','nathan'),
  ('Test2','Eric','Do','ericdo62497@gmail.com','eric'),
  ('Test3','Kyle','Mazza','kylemazza@gmail.com','kyle'),
  ('Test4','Kian','Badie','kianbadie@gmail.com','kian'),
  ('Test5','Christian','Wance','christian.wance@gmail.com','weKnow');

Insert Into "post" (poster_name, post_time, title, message, lati, long)
  VALUES
  ('Test5',TIMESTAMP '2019-02-19 12:00:00','FIRST!','First Post of any kind!!',33.7817,-118.1135),
  ('Test3',TIMESTAMP '2019-02-19 12:05:00','Wow Nate','Could you not Nathan...',33.7820,-118.1130),
  ('Test2',TIMESTAMP '2019-02-19 14:15:00','Free fries at outpost','Whisper "give me all your money" and they will give you free fries.',33.7814,-118.1140);

Insert Into "comment" (user_name, POST_ID, poster_name, post_time, comment_time, text)
  VALUES
  ('Test1', 2,TIMESTAMP '2019-02-19 12:10:00','What do you want Kyle? >:('),
  ('Test3', 3,TIMESTAMP '2019-02-19 12:11:00','You know what you did!!'),
  ('Test4', 3,TIMESTAMP '2019-02-19 12:12:00','Woah guys, I feel like I caused this... :(');


