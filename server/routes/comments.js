const router = require('express-promise-router')();

const CommentController = require('../controllers/comments.js');

router.route('/')
  .get(CommentController.list)
  .post(CommentController.create)
  .patch(CommentController.update)
  .delete(CommentController.delete);

router.route('/:id')
  .get(CommentController.find);

module.exports = router;

