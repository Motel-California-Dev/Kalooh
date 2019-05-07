const jwt = require('jsonwebtoken');

const config = require('../config');

const returnToken = (req, res) => {
  const { user } = req;
  const token = jwt.sign({ user }, config.passport.jwt.secretOrKey);

  user.token = token;

  return res.json(user);
};

module.exports = {
  returnToken
};

