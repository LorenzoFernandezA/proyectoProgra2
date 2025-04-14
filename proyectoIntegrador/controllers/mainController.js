const base = require(`../db/modulo`)
producto = base.productos
const mainController={
    index: function (req, res) {
        res.render('index', {producto:producto});
    }
}
module.exports = mainController;
