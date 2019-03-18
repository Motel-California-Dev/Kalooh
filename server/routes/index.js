const UserRouter = require('./users');
const PostRouter = require('./posts');
const CommentRouter = require('./comments');

module.exports = (app) => {
  app.use('/users', UserRouter);
  app.use('/posts', PostRouter);
  app.use('/comments', CommentRouter);
};
