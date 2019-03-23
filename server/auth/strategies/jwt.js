const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require('../../db');
const config = require('../../config');

module.exports = passport => {
  passport.use(new JwtStrategy(config.passport.jwt, (payload, done) => {
    if (payload.user) {
      return done(null, payload.user);
    } else {
      return done(null, false);
    }
  }));
};

