const config = require('../config');
const pgp = require('pg-promise')(config.db.pgpOptions);
const snakeCase = require('snake-case');

const db = require('../db');
const Utils = require('../util');

exports.create = async (req, res) => {
  console.log("Post!");
  const { userName, firstName, lastName, email, password } = req.body;

  const hashedPassword = await Utils.crypt.getPasswordHash(password);

  const query = "INSERT INTO users (user_name, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5);";
  const params = [userName, firstName, lastName, email, hashedPassword]; 
  db.none(query, params)
    .then(data => {
      console.log(data);
      return res.status(201).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
};

exports.list = (req, res) => {
  console.log("Get!");
  const query = "SELECT * FROM users;";
  db.many(query)
    .then(data => {
      console.log(data);
      return res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
};
 
exports.find = (req, res) => {
  console.log("Get a user!");
  const query = "SELECT first_name, last_name, email, password FROM users WHERE id = $1;";
  const params = [req.params.id];
  db.one(query, params)
    .then(data => {
      console.log(data);
      return res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
};

exports.update = async (req, res) => {
  console.log("Update!");
  const { id } = req.params;

  if (req.user.id !== id) {
    return res.status(403).send({ message: "Forbidden: You're not authorized to do that, bub." });
  }

  const hashedPassword = await Utils.crypt.getPasswordHash(req.body.password);
  req.body.password = hashedPassword;

  const snakeCasedObject = Utils.db.snakifyColumns(req.body);

  const cs = new pgp.helpers.ColumnSet(Object.keys(snakeCasedObject), { table: 'users' });
  const query = pgp.helpers.update(snakeCasedObject, cs) + ' WHERE id = ' + id;

  db.query(query)
    .then(data => {
      console.log(data);
      return res.status(200).send({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
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
      return res.status(204).json({ message: "success!" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
};
