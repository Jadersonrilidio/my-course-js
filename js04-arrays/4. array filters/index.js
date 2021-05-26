const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numFilter2 = numeros.filter( value => value > 10);
console.log(numFilter2);

/*
retorne as pessoas que tem nome >= 5 letras
retorne as pessoas com mais de 50 anos
retorne as pessoas cujo nome termina com a letra 'A'
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomeFilter = pessoas.filter(obj => obj.nome.length >= 5);
console.log(nomeFilter);

const idadeFilter = pessoas.filter(obj => obj.idade > 50);
console.log(idadeFilter);

const letraFilter = pessoas.filter(obj => obj.nome.slice(-1) === 'a');
console.log(letraFilter);

const letraFilter2 = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(letraFilter2);