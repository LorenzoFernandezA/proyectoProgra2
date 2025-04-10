const usuario = require('../db/modulo')
info = usuario.usuario

const profileController = {


    profile: function(req, res) {
        res.render('profile', {info});
    }
}

module.exports = profileController;