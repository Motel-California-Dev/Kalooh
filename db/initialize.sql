CREATE TABLE users (
	user_name 	VARCHAR(255) NOT NULL,
	firstName	VARCHAR(255) NOT NULL,
	lastName	VARCHAR(255) NOT NULL,
	email		VARCHAR(255) NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (user_name),
	CONSTRAINT user_uni UNIQUE (email)
);

CREATE TABLE post (
	poster_name	VARCHAR(255) NOT NULL,
	post_time	TIMESTAMP NOT NULL,
	title 		VARCHAR(255) NOT NULL,
	message 	VARCHAR(255) NOT NULL,
  	lati 		FLOAT,
  	long  	  	FLOAT,
	CONSTRAINT post_pk PRIMARY KEY (poster_name, post_time),
	CONSTRAINT post_fk_user FOREIGN KEY (poster_name)
	REFERENCES users(user_name)
  );
  
CREATE TABLE comment (
	user_name	VARCHAR(255) NOT NULL,
	poster_name	VARCHAR(255) NOT NULL,
	post_time	TIMESTAMP,
	comment_time	TIMESTAMP NOT NULL,
	text		VARCHAR(255) NOT NULL,
	CONSTRAINT comment_pk PRIMARY KEY (user_name, poster_name, post_time, comment_time),
	CONSTRAINT comment_fk_user FOREIGN KEY (user_name)
	REFERENCES users(user_name),
	CONSTRAINT comment_fk_post FOREIGN KEY (poster_name, post_time)
	REFERENCES post(poster_name, post_time)
  );

INSERT INTO "users" (user_name, firstName, LastName, email)
  VALUES
  ('Test1','Nathan','Rice', 'n8@cambium5.com'),
  ('Test2','Eric','Do','ericdo62497@gmail.com'),
  ('Test3','Kyle','Mazza','kylemazza@gmail.com'),
  ('Test4','Kian','Badie','kianbadie@gmail.com'),
  ('Test5','Christian','Wance','christian.wance@gmail.com');
