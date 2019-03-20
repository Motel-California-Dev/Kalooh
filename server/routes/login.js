const router = require('express-promise-router')();

const CommentController = require('../controllers/login.js');

router.route('/')
  .post(CommentController.login);

module.exports = router;

