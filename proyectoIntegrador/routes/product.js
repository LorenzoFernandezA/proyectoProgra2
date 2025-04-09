var express = require('express');
var router = express.Router();
var productController= require('../controllers/productController');

router.get('/productos', productController.producto);
router.get('/add', productController.add);

module.exports = router;