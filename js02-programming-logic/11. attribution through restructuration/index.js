// atribuição via desestruturação

// index           0     1     2     3     4     5     6     7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [valor1, , valor2, , valor3, ...resto] = numeros;
console.log(valor1, valor2, valor3);
console.log(resto); // ...rest  ...spread operator

// index            0          1          2
// index         0  1  2    0  1  2    0  1  2
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [, [ , , valor6]] = matriz;
console.log(valor6);