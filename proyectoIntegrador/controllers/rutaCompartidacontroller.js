const {where} = require("sequelize");
let db = require("../database/models");
let bcrypt = require ('bcryptjs');


const rutaCompartidacontroller={
    login:function(req,res){
        const email = req.body.email;
        const password = req.body.password;

        db.user.findOne({where:{email}
        }).then(function(resultado){
            if(resultado==null){
                return res.send("El usuario no existe")
            }else{return res.redirect("/")}

        })
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
         )},
        

    logout:function(req,res){
        req.session.destroy();
        res.clearCookie('nombre de la cookie');
         return res.redirect('/login');
        }
    }

module.exports = rutaCompartidacontroller;