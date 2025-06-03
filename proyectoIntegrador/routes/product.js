var express = require('express');
var router = express.Router();
var productController= require('../controllers/productController');

router.get('/detalle/:id?', productController.producto);
router.post('/add', productController.productAdd);
router.get('/agregar',productController.showFormAdd);
router.get('/buscar', productController.buscar);
router.post("/comentario/:id", productController.comentarioA);


module.exports = router;