const productController = {
    producto: function (req, res) {
        res.render('product', {});
    },
    add: function (req, res) {
        res.render('product-add', {});
    }
};
module.exports = productController;