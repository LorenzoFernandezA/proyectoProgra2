const usuario = require('..db/modulo')

const profileController = {
    profile: function(req, res) {
        const infoUser = usuario.usuario;
        res.render('profile', { 
            title: 'Mi Perfil',
            usuario: infoUser 
        });
    }
}

module.exports = profileController;