const productController = {
    producto: function (req, res) {
        res.render('product', {});
    },
    add: function (req, res) {
        res.render('product-add', {});
    },
    buscar: function (req, res) {
        res.render('search-results', {});
    },
}
module.exports = productController;