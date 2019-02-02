const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB
});

pool.on('connect', () => {
  console.log("DB connected!");
});

pool.on('error', () => {
  console.log("some error");
});

function query (text, params) {
  return pool.query(text, params);
}

module.exports = {
  query
};

