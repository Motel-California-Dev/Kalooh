const { Pool } = require('pg');
const pgPromise = require('pg-promise');

const initOptions = {
  receive: (data, result, e) => {
    camelizeColumns(data);
  }
};

const camelizeColumns = data => {
  const template = data[0];
  for (let prop in template) {
    const camel = pgPromise.utils.camelize(prop);
    if (!(camel in template)) {
      for (let i = 0; i < data.length; i++) {
        let d = data[i];
        d[camel] = d[prop];
        delete d[prop];
      }
    }
  }
};

const pgp = pgPromise(initOptions);
const connection = `${process.env.POSTGRES_HOST}://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
const db = pgp(connection);

module.exports = db;

