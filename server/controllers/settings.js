const db = require('../db');

exports.updatePassword = (req, res) => {
  console.log("Update!");
  const { id, password, newPass } = req.body;
  const query = "UPDATE users SET password = $3 WHERE ID = $1 AND password = $2;";
  const params = [id, password, newPass]; 
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

exports.updateUser = (req, res) => {
  console.log("Update!");
  const { id, username, newUser } = req.body;
  const query = "UPDATE users SET username = $3 WHERE ID = $1 AND password = $2;";
  const params = [id, username, newUser]; 
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

exports.updateInfo = (req, res) => {
  console.log("Update!");
  const { id, password, newFName, newLName, newEmail } = req.body;
  const query = "UPDATE users SET firstName = $3, lastName = $4, email = $5 WHERE ID = $1 AND password = $2;";
  const params = [id, password, newFName, newLName, newEmail]; 
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
