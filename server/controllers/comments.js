const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { username, title, message, lati, long } = req.body;
  const query = "INSERT INTO post (poster_name, post_time, title, message, lati, long) VALUES ($1, CURRENT_TIMESTAMP, $2, $3, $4, $5);";
  const params = [username, title, message, lati, long]; 
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

exports.find = (req, res) => {
  console.log("Get a post!");
  const query = "SELECT * FROM post WHERE ID = $1;";
  const params = [req.params.ID];
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
  const { message, ID } = req.body;
  const query = "UPDATE post SET message = $1 WHERE ID = $2;";
  const params = [ message, ID ]; 
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
exports.delete = (req, res) => {
  console.log("Delete!");
  const { title, ID } = req.body;
  const query = "DELETE FROM post WHERE TITLE = $1 AND ID = $2;";
  const params = [ title, ID ]; 
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

