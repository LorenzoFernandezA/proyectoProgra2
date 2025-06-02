const base = require(`../db/modulo`)
const db = require('../database/models')
producto = base.productos
const mainController={
    index: function (req, res) {
        db.Producto.findAll({
            include:[{association:"user"}]
        }).then(function(productos){
            res.render('index', {productos:productos});
        })}}
module.exports = mainController;
