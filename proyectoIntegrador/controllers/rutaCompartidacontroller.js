const rutaCompartidaController={
    register:function(req,res){
        res.render('rutaCompartidaRegister', { });
    },
    login:function(req,res){
        res.render('rutaCompartidaLogin', { });
    },
    add:function(req,res){
        res.render('rutaCompartidaAdd', { });
    }
}

module.exports = rutaCompartidaController