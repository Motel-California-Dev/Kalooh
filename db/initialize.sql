CREATE TABLE users (
	id		      SERIAL,	
	user_name 	VARCHAR(255) NOT NULL,
	first_name	VARCHAR(255) NOT NULL,
	last_name	  VARCHAR(255) NOT NULL,
	email		    VARCHAR(255) NOT NULL,
	password	  VARCHAR(255) NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_email UNIQUE (email)
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
  id      	  SERIAL,
	user_id	    int NOT NULL,
	created_at	TIMESTAMP NOT NULL,
  title 		  VARCHAR(255) NOT NULL,
	message 	  VARCHAR(255) NOT NULL,
  lati 		    FLOAT,
  long  	    FLOAT,
	CONSTRAINT post_pk PRIMARY KEY (ID),
	CONSTRAINT post_fk_user FOREIGN KEY (user_id)
	REFERENCES users(ID)
  );
  
CREATE TABLE comment (
  id 		        SERIAL,
  post_id 	    int NOT NULL,
	user_id	      int NOT NULL,
	created_at	  TIMESTAMP NOT NULL,
	text		      VARCHAR(255) NOT NULL,
	CONSTRAINT comment_pk PRIMARY KEY (id),
	CONSTRAINT comment_fk_user FOREIGN KEY (user_id)
	REFERENCES users(id),
	CONSTRAINT comment_fk_post FOREIGN KEY (post_id)
	REFERENCES post(id)
  );

INSERT INTO users (user_name, first_name, last_name, email, password)
  VALUES
  ('Test1','Nathan','Rice', 'n8@cambium5.com','nathan'),
  ('Test2','Eric','Do','ericdo62497@gmail.com','eric'),
  ('Test3','Kyle','Mazza','kylemazza@gmail.com','kyle'),
  ('Test4','Kian','Badie','kianbadie@gmail.com','kian'),
  ('Test5','Christian','Wance','christian.wance@gmail.com','weKnow');

INSERT INTO post (user_id, created_at, title, message, lati, long)
  VALUES
  (5,TIMESTAMP '2019-02-19 12:00:00','FIRST!','First Post of any kind!!',33.7817,-118.1135),
  (3,TIMESTAMP '2019-02-19 12:05:00','Wow Nate','Could you not Nathan...',33.7820,-118.1130),
  (2,TIMESTAMP '2019-02-19 14:15:00','Free fries at outpost','Whisper "give me all your money" and they will give you free fries.',33.7814,-118.1140);

INSERT INTO comment (user_id, post_id, created_at, text)
  VALUES
  (1, 2,TIMESTAMP '2019-02-19 12:10:00','What do you want Kyle? >:('),
  (3, 3,TIMESTAMP '2019-02-19 12:11:00','You know what you did!!'),
  (4, 3,TIMESTAMP '2019-02-19 12:12:00','Woah guys, I feel like I caused this... :(');

INSERT INTO follow (leader, follower)
  VALUES
  (2,1),
  (2,3),
  (3,2),
  (4,1),
  (5,4);
  
