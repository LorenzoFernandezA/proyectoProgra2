var express = require('express');
var router = express.Router();
var rutaCompartidacontroller = require('../controllers/rutaCompartidacontroller');

router.get('/login', rutaCompartidacontroller.login);
router.get('/newuser', rutaCompartidacontroller.create)
router.get('/logout', rutaCompartidacontroller.logout);

module.exports = router;