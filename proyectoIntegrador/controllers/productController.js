const dato = require('../db/modulo')
const db = require('../database/models');
const { create } = require('./userController');
const productosDatabase = db.Producto;
const op = db.Sequelize.Op;
const productController = {
    producto: function (req, res) {
    db.Producto.findByPk(req.params.id, {
        include: [
            { association: "user" },
            { association: "comentarios", include: [{ association: "user" }] }
        ]
    })
    .then(function(producto) {
        res.render('product', { producto: producto });
    })
},

    showFormAdd: function (req, res) {
        if (req.session.userLogged== undefined) {
            return res.redirect('/users/login');
        }
        return res.render('product-add');
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
        productosDatabase.create({
            nombreArchivoFoto: req.body.imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            idUsuario: req.session.userLogged.id 
        })
        .then(function() {
            res.redirect('/');
        }).catch(function(error) {
            console.log(error);
        })
    
},
    comentarioA:function(req, res){
        
        db.Comentario.create({
            texto: req.body.comentario,
            producto_id: req.params.id,
            user_id: req.session.userLogged.id
        })
        .then(function() {
            res.redirect(`/productos/detalle/${req.params.id}`);
        }).catch(function(error) {
            console.log(error);
        })
    }
}

module.exports = productController;