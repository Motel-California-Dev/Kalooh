const UserRouter = require('./users');

module.exports = (app) => {
  app.use('/users', UserRouter);
};
