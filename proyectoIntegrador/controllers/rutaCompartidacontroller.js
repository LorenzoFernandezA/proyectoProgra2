const {where} = require("sequelize");
let db = require("../database/models");
let bcrypt = require ('bcryptjs');


const rutaCompartidacontroller={
    register:function(req,res){
        res.render('register', { });
    },
    login:function(req,res){
        res.render('login', { });
    },
    create:function(req,res){
        const usuario = req.body.usuario;
        const email = req.body.email;
        const password = req.body.password;

        let passworEncriptada=bcrypt.hashSync(password,10);

        db.user.findeOne({where:{email}
        }).then(function(resultado){
            if(resultado){
                return res.send("El usuario ya existe")
            }else if (resultado == null){
                return res.send("El usuario no existe")
            }else{
                return res.redirect("/")
            }
        
        })
            db.user.create({
            name: usuario,
            email: email,
            password: passworEncriptada
            }
         )}
        }


module.exports = rutaCompartidacontroller;