const UserController = require('./users');
const PostsController = require('./posts');
const CommentsController = require('./comments');
const AuthController = require('./auth');
const SettingsController = require('./settings');
const FollowersController = require('./followers');

module.exports = {
  UserController,
  PostsController,
  CommentsController,
  AuthController,
  SettingsController,
  FollowersController
};

