const LocalStrategy = require('passport-local').Strategy;

const db = require('../../db');
const CryptUtil = require('../../util').crypt;
const config = require('../../config');

module.exports = passport => {
  passport.use(new LocalStrategy(config.passport.local, (username, password, done) => {
    const query = 'SELECT id, username, email, password, first_name, last_name, picture FROM users WHERE username = $1';
    const params = [ username ];

    db.one(query, params)
      .then(async user => {
        const isValidPassword = await CryptUtil.comparePassword(password, user.password);
        if (!user || !isValidPassword) {
          return done({ message: "Incorrect login" }, false);
        } else {
          // Don't want to send back password, even though it's encrypted.
          console.log(user);
          delete user.password;
          return done(null, user);
        }
      });
  }));
};
