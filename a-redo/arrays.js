// /**
//  * // ***** ARRAYS BASICS ***** //
//  * 
//  * // Inverted Idexes   =      -N          -5          -4          -3          -2             -1
//  * // Indexes           =       0           1           2           3           4            (N-1)
//  * const anArrayExample = ['Element1', 'Element2', 'Element3', 'Element4', 'Element5', ...'ElementN'];
//  * 
//  */

// const nomes = ['João', 'Maria', 'Joana'];
// const [n1, n2, n3] = nomes;
// console.log(n3, n2, n1);

// delete nomes[0];
// console.log(nomes);
// delete nomes[1];
// console.log(nomes);
// delete nomes[2];
// console.log(nomes);

// // copia valores por referência, logo se alterar 'novo' também alteramos 'nomes'
// const novo = nomes;
// // deve usar spread operator para copiar usando novo endereço de memória
// const novo2 = [...nomes];

// // to get a subset from an array
// console.log(nomes.slice(1, 2));

// // transform string in array and vice-versa
// const arrayFromString = 'val1 val2 val3'.split(' ');
// const stringFromArray = arrayFromString.join(' ');
// console.log(arrayFromString, stringFromArray);

// console.log(nomes.push('element'));
// console.log(nomes.pop()); // return the poped element
// console.log(nomes.shift('element'));
// console.log(nomes.unshift()); // return the unshifted element

// // ================================================================================================
// /**
//  *  // ***** SPLICE ***** //
//  * 
//  * nomes.splice(Index, Delete, ...Adds);
//  * Index    ->   índice por onde começar a deletar;
//  * Delete   ->   número de elementos a se deletar;
//  * Adds     ->   os elementos a se adicionar (como spread operator).
//  * 
//  */

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// console.log(nomes);
// nomes.splice(-1, 1);
// console.log(nomes);
// nomes.splice(-1, 1, 'Juliana', 'Eduarda');
// console.log(nomes);
// nomes.splice(-1, 1);
// console.log(nomes);
// nomes.splice(-1, 1);
// console.log(nomes);
// nomes.splice(-1, 1);
// console.log(nomes);
// nomes.splice(-1, 1);
// console.log(nomes);
// nomes.splice(-1, 1);
// console.log(nomes);

// const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Juliana'];
// const newArray = nomes2.splice((nomes2.length / 2),(nomes2.length / 2));
// console.log(nomes2);
// console.log(newArray);

// function splitArrayInHalf (array, invert) {
//     let divisor = array.length;
//     if (array.length % 2 !== 0) {
//         divisor++;
//         if (invert === 'inverted') {
//             divisor -= 2;
//         }
//     }
//     return array.splice(divisor/2, Number.MAX_VALUE);
// }
// const teste = [1, 2, 3, 4, 5, 6, 7];
// const resto = splitArrayInHalf(teste);
// console.log(teste, resto);
// const teste2 = [1, 2, 3, 4, 5, 6, 7];
// const resto2 = splitArrayInHalf(teste2, 'inverted');
// console.log(teste2, resto2);

// // ================================================================================================
// /**
//  *  // ***** ARRAYS CONCATENATION ***** //
//  */

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = [...a1, ...a2];
// const a4 = a1.concat(a2);
// const a5 = a1.concat(a2, 7, 8, 9, 'jay');
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// // ================================================================================================
// /**
//  *  // ***** FILTER ***** //
//  * 
//  * Filters functions are used to filter using condition inside an array.
//  * Iterates on a array from index 0 to Array.length
//  * 
//  * @return a Boolean type, if true add the element on the array, if false do not add
//  */

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const exampleFilter = numeros.filter(callbackFilter);
// function callbackFilter (value, index, array) {
//     return value > 10 ? true : false;
// }
// console.log('\n', exampleFilter);

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numbers.filter(value => value > 10 ? true : false);
// console.log('\n', numerosFiltrados);

// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 19 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 }
// ];
// const pessoasFiltradas1 = pessoas.filter(obj => obj.nome.length >= 5);
// console.log('\n', pessoasFiltradas1);
// const pessoasFiltradas2 = pessoas.filter(obj => obj.idade > 50);
// console.log('\n', pessoasFiltradas2);
// const pessoasFiltradas3 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
// console.log('\n', pessoasFiltradas3);

// // ================================================================================================
// /**
//  *  // ***** MAP ***** //
//  * 
//  * Iterates through the array and return an array with the same size with new elements changed or not
//  * @return a new element based on the value of the previous element to the new array
// */

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const double = numbers.map(value => value * 2);
// const parOuImpar = numbers.map(value => (value % 2) === 0 ? 'even' : 'odd');
// console.log('\n', double);
// console.log('\n', parOuImpar);
// console.log(numbers);

// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 19 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 }
// ];
// const nomeDasPessoas = pessoas.map(obj => obj.nome);
// const idadeDasPessoas = pessoas.map(obj => obj.idade);
// const dadosDasPessoas = pessoas.map(obj => `${obj.nome} tem ${obj.idade} anos.`);
// const idDasPessoas = pessoas.map((obj, index) => {
//     const newObj = { ...obj };
//     newObj.id = `ID-12${index + 1}.00${index}`;
//     return newObj;
// });
// console.log('\n', nomeDasPessoas);
// console.log('\n', idadeDasPessoas);
// console.log('\n', dadosDasPessoas);
// console.log('\n', idDasPessoas);
// console.log('\n', pessoas);

// // ================================================================================================
// /**
//  *  // ***** REDUCE ***** //
//  * 
//  * iterates through the array and return a value as acumulator, can be used to do short-circuit or sum or whatever user wants to
//  */

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numbers.reduce(function (ac, value, index, array) {
//     return ac + value;
// }, 0);
// const somaDoDobroDosPares = numbers.reduce((ac, value) => value % 2 === 0 ? ac + value * 2 : ac, 0);
// console.log(total);
// console.log(somaDoDobroDosPares);

// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 109 },
//     { nome: 'Rosana', idade: 64 },
//     { nome: 'Wallace', idade: 47 }
// ];
// const maisVelho = pessoas.reduce((ac, obj) => obj.idade > ac.idade ? obj : ac);
// console.log(maisVelho);

// // ================================================================================================
// /**
//  *  // ***** ARRAYS & FOREACH ***** //
//  */

// const a1 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// let sum = 0;
// a1.forEach((value, index, array) => sum += value);
// console.log(sum);

// // ================================================================================================
// /**
//  *  // ***** ARRAYS DOUBTS ***** //
//  */

// const curiosidade = ['100', '600', '700', '800', '900', '200', '300', '400', '500'];
// console.log(curiosidade.sort());
// // console.log(curiosidade.values());
// // console.log(curiosidade.findIndex());  // similar to FILTER, MAP, REDUCE functions, maybe usefull
// // console.log(curiosidade.keys());
// console.log(curiosidade.reverse());
// // console.log(curiosidade.find());  // try to understand such functions
// console.log(curiosidade.indexOf('400'));
// delete curiosidade[curiosidade.indexOf('400')];
// console.log(curiosidade);
// console.log(curiosidade.sort());
// console.log(curiosidade.reverse());

// const contains = (element) => Boolean(curiosidade.indexOf(element) + 1);
// console.log(contains('300'));
