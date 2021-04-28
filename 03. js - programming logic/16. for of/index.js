// for clássico - geralmente com iteráveis (array ou strings);
// for in - retorna o índice ou chave (string, array, objetos);
// for of - retorna o valor em si (iteráveis, arrays, strings);

const nomes = ['Luiz', 'Otavio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('####');

for (let chave in nomes) {
    console.log(chave, nomes[chave]); // key : value role
}

console.log('####');

for (let valor of nomes) {
    console.log(valor);
}

console.log('####');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});