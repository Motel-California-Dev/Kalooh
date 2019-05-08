const passport = require('passport');

const Strategies = require('./strategies');
const db = require('../db');

Strategies.initStrategies(passport);

module.exports = passport;

