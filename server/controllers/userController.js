const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  const { username, firstName, lastName, email, password } = req.body;
  const query = "INSERT INTO users (user_name, firstName, lastName, email, password) VALUES ($1, $2, $3, $4, $5);";
  const params = [username, firstName, lastName, email, password]; 
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

// TODO
exports.find = () => {
  console.log("Find!");
  // db.query()
  //  .then()
  //  .catch()
};

exports.list = (req, res) => {
  db.query('SELECT * FROM users')
    .then(data => {
      console.log(data);
      res.status(200).send(data.rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

