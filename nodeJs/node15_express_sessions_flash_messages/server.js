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

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flashMsg = require('connect-flash');

const routes = require('./routes.js');
const path = require('path');
const myMiddleware = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extend: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'qwer asdf zxcv',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flashMsg())

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
