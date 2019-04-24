const jwt = require('jsonwebtoken');

const passport = require('../auth/passport');
const config = require('../config');

const login = (req, res, next) => {
  const { userName, password, token } = req.body;
  if (token) {
    return passport.authenticate('jwt', { session: false })(req, res, next);
  }
  else if (userName && password) {
    return passport.authenticate('local', { session: false })(req, res, next);
  }
};

const returnToken = (req, res) => {
  const { user } = req;
  const token = jwt.sign({ user }, config.passport.jwt.secretOrKey);

  user.token = token;

  return res.json(user);
};

module.exports = {
  login,
  returnToken
};

