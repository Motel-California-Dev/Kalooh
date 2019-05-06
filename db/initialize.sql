CREATE TABLE users (
	id		      SERIAL,	
	user_name 	VARCHAR(255) NOT NULL,
	first_name	VARCHAR(255) NOT NULL,
	last_name	  VARCHAR(255) NOT NULL,
	email		    VARCHAR(255) NOT NULL,
	password	  VARCHAR(255),
  picture     VARCHAR(255),
  created_at  TIMESTAMP NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_email UNIQUE (email)
);

CREATE TABLE follow (
	leader		int NOT NULL,
	follower	int NOT NULL,
	CONSTRAINT follow_pk PRIMARY KEY (leader, follower),
	CONSTRAINT follow_fk_leader FOREIGN KEY (leader)
	  REFERENCES users(ID),
	CONSTRAINT follow_fk_follower FOREIGN KEY (follower)
	  REFERENCES users(ID)
);

CREATE TABLE friend (
	leader		int NOT NULL,
	friender	int NOT NULL,
	CONSTRAINT friend_pk PRIMARY KEY (leader, friender),
	CONSTRAINT friend_fk_leader FOREIGN KEY (leader)
	  REFERENCES users(ID),
	CONSTRAINT friend_fk_friender FOREIGN KEY (friender)
	  REFERENCES users(ID)
);

CREATE TABLE post (
  	id      	SERIAL,
	user_id	    	int NOT NULL,
	created_at	TIMESTAMP NOT NULL,
  	title 		VARCHAR(255) NOT NULL,
	message 	VARCHAR(255) NOT NULL,
  	lati 		FLOAT,
  	long  	    	FLOAT,
	likes		INT,
	CONSTRAINT post_pk PRIMARY KEY (ID),
	CONSTRAINT post_fk_user FOREIGN KEY (user_id)
	  REFERENCES users(ID)
  );
  
CREATE TABLE comment (
  	id 		SERIAL,
  	post_id 	int NOT NULL,
	user_id	      	int NOT NULL,
	created_at	TIMESTAMP NOT NULL,
	text		VARCHAR(255) NOT NULL,
	likes		INT,
	CONSTRAINT comment_pk PRIMARY KEY (id),
	CONSTRAINT comment_fk_user FOREIGN KEY (user_id)
	  REFERENCES users(id),
	CONSTRAINT comment_fk_post FOREIGN KEY (post_id)
	  REFERENCES post(id)
  );

CREATE TYPE tag AS ENUM ('Food', 'Sale',  'Free' ,'Personal', 'Social', 'Other', 'Event', 'Music', 'Shopping');

CREATE TABLE comment (
  	post_id 	int NOT NULL,
	post_tag	tag Not NULL,
	CONSTRAINT comment_pk PRIMARY KEY (post_id,post_tag),
	CONSTRAINT comment_fk_user FOREIGN KEY (post_id)
	  REFERENCES users(id)
  );

  
