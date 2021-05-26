/*
some todos os números (reduce)
retorne um array com os pares (filter)
retorne um array com o dobro dos valores (map)
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, value, index, array) {
    return acumulador += value;
}, 0);
console.log(total);

const pares = numeros.reduce(function (acumulador, value, index, array) {
    if (value % 2 === 0) acumulador.push(value);
    return acumulador;
}, []);
console.log(pares);

const dobros = numeros.reduce(function (acumulador, value, index, array) {
    acumulador.push(value * 2);
    return acumulador;
}, []);
console.log(dobros);

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

const maisVelho = pessoas.reduce(function (acumulador, obj) {
    if (obj.idade > acumulador.idade) return obj;
    return acumulador;
});
console.log(maisVelho);