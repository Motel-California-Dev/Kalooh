const LocalStrategy = require('passport-local').Strategy;

const db = require('../../db');
const CryptUtil = require('../cryptUtil');

module.exports = passport => {
  const options = {
    usernameField: 'userName',
    passwordField: 'password'
  };

  passport.use(new LocalStrategy(options, (userName, password, done) => {
    const query = 'SELECT * FROM users WHERE user_name = $1';
    const params = [ userName ];
    db.one(query, params)
      .then(async user => {
        if (!user) {
          return done({ message: "User not found." }, false);
        } else if (!(await CryptUtil.comparePassword(password, user.password))) {
          return done({ message: "Password does not match." }, false);
        } else {
          // Don't want to send back password, even though it's encrypted.
          delete user.password;
          return done(null, user);
        }
      });
  }));
};
