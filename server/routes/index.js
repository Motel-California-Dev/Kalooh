const UserRouter = require('./users');
const PostRouter = require('./posts');
const CommentRouter = require('./comments');
const AuthRouter = require('./auth');
const SettingsRouter = require('./settings');
const FollowRouter = require('./follow');

module.exports = (app) => {
  app.use('/auth', AuthRouter);
  app.use('/users', UserRouter);
  app.use('/posts', PostRouter);
  app.use('/comments', CommentRouter);
  app.use('/settings', SettingsRouter);
  app.use('/follow', FollowRouter);
};
