var express = require('express');
var router = express.Router();
var rutaCompartidaController = require('../controllers/rutaCompartidaController');

router.get('/register', rutaCompartidaController.register);
router.get('/login', rutaCompartidaController.login);


module.exports = router;