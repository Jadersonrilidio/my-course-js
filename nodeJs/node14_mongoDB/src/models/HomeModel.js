const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: String
});

 const HomeModel = mongoose.model('Home', HomeSchema);

 class Home {

 }
 module.exports = Home;

/*
const HomeModel = require('../models/HomeModel.js');

HomeModel.create({
    titulo: 'outra coisa qqer',
    descricao: 'outra descricao'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
*/