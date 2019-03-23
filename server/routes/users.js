const router = require('express-promise-router')();

const passport = require('../auth/passport');
const UserController = require('../controllers/users.js');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), UserController.list)
  .post(UserController.create)
  .delete(passport.authenticate('jwt', { session: false }), UserController.delete);

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), UserController.find)
  .patch(passport.authenticate('jwt', { session: false }), UserController.update);

module.exports = router;

