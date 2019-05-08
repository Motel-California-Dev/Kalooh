const config = require('../config');
const pgp = require('pg-promise')(config.db.pgpOptions);
const snakeCase = require('snake-case');

const db = require('../db');
const Utils = require('../util');

exports.create = async (req, res) => {
  console.log("Post!");
  const { username, firstName, lastName, email, password } = req.body;

  const hashedPassword = await Utils.crypt.getPasswordHash(password);

  const query = "INSERT INTO users (username, first_name, last_name, email, password, created_at) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP) RETURNING username, first_name, last_name, email, picture;";
  const params = [username, firstName, lastName, email, hashedPassword]; 
  db.one(query, params)
    .then(data => {
      return res.status(201).json({ data });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
};

exports.upsert = async (user) => {
  console.log("UPSERT");
  const { firstName, lastName, email, picture } = user;
  const username = `${firstName}.${lastName}`;
  const query = 'INSERT INTO users (username, first_name, last_name, email, created_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) ON CONFLICT ON CONSTRAINT user_email DO UPDATE SET email = $4, picture = $5 RETURNING id, username, first_name, last_name, email, picture;';
  const params = [ username, firstName, lastName, email, picture ];
  return db.one(query, params)
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log('upsert error');
      console.log(err);
      return err;
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

exports.getPost = (req, res) => {
  console.log("Get user post!");
  const { id, userId } = req.params;
  const query = "SELECT * FROM post where id = $1 AND user_id = $2;";
  const params = [id, userId];
  db.one(query, params)
    .then(data => {
      console.log(data);
      return res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err)
    });
}

exports.getAllPosts = (req, res) => {
  console.log("Get all posts by this user!");
  const { userId } = req.params;
  const query = "SELECT * FROM post where user_id = $1;";
  const params = [userId];
  db.many(query, params)
    .then(data => {
      console.log(data);
      return res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err)
    });
}
 
exports.find = (req, res) => {
  console.log("Get a user!");
  const query = `SELECT first_name, last_name, email, password FROM users 
    WHERE 
      ($1 IS NULL OR id = $1)
    AND
      ($2 IS NULL OR username = $2)
  ;`;
  const params = [ req.params.id, req.query.username ];
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
