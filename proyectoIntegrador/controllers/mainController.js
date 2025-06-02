const db = require('../database/models')

const mainController = {
    index: function (req, res) {

        db.Producto.findAll({
            include: [{ association: "user" }]
        })
            .then(function (productos) {
                res.render('index', { productos: productos });
            })
    }
}
module.exports = mainController;
