const dato = require('../db/modulo')
const db = require('../database/models');
const { create } = require('./userController');
const productosDatabase = db.Producto;
const op = db.Sequelize.Op;
const productController = {
    producto: function (req, res) {
        const producto = dato.productos[1]
        res.render('product', {
            producto: producto,
    })},
        
    showFormAdd: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }
        return res.render('product-add');
    },

    add: function (req, res) {
        if(!req.session.user){
            return res.redirect('/users/login');
        }
        res.render('product-add', {});
    },
    
    
    buscar: function (req, res) {
        const buscar= req.query.search;

        console.log(buscar);
        

        productosDatabase.findAll({
            where: {
                nombre: {[op.like]: `%${buscar}%`}},
                include : [{association: "user"}],
        }).then(function(resultado){
            console.log(resultado);    
            return res.render('search-results', {producto: resultado});
        }).catch(function(error){
            console.log(error);
            
            return res.send(error);
            })
    },

    productAdd : function(req, res){
        if(!req.session.user){
            return res.redirect('/users/login');
        }
        const productNew = req.body;
        if (productNew.imagen == ''){
            return res.send("Debe insertar la url de la imagen del producto agregado");
        }else if (productNew.name == ""){
            return res.send("Debe insertar el nombre del producto agregado");
        }else if(productNew.descripcion == ""){
            return res.send("Debe agregar una descripcion sobre el producto agregado");
        }

        const nuevoProducto = {
            imagen: productNew.imagen,
            nombre: productNew.nombre,
            descripcion: productNew.descripcion,
            usuarioId: req.session.user.id 
        };

        productosDatabase.create(nuevoProducto)
        .then(function() {
                return res.redirect('/products');
            })
            .catch(function(error) {
                console.log(error);
                return res.send('Error al crear el producto');
            });

        }
    
}
module.exports = productController;