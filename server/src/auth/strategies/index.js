const local = require('./local');
const jwt = require('./jwt');
const google = require('./google');
const facebook = require('./facebook');

const initStrategies = passport => {
  local(passport);
  jwt(passport);
  google(passport);
  facebook(passport);
};

module.exports = {
  initStrategies
};

