const path = require('path');
const escreve = require('./modules/write.js');
const ler = require('./modules/read.js');

const filePath = path.resolve(__dirname, 'test.json');

/*
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Humberto'},
    {nome: 'Eduardo'}
];
const json = JSON.stringify(pessoas, '', 2);

escreve(filePath, json);
*/

async function lerArquivo (caminho) {
    const leitura = await ler(caminho);
    renderizaDados(leitura);
}

function renderizaDados (dados) {
    const dadosRend = JSON.parse(dados);
    dadosRend.forEach(val => console.log(`nome - ${val.nome}`));
}

lerArquivo(filePath);
/*
const dadosArquivo = lerArquivo(filePath)
    .then(dados => console.log(dados));
    */