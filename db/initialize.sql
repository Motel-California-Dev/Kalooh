CREATE TABLE user (
	user_id 	INT SERIAL PRIMARY KEY,
	name 		  VARCHAR(255) NOT NULL
);

CREATE TABLE post (
	poster_id	INT,
	time	    TIME NOT NULL,
	title 		VARCHAR(255) NOT NULL,
	message 	VARCHAR(255),
  lati 		  FLOAT,
  long  	  FLOAT,
	CONSTRAINT post_pk PRIMARY KEY (poster_id, time),
	CONSTRAINT post_fk_user FOREIGN KEY (poster_id)
	REFERENCES user(user_id)
  );
  
CREATE TABLE comment (
	user_id	      INT,
	poster_id	    INT,
	post_time	    TIME,
	comment_time	TIME NOT NULL,
	text		      VARCHAR(255) NOT NULL,
	CONSTRAINT comment_pk PRIMARY KEY (user_id, poster_id, post_time, comment_time),
	CONSTRAINT comment_fk_user FOREIGN KEY (user_id)
	REFERENCES user(user_id),
	CONSTRAINT comment_fk_post PRIMARY KEY (poster_id, post_time)
	REFERENCES post(poster_id, post_time)
  );

INSERT INTO "user" (name)
  VALUES ('User1'),
  ('Al'),
  ('Bob'),
  ('Carl'),
  ('Dale'),
  ('Earl'),
  ('Fred'),
  ('Gary');
