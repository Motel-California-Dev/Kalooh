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

exports.list = (req, res) => {
  console.log("Get!");
  const { username, password } = req.body;
  const query = "SELECT user_name, firstName, lastName, email, password FROM USERS WHERE user_name = $1 AND password = $2;";
  const params = [username, password]; 
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


exports.update = (req, res) => {
  console.log("Update!");
  const { username, password, newPass } = req.body;
  const query = "UPDATE users SET password = $3 WHERE user_name = $1;";
  const params = [username, password, newPass]; 
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



// callback
db.query('SELECT NOW() as now', (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
})

// promise
db.query('SELECT NOW() as now')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))
