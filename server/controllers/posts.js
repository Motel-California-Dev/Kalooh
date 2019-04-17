const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { userId, createdAt, title, message, lati, long } = req.body;
  const query = "INSERT INTO post (user_id, created_at, title, message, lati, long) VALUES ($1, CURRENT_TIMESTAMP, $2, $3, $4, $5);";
  const params = [userId, title, message, lati, long]; 
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(204).json({ message: "success!" });
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
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.find = (req, res) => {
  console.log("Get a post!");
  const query = "SELECT * FROM post WHERE id = $1;";
  const params = [req.params.id];
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.update = (req, res) => {
  console.log("Update!");
  const { message, id } = req.body;
  const query = "UPDATE post SET message = $1 WHERE id = $2;";
  const params = [ message, id ]; 
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(204).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
exports.delete = (req, res) => {
  console.log("Delete!");
  const { title, ID } = req.body;
  const query = "DELETE FROM post WHERE title = $1 AND id = $2;";
  const params = [ title, ID ]; 
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(204).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

