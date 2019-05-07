const router = require('express-promise-router')();

const PostTagController = require('../controllers/posts_tag.js');

router.route('/')
  .post(PostTagController.create)
  .delete(PostTagController.delete);

router.route('/:id')
  .delete(PostController.deleteAll);
  .get(PostTagController.get)

module.exports = router;

