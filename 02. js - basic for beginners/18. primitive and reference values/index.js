/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) - valores copiados
Referência (mutável) - array, object, function - passados por referência (apontam p/ mesmo lugar na memória)
*/

let a = [1, 2, 3];
let b = a;

// variáveis copiadas por referência apontam para um mesmo lugar na memória.
console.log(a, b);
a.push(4);
console.log(a, b);
b.pop();
console.log(a, b);

// copiando um valor de outra variável de forma primitiva
let c = [1, 2, 3];
let d = [...c]; // spread

console.log(c, d);
c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);