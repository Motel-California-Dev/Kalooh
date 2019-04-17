const router = require('express-promise-router')();

const AuthController = require('../controllers/auth.js');
const passport = require('../auth/passport');

router.route('/login')
  .post(passport.authenticate('local', { session: false }), AuthController.login);

module.exports = router;
