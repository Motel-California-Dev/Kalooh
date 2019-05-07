const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { leader, follower } = req.body;
  const query = "INSERT INTO follow (leader, follower) VALUES ($1, $2);";
  const params = [leader, follower]; 
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

exports.get = (req, res) => {
  console.log("Get!");
  const { id } = req.query;
  const query = "SELECT * FROM follow WHERE post_id = $1;";

  const params = [id]
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

exports.deleteAll = (req, res) => {
  console.log("Delete!");
  const { id } = req.body;
  const query = "DELETE FROM post WHERE post_id = $1;";
  const params = [ leader, follower ]; 
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
  const { id, tag } = req.body;
  const query = "DELETE FROM post WHERE post_id = $1 AND post_tag = $2;";
  const params = [ id, tag ]; 
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
