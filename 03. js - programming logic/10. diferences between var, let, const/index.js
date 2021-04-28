// let tem escopo de bloco {... bloco}
// var só tem escopo de função
// com variaveis tipo var ocorre o chamado 'hoisting', onde ao se declarar uma var em qualquer
// posição do código, o engine automaticamente as considera declaradas ao início, sendo assim
// as variaveis var apresentam tipos undefined mesmo antes de serem declaradas no código, caso usadas

const verdadeira = true;

let nome = 'Luiz'; // declarando
var nome2 = 'Luiz'; // declarando

if (verdadeira) {
    let nome = 'Otavio'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira) {
        let nome = 'Ronaldo'; // criando
        var nome2 = 'Bebeto'; // redeclarando
    }
}
console.log(nome, nome2);

