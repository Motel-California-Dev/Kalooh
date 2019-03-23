const passport = require('passport');
const jwt = require('jsonwebtoken');

const db = require('../db');
const config = require('../config');

const login = (req, res) => {
  const { user } = req;
  const token = jwt.sign({ user }, config.passport.jwt.secretOrKey);

  return res.json(token);
};

module.exports = {
  login
};

