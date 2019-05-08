const router = require('express-promise-router')();

const PostController = require('../controllers/posts.js');

router.route('/')
  .get(PostController.list)
  .post(PostController.create)

router.route('/:id')
  .get(PostController.find)
  .patch(PostController.update)
  .delete(PostController.delete);

module.exports = router;

