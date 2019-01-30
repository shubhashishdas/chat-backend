var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.use(function (req, res, next) {
  console.log("---------------------In User route file--------------------");
  next();
})
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ title: 'Working' });
});

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.get('/profile', UserController.getProfile);
router.post('/updateProfile', UserController.updateProfile);
router.get('/getRequests', UserController.getRequests);
router.get('/acceptRequests/:id', UserController.acceptRequests);
router.get('/getChatList', UserController.getChatList);
router.get('/chat/:id', UserController.getChat);

module.exports = router;
