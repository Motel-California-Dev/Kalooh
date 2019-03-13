const router = require('express-promise-router')();

const PostController = require('../controllers/posts.js');

router.route('/')
  .get(PostController.list)
  .post(PostController.create)
  .patch(PostController.update)
  //.delete(PostController.delete);

router.route('/:Title')
  .get(PostController.find);

module.exports = router;

