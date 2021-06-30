const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaInicial);
route.post('/contato', contatoController.trataPost);

module.exports = route;

// =================================================================
/*
appExpress.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button >Enviar tudo</button>
        </form>`
    );
});

// params -> testes/123
// query -> testes/?chave1=valor1*chave2=valor2&...
appExpress.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`O que me foi requerido foi: ${req.query}`);
});

appExpress.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que me foi enviado foi: ${req.body.nome}`);
});
*/