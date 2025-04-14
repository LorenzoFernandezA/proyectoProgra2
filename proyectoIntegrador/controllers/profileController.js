const usuario = require('../db/modulo')
info = usuario.usuario
const producto = usuario.productos


const profileController = {


    profile: function(req, res) {
        res.render('profile', {info, producto});
    }
}

module.exports = profileController;