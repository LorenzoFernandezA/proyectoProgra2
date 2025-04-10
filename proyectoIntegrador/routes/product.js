var express = require('express');
var router = express.Router();
var productController= require('../controllers/productController');

router.get('/detalle', productController.producto);
router.get('/add', productController.add);

module.exports = router;