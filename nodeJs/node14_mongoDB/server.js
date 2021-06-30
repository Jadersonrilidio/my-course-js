require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes.js');
const path = require('path');
const myMiddleware = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extend: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// nossos próprios middlewares
app.use(myMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(30000, () => {
        console.log('Acessar http://localhost:30000')
        console.log(`Servidor executando na porta 30.000`)
    });
});
