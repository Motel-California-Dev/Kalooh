const LocalStrategy = require('passport-local').Strategy;

const db = require('../../db');
const CryptUtil = require('../cryptUtil');
const config = require('../../config');

module.exports = passport => {
  passport.use(new LocalStrategy(config.passport.local, (userName, password, done) => {
    const query = 'SELECT user_name, email, password FROM users WHERE user_name = $1';
    const params = [ userName ];
    db.one(query, params)
      .then(async user => {
        if (!user || !(await CryptUtil.comparePassword(password, user.password))) {
          return done({ message: "Incorrect login" }, false);
        } else {
          // Don't want to send back password, even though it's encrypted.
          console.log(user);
          delete user.password;
          console.log(done);
          return done(null, user);
        }
      });
  }));
};
