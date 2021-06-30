const express = require('express');
const appExpress = express();
const routes = require('./routes.js');

appExpress.use(express.urlencoded({ extend: true }));
appExpress.use(routes);

appExpress.listen(30000, () => {
    console.log('Acessar http://localhost:30000')
    console.log(`Servidor executando na porta 30.000`)
});
