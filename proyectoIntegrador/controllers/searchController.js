const searchController={
    resultados:function (req, res) {
        res.render('search-results', { title: 'Resultados de Búsqueda' });
    }
}
module.exports = searchController;