const Utils = require('../util'); 

const config = {
  development: {
    db: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      name: process.env.POSTGRES_DB,
      pgpOptions: {
        receive: Utils.db.camelizeColumns
      }
    },
    session: {
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    }
  },
  testing: {

  }, 
  staging: {

  },
  production: {
    session: {
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: true
      }
    }
  }
};

let exportedConfig = {};

switch(process.env.NODE_ENV) {
  case 'development': 
    exportedConfig = config.development;
    break;
  case 'testing':
    exportedConfig = Utils.config.merge(config.testing, config.development);
    break;
  case 'staging':
    exportedConfig = Utils.config.merge(config.staging, config.development);
    break;
  case 'production':
    exportedConfig = Utils.config.merge(config.production, config.development);
    break;
}

module.exports = exportedConfig;

