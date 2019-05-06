const FacebookStrategy = require('passport-facebook').Strategy;

const config = require('../../config');

module.exports = (passport) => {
  passport.use(new FacebookStrategy(config.passport.facebook, async (req, accessToken, refreshToken, profile, cb) => {
    console.log(profile);

    if (!profile.emails && !profile.email) {
      return cb({ message: 'No valid email found for the corresponding Facebook account'}, null);
    };

    req.body = { 
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      picture: profile.photos[0].value
    };

    return cb(null, req);
  }));
};

