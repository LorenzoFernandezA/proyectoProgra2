const usuario = require('../db/modulo')
info = usuario.usuario
const producto = usuario.productos
const {where} = require("sequelize");
let db = require("../database/models");
let bcrypt = require ('bcryptjs');

const userController = {
    profile: function(req, res) {
        res.render('profile', {info, producto});
    },
    formLogin: function(req, res) {
        res.render('login', {info, producto});
    },
    login:function(req,res){
            const email = req.body.email;
         
            const recordarme = req.body.recordarme
    
            db.user.findOne({where:{email}
            }).then(function(resultado){
                if (resultado == null){
                    return res.send("El usuario no existe");
                }
        
                let chek = bcrypt.compareSync(req.body.password, resultado.password);
                console.log(chek);
                if(chek){

                    req.session.userLogged = resultado
                    res.redirect("/")
                } else {
                    res.send("La contraseña no coincide");
                }
            })
           
                if(recordarme){
                    res.cookie("recordar", 'recordarme',{maxAge: 1000 * 60 * 5})
                }
            

    },

        register: function(req, res) {
            res.render('register', {info, producto});
        },
        create:function(req,res){
            const email = req.body.email;
            const password = req.body.password;
    
            let passworEncriptada=bcrypt.hashSync(password,10);
    
            db.user.findeOne({where:{email}
            }).then(function(resultado){
                if(resultado){
                    return res.send("El usuario ya existe")
                }else if (resultado == null){
                    return res.send("Compelta el campo")
    
                }else if (password.length < 3){
                    return res.send('Contraseña debe tener mas de 3 caracteres')
                }else{
                    return res.redirect("/")
                }
            
            })
                db.user.create({
                name: usuario,
                email: email,
                password: passworEncriptada
                }
             )},
            
    
        logout:function(req,res){
            req.session.destroy();
            res.clearCookie('recordarme');
             return res.redirect('/');
            }
        }

module.exports = userController;