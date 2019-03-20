const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { username, firstName, lastName, email, password } = req.body;
  const query = "INSERT INTO users (user_name, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5);";
  const params = [username, firstName, lastName, email, password]; 
  db.none(query, params)
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
  const query = "SELECT * FROM users;";
  db.many(query)
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
  console.log("Get a user!");
  const query = "SELECT first_name, last_name, email, password FROM users WHERE id = $1;";
  const params = [req.params.id];
  db.one(query, params)
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
  const { id, password, newPass } = req.body;
  const query = "UPDATE users SET password = $3 WHERE id = $1 AND password = $2;";
  const params = [id, password, newPass]; 
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
  const { id, password } = req.body;
  const query = "DELETE FROM users WHERE id = $1 AND password = $2;";
  const params = [id, password]; 
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
