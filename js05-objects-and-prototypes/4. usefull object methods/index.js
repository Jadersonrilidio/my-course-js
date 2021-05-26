/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'property')
... (spread)

// ALREADY SEEN
Object.keys (retorn as chaves)
Object.freeze (congela o objeto)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)

*/

const produto = {nome: 'Produto', preco: 1.80};
const outraCoisa = { ...produto};

outraCoisa.nome = 'outro nome';
outraCoisa.preco = 2.50;

console.log(produto);
console.log(outraCoisa);

// outra maneira
const caneca = Object.assign({}, produto, {material: 'Porcelada'});
console.log(caneca);

// função que retorna as propriedades de uma chave
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// função pra retornar os valores das chaves
console.log(Object.values(produto));

// função retorna um array de arrays contento chave e valor em cada
console.log(Object.entries(produto));