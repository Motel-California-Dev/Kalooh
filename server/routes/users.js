const router = require('express-promise-router')();

const UserController = require('../controllers/users.js');

router.route('/')
  .get(UserController.list)
  .post(UserController.create);

router.route('/:username')
  .get(UserController.find);

module.exports = router;

