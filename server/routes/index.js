const UserRouter = require('./users');
const PostRouter = require('./posts');
const CommentRouter = require('./comments');
const AuthRouter = require('./auth');

module.exports = (app) => {
  app.use('/auth', AuthRouter);
  app.use('/users', UserRouter);
  PostRouter.use('/:postId/comments', CommentRouter);
  app.use('/posts', PostRouter);
  app.use('/comments', CommentRouter);
};
