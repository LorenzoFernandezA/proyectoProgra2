const dato = require('../db/modulo')
const db = require('../database/models');
const productosDatabase = db.Producto;
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
        const buscar= req.query.search;

        productosDatabase.findAll({
            where: {
                nombre: {[op.like]: `%${buscar}%`}},
                include : [{association: "user"}],
        }).then(function(resultado){
            return res.render('search-results', {producto: resultado});
        }).catch(function(error){
                return res.send(error);
            })
    },

    productAdd : function(req, res){
        const productNew = req.body;
        if (productNew.imagen == ''){
            return res.send("Debe insertar la url de la imagen del producto agregado");
        }else if (productNew.name == ""){
            return res.send("Debe insertar el nombre del producto agregado");
        }else if(productNew.descripcion == ""){
            return res.send("Debe agregar una descripcion sobre el producto agregado");
        }
        }
    
}
module.exports = productController;