const LocalStrategy = require('passport-local').Strategy;

const db = require('../../db');
const CryptUtil = require('../cryptUtil');

module.exports = passport => {
  const options = {
    usernameField: 'userName',
    passwordField: 'password'
  };

  passport.use(new LocalStrategy(options, (username, password, done) => {
    console.log("lcoalstrategyl");
    const query = 'SELECT user_name, password FROM users WHERE user_name = $1';
    const params = [ username ];
    db.one(query, params)
      .then(data => {
        if (!data) {
          console.log("def no");
          // Username not found
          return done({ message: "User not found." }, false);
        } else if (!CryptUtil.comparePassword(password, data.password)) {
          console.log("No");
          // User found, password doesn't match; Consider change "false" to something more informative
          return done({ message: "Password does not match." }, false);
        } else {
          console.log("very yes");
          // Successful login
          return done(null, user);
        }
      });
  }));
};
