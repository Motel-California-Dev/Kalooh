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
        usernameField: 'userName',
        passwordField: 'password'
      },
      jwt: {
        jwtFromRequest: ExtractJwt.fromBodyField('token'),
        secretOrKey: process.env.JWT_SECRET,
        tokenBodyField: "token"
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

