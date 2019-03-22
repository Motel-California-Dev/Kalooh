const pgPromise = require('pg-promise');

const config = require('../config');

const pgp = pgPromise(config.db.pgpOptions);
const connection = `${config.db.host}://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`;
const db = pgp(connection);

module.exports = db;

