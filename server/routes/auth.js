const router = require('express-promise-router')();

const AuthController = require('../controllers/auth.js');
const passport = require('../auth/passport');

router.route('/login')
  .post(AuthController.login, AuthController.returnToken);

module.exports = router;

