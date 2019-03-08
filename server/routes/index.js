const router = require('express-promise-router')();

const UserController = require('../controllers/userController.js');

router.get('/', UserController.list);
router.post('/user', UserController.create);
router.get('/user/:username', UserController.find);

module.exports = (app) => {
  app.use('/', router);
  app.use('/user', router);
};
