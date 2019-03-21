const router = require('express-promise-router')();

const AuthController = require('../controllers/auth.js');
const passport = require('../auth/passport');

router.route('/login')
  .post(passport.authenticate('local'), (req, res) => {
    console.log(req);
    res.send(req);
  });

module.exports = router;

