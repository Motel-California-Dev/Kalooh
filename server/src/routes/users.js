const router = require('express-promise-router')();

const passport = require('../auth/passport');
const { UserController } = require('../controllers');

router.route('/')
  .get(UserController.list)
  .post(UserController.create)
  .delete(UserController.delete);

router.route('/:id')
  .get(UserController.find)
  .patch(UserController.update);

module.exports = router;

