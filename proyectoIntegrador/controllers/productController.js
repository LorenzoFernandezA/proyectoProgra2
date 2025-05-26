const dato = require('../db/modulo')

const productController = {
    producto: function (req, res) {
        const producto = dato.productos[1]
        res.render('product', {
            producto: producto,
    })},
        
    add: function (req, res) {
        res.render('product-add', {});
    },
    buscar: function (req, res) {
        
        res.render('search-results', {producto: dato.productos});
    }
}
module.exports = productController;