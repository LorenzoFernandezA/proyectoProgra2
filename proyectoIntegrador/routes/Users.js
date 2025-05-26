var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.get('/login', userController.login);
router.get('/newuser', userController.create);
router.get('/user', userController.profile);
router.get('/logout', userController.logout);

module.exports = router;