const merge = require('lodash.merge');
const ExtractJwt = require('passport-jwt').ExtractJwt;

const DbUtil = require('../util').db; 

const config = {
  development: {
    db: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      name: process.env.POSTGRES_DB,
      pgpOptions: {
        receive: DbUtil.camelizeColumns
      }
    },
    session: {
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    },
    passport: {
      local: {
        usernameField: 'username',
        passwordField: 'password'
      },
      jwt: {
        jwtFromRequest: ExtractJwt.fromExtractors([
          ExtractJwt.fromBodyField('token'), 
          ExtractJwt.fromAuthHeaderAsBearerToken()
        ]),
        secretOrKey: process.env.JWT_SECRET,
        tokenBodyField: "token"
      },
      google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback: true
      },
      facebook: {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        passReqToCallback: true,
        profileFields: ['displayName', 'picture', 'emails', 'first_name', 'last_name']
      }
    }
  },
  testing: {

  }, 
  staging: {

  },
  production: {
    session: {
      cookie: {
        httpOnly: true,
        secure: true
      }
    }
  }
};

const exportedConfig = merge(config.development, config[process.env.NODE_ENV]);

module.exports = exportedConfig;

