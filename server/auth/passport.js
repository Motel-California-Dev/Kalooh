const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Strategies = require('./strategies');
const db = require('../db');

Strategies.initStrategies(passport);

passport.serializeUser((user, done) => {
  done(null, user.id); 
});

passport.deserializeUser((id, done) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const params = [ id ];
  db.one(query, params)
    .then(data => {
      done(null, data);
    })
    .catch(err => {
      done(err, null); 
    });
});

module.exports = passport;

