const db = require('../db');

exports.login = (req, res) => {
  console.log("Log in!");
  const query = "SELECT user_name FROM users WHERE user_name = $1 AND password = $2;";
  const params = [req.params.username, req.params.password];
  db.query(query, params)
    .then(data => {
      console.log(data);
      res.status(200).send(data.rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};