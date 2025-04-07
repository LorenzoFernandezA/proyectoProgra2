const rutaCompartidaController={
    register:function(req,res){
        res.render('register', { });
    },
    login:function(req,res){
        res.render('login', { });
    },
    add:function(req,res){
        res.render('product-add', { });
    }
}

module.exports = rutaCompartidaController