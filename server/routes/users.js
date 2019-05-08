const router = require('express-promise-router')();

const passport = require('../auth/passport');
const { FollowersController, UserController } = require('../controllers');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), UserController.list)
  .post(UserController.create)
  .delete(passport.authenticate('jwt', { session: false }), UserController.delete);

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), UserController.find)
  .patch(passport.authenticate('jwt', { session: false }), UserController.update);

router.route('/:id/followers')
  .get(FollowersController.list);

module.exports = router;

