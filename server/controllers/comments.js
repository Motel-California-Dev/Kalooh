const config = require('../config');
const pgp = require('pg-promise')(config.db.pgpOptions);
const snakeCase = require('snake-case');

const db = require('../db');
const Utils = require('../util');

exports.create = (req, res) => {
  console.log("Post!");
  const { userId, text } = req.body;
  const { postId } = req.params;
  const query = "INSERT INTO comment (post_id, user_id, created_at, text, likes) VALUES ($1, $2, CURRENT_TIMESTAMP, $3, 0);";
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
  const query = "SELECT * FROM comment WHERE post_id=$1;";
  const params = [ req.params.postId ];
  console.log(params);
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
  const { id } = req.params;

  const snakeCasedObject = Utils.db.snakifyColumns(req.body);
  const cs = new pgp.helpers.ColumnSet(Object.keys(snakeCasedObject), { table: 'comments' });
  const query = pgp.helpers.update(snakeCasedObject, cs) + ' WHERE id = $1';

  const params = [ id ];
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

