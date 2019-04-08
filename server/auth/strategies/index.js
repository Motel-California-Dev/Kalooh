const local = require('./local');
const jwt = require('./jwt');

const initStrategies = passport => {
  local(passport);
  jwt(passport);
};

module.exports = {
  initStrategies
};

