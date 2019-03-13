const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { username, title, message, lati, long } = req.body;
  const query = "INSERT INTO post (poster_name, post_time, title, message, lati, long) VALUES ($1, $2, $3, $4, $5, $6);";
  const params = [username, Date.now(), title, lati, long]; 
  db.query(query, params)
    .then(data => {
      console.log(data.rows);
      res.status(204).send({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.list = (req, res) => {
  console.log("Get!");
  const query = "SELECT * FROM post;";
  db.query(query)
    .then(data => {
      console.log(data);
      res.status(200).send(data.rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

// TODO: Change this to an ID value
exports.find = (req, res) => {
  console.log("Get a post!");
  const query = "SELECT * FROM post WHERE title = $1;";
  const params = [req.params.title];
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(200).send(data.rows[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.update = (req, res) => {
  console.log("Update!");
  const { message, title } = req.body;
  const query = "UPDATE post SET message = $1 WHERE title = $2;";
  const params = [ message, title ]; 
  db.query(query, params)
    .then(data => {
      console.log(data.rows);
      res.status(204).send({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

