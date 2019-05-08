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

exports.lead = (req, res) => {
  console.log("Get!");
  const { leader } = req.query;
  const query = "SELECT * FROM follow WHERE leader = $1;";

  const params = [ leader ]
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

exports.follow = (req, res) => {
  console.log("Get!");
  const { follower } = req.query;
  const query = "SELECT * FROM follow WHERE follower = $1;";

  const params = [ follower ]
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

exports.delete = (req, res) => {
  console.log("Delete!");
  const { leader, follower } = req.body;
  const query = "DELETE FROM post WHERE leader = $1 AND follower = $2;";
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

