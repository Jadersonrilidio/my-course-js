const express = require('express');
const appExpress = express();
const routes = require('./routes.js');
const path = require('path');
const myMiddleware = require('./src/middlewares/middleware.js');


appExpress.use(express.urlencoded({ extend: true }));

appExpress.use(express.static(path.resolve(__dirname, 'public')));

appExpress.set('views', path.resolve(__dirname, 'src', 'views'));
appExpress.set('view engine', 'ejs');

// nossos próprios middlewares
appExpress.use(myMiddleware);
appExpress.use(routes);

appExpress.listen(30000, () => {
    console.log('Acessar http://localhost:30000')
    console.log(`Servidor executando na porta 30.000`)
});
