
let db = require("../database/models");

let bcrypt = require('bcryptjs');

const userController = {

    profile: function (req, res) {
       if (req.session.userLogged == undefined) {
        return res.redirect('/users/formlogin')
       }else{
        db.User.findByPk(req.params.id, {
            include:[
                {association:'comentarios',},
                {association:'productos'}
            ]
        }).then(function(resultado){
            res.render('profile', {informacion:resultado})
            })
        }
    },

    formLogin: function (req, res) {
        res.render('login');
    },

    login: function (req, res) {
        const mail = req.body.gmail;
        const password=req.body.password
        const recordarme = req.body.recordarme;

        db.User.findOne({
            where: { mail }
        }).then(function (resultado) {
            console.log(resultado);
            
            if (resultado == null) {
                return res.send("El usuario no existe");
            }
            let chek = bcrypt.compareSync(password, resultado.contrasena);
            console.log(chek);

            if(chek) {
                req.session.userLogged = resultado
                if (recordarme) {
                    res.cookie("acordarse", resultado.id, { maxAge: 1000 * 60 * 60 });
                }
                return res.redirect("/")
            }else {
                res.send("La contraseña no coincide");
            }
        })
      

        


    },

    register: function (req, res) {
        res.render('register');
    },

    create: function (req, res) {
        const mail = req.body.email;
        const password = req.body.password;
        const usuario = req.body.usuario;
        const fecha=req.body.birthdate
    
        
        if (password.length < 3){
            res.send('la contrasena debe ser mayor a 3 caracteres')
        }
        let passwordEncriptada = bcrypt.hashSync(password, 10);


        db.User.create({
        usuario:   usuario,
        mail:      mail,
        contrasena: passwordEncriptada,
        fecha:     fecha,
    })
    .then(function(usuarioCreado) {
        return res.redirect('/users/formLogin');
    })

     },

    logout: function (req, res) {
        req.session.destroy();
        if (req.cookies.recordar) {
            res.clearCookie("recordar");
        }
}

}





module.exports = userController;