const router = require('express-promise-router')();

const FollowController = require('../controllers/follow.js');

router.route('/')
  .post(FollowController.create)
  .delete(FollowController.delete);

router.route('/:follower')
  .get(FollowController.follow);

router.route('/:leader')
  .get(FollowController.lead);

module.exports = router;

