const router = require('express-promise-router')();

const SettingsController = require('../controllers/settings.js');

router.route('/pass')
  .post(SettingsController.UpdatePass);


router.route('/user')
  .post(SettingsController.UpdateUser);


router.route('/info')
  .post(SettingsController.UpdateInfo);

module.exports = router;

