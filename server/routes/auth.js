const router = require('express-promise-router')();

const  { AuthController, UserController } = require('../controllers');
const passport = require('../auth/passport');

router.route('/')
  .get((req, res) => res.send('redirect on failure'));

router.route('/login')
  .post((req, res, next) => 
    req.body.token ?
      passport.authenticate('jwt', { sesssion: false })(req, res, next) :
      passport.authenticate('local', { session: false })(req, res, next), 
    AuthController.returnToken);

router.route('/google')
  .get(passport.authenticate('google', {
    scope: [
      'email',
      'profile'
    ],
    session: false
  }));

router.route('/google/callback')
  .get(passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }), UserController.upsert);

router.route('/facebook')
  .get(passport.authenticate('facebook', { 
    scope: [
      'email'     
    ],
    session: false 
  }));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook', {
    session: false
  }), UserController.upsert);

module.exports = router;

