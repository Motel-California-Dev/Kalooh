const db = require('../db');
const Utils = require('../util');

exports.create = async (user) => {
  const { username, firstName, lastName, email, password } = user;

  const hashedPassword = Utils.crypt.getPasswordHash(password);

  const query = `INSERT INTO users (username, first_name, last_name, email, password, created_at) 
    VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
    RETURNING id, username, first_name, last_name, email, picture;`;
  const params = [ username, firstName, lastName, email, hashedPassword ];
  try {
    const data = await db.one(query, params);
    return data;
  } catch (err) {
    console.log(err);
    // TODO: Temp message
    return { message: 'Failed to create user' };
  }
};

exports.find = async (identifier) => {
  const { id, username } = identifier;
  const query = `SELECT id, username, first_name, last_name, email FROM users
    WHERE
      ($1 IS NULL OR id = $1)
    AND
      ($2 IS NULL OR username = $2)
  ;`;
  const params = [ id, username ];

  try {
    const data = await db.one(query, params);
    return data;
  } catch (err) {
    // TODO: Temp message
    console.log(err);
    return { message: 'User not found' };
  }
};

exports.delete = async (id) => {
  const query = `DELETE FROM users WHERE id = $1`;
  const params = [ id ];
  try {
    await db.none(query, params);
    return { message: 'Successfully deleted user' };
  } catch (err) {
    console.log(err);
    return { message: 'User not found' };
  }
};

