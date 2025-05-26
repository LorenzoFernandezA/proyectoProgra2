var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.post('/login', userController.login);
router.get('/formlogin', userController.formLogin);

router.get('/register', userController.register);
router.post('/newuser', userController.create);

router.get('/user', userController.profile);
router.get('/logout', userController.logout);

module.exports = router;