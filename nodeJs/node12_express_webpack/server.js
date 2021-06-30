const express = require('express');
const path = require('path');
const routes = require('./routes.js');

const appExpress = express();

appExpress.use(express.urlencoded({ extend: true }));

appExpress.use(express.static(path.resolve(__dirname, 'public')));

appExpress.use(routes);

appExpress.set('views', path.resolve(__dirname, 'src', 'views'));
appExpress.set('view engine', 'ejs');

appExpress.listen(30000, () => {
    console.log('Acessar http://localhost:30000')
    console.log(`Servidor executando na porta 30.000`)
});
