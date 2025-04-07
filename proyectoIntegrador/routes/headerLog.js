var express = require('express');
var router = express.Router();
var headerlogController = require('../controllers/headlogController');

router.get('/headerLogueado', headerlogController.log);
module.exports = router;