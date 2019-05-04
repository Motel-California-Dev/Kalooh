const GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('../../config');

module.exports = (passport) => {
  passport.use(new GoogleStrategy(config.passport.google, async (req, accessToken, refreshToken, profile, cb) => {
    /*
     * Returns:
     * {
     *  sub: '123091802491203482',
     *  name: 'First Last',
     *  given_name: 'Kyle',
     *  family_name: 'Mazza',
     *  profile: 'https://plus.google.com/1230918etcetc',
     *  picture: 'https://somehostedaddress.com',
     *  email: 'kyleamazza@gmail.com',
     *  locale: 'en'
     * }
     *  
     */
    req.body = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails[0].value,
      picture: profile.photos[0].value
    };

    return cb(null, req);
  }));
};

