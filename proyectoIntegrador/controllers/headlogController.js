const headerlogController={
    log:function (req, res)  {
        res.render('headerLogueado', { title: 'Header Logueado' });
    }
    
}
module.exports = headerlogController;