var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController');

router.get('/searchResults', searchController.resultados);
module.exports = router;