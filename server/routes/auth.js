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

let redirect;
router.route('/google')
  .get((req, res, next) => {
    console.log(req.query);
    redirect = req.query.redirect_uri;
    console.log(redirect);
    next();
  }, passport.authenticate('google', {
    scope: [
      'email',
      'profile'
    ],
    session: false
  }));

router.route('/google/callback')
  .get((req, res, next) => {
    console.log('does it still exist');
    console.log(redirect);
    next();
  },passport.authenticate('google', {
    successRedirect: '/auth/google/redirect',
      failureRedirect: '/',
      session: false
    }));

router.route('/google/redirect')
  .get((req, res, next) => {
    console.log('yeetredirect');
    return res.redirect(redirect);
  });

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

