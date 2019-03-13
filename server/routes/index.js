const UserRouter = require('./users');
const PostRouter = require('./posts');

module.exports = (app) => {
  app.use('/users', UserRouter);
  app.use('/posts', PostRouter);
};
