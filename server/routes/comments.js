const router = require('express-promise-router')({ mergeParams: true });

const CommentController = require('../controllers/comments.js');

router.route('/')
  .get(CommentController.list)
  .post(CommentController.create);

router.route('/:id')
  .get(CommentController.find)
  .patch(CommentController.update)
  .delete(CommentController.delete);

module.exports = router;

