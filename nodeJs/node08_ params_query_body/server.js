const express = require('express');
const appExpress = express();

appExpress.use(express.urlencoded({ extend: true }));

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

appExpress.listen(30000, () => {
    console.log('Acessar http://localhost:30000')
    console.log(`Servidor executando na porta 30.000`)
});
