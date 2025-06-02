const base = require(`../db/modulo`)
const db = require('../database/models')
producto = base.productos
const mainController={
    index: function (req, res) {
        include:[{association:"user"}]
        res.render('index', {productos:db.Producto});
    }
}
module.exports = mainController;
