const local = require('./local');

const strategies = {
  local
};

const initStrategies = passport => {
  local(passport);
};

module.exports = {
  initStrategies
};

