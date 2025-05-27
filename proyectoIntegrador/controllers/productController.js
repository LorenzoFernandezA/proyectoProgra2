const dato = require('../db/modulo')
const db = require('../database/models');
const producto = db.Producto
const op = db.Sequelize.Op;
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
        const search= req.query.search;

        producto.findAll({
            where: {
                nombre: {[op.like]: `%${search}%`}}
        }).then(function(resultado){
            return res.render('search-results', {producto: resultado});
        }).catch(function(error){
                return res.send(error);
            })
    }
}
module.exports = productController;