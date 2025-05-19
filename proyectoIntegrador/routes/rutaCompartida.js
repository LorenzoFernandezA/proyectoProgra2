var express = require('express');
var router = express.Router();
var rutaCompartidacontroller = require('../controllers/rutaCompartidacontroller');

router.get('/register', rutaCompartidacontroller.register);
router.get('/login', rutaCompartidacontroller.login);
router.get('/newuser', rutaCompartidacontroller.create)

module.exports = router;