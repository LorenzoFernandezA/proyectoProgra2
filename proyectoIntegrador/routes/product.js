var express = require('express');
var router = express.Router();
var productController= require('../controllers/productController');

router.get('/productos', productController.producto);
module.exports = router;