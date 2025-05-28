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
            const mail = req.body.email;
            const recordarme = req.body.recordarme;
    
            db.User.findOne({where:{mail}
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
        const mail = req.body.email;
        const password = req.body.password;
        const usuario = req.body.usario;
    
        let passworEncriptada=bcrypt.hashSync(password,10);
    
        db.User.findOne({where:{mail}
        }).then(function(resultado){
            if(resultado){
                return res.send("El usuario ya existe")
            }else if (resultado == null){
                return res.send("Compelta el campo")
            }else if (password.length < 3){
                return res.send('Contraseña debe tener mas de 3 caracteres')
            }else{
                db.User.create({
                name: usuario,
                email: mail,
                password: passworEncriptada})
            return res.redirect("/")
                }
        })},
            logout:function(req,res){
                req.session.destroy();
                res.clearCookie('recordarme');
                return res.redirect('/');
            }
                }
            
    



module.exports = userController;