exports.paginaInicial = (req, res) => {
    res.render('index.ejs');
    console.log('Respondendo ao cliente')
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};