const passport = require('passport');

const db = require('../db');

const login = (req, res, next) => {
  passport.authenticate('local');
};

module.exports = {
  login
};

