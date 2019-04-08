const UserRouter = require('./users');
const PostRouter = require('./posts');
const CommentRouter = require('./comments');
const AuthRouter = require('./auth');

module.exports = (app) => {
  app.use('/auth', AuthRouter);
  app.use('/users', UserRouter);
  app.use('/posts', PostRouter);
  app.use('/comments', CommentRouter);
  app.use('/settings', CommentRouter);
};
