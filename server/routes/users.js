const router = require('express-promise-router')();

const passport = require('../auth/passport');
const UserController = require('../controllers/users.js');

router.use(passport.authenticate('jwt', { session: false }));

router.route('/')
  .get(UserController.list)
  .post(UserController.create)
  .patch(UserController.update)
  .delete(UserController.delete);

router.route('/:id')
  .get(UserController.find);

module.exports = router;

