const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { postId, userId, text } = req.body;
  const query = "INSERT INTO comment (post_id, user_id, created_at, text) VALUES ($1, $2, CURRENT_TIMESTAMP, $3);";
  const params = [postId, userId, text]; 
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
  const query = "SELECT * FROM comment;";
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
  const query = "SELECT * FROM comment WHERE id = $1;";
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
  const { text, postid, username } = req.body;
  const query = "UPDATE comment SET text = $1 WHERE post_id = $2 AND user_id = $3;";
  const params = [ text, postid, userid ]; 
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
  const query = "DELETE FROM comment WHERE id = $1;";
  const params = [ ID ]; 
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

