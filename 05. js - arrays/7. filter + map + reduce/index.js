/*
RETORNE A SOMA DO DOBRO DE TODOS OS PARES
-> filtrar pares;
-> dobrar valores
-> somar tudo  
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDobroPares = numeros
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((ac, value) => ac + value);

console.log(somaDobroPares);


// =================================================================================================
/*
Retorne a pesosa mais velha
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 92},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];
