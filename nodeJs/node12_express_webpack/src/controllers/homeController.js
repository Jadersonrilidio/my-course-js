exports.paginaInicial = (req, res) => {
    res.render('index.ejs');
    /*res.send(
        `<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button >Enviar tudo</button>
        </form>`
    );*/
};

exports.trataPost = (req, res) => {
    res.send(req.body.nome);
};