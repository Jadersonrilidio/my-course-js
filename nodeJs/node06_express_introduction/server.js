const express = require('express');
const appExpress = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE
// https://meusite.com/ <- GET -> entregue a página
// https://meusite.com/sobre <- GET -> entregue a página /sobre

/*
appExpress.get('/', (request, response) => {
    response.send(C:/Users/Cliente/Desktop/MyCourseJs/nodeJs/node06_express_introduction/index.html);
});
*/

appExpress.get('/', (request, response) => {
    response.send(
        `<form action="/" method="POST">
        nome: <input type="text" name="nome">
        <button >Enviar</button>
        </form>`
    );
});

appExpress.post('/', (request, response) => {
    response.send('Recebi o formulário');
});

appExpress.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.');
});

appExpress.listen(30000, () => {
    console.log('Acessar http://localhost:30000')
    console.log(`Servidor executando na porta 30.000`)
});
