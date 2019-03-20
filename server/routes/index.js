const UserRouter = require('./users');
const PostRouter = require('./posts');
const CommentRouter = require('./comments');
const LoginRouter = require('./login');

module.exports = (app) => {
  app.use('/login', LoginRouter);
  app.use('/users', UserRouter);
  app.use('/posts', PostRouter);
  app.use('/comments', CommentRouter);
};
