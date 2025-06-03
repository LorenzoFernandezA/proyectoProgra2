var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.post('/login', userController.login);
router.get('/formlogin', userController.formLogin);

router.get('/register', userController.register);
router.post('/newuser', userController.create);

router.get('/user/:id', userController.profile);
router.post('/logout', userController.logout);

module.exports = router;