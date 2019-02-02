const db = require('../db');

exports.create = (req, res) => {
  console.log("Post!");
  db.query("INSERT INTO \"user\" (name) VALUES ('bob');")
    .then(data => {
      console.log(data.rows);
      res.status(200).send(data.rows);
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
  db.query('SELECT * FROM "user"')
    .then(data => {
      console.log(data);
      res.status(200).send(data.rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

