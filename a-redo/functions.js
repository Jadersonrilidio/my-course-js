// /**
//  * // ***** FUNCTIONS BASICS ***** //
//  * 
//  * the parameters can receive a default value in case the user does not add any arguments;
//  */

// // to declare a function
// function functionName (parameters='defaultValue') {
//     return 'result';
// }
// // to use a function
// functionName('arguments');

// // first: the arrow function: simplified anonimous function;
// const nomeCompleto = (nome="'nome'", sobrenome="'Sobrenome'") => nome + ' ' + sobrenome;

// // second: standard function: with the 'function' keyword, name, parameters and body;
// function nomeCompleto2 (nome="'nome'", sobrenome="'Sobrenome'") {
//     return nome + ' ' + sobrenome;
// }

// // third: anonimous function: a function with no name neither the keyword function, it is declared directly to a variable;
// const nomeCompleto3 = function (nome="'nome'", sobrenome="'Sobrenome'") {
//     return nome + ' ' + sobrenome;
// };

// // =====================================================================================
// /**
//  * // ***** MORE ABOUT FUNCTIONS ***** //
//  *
//  * somente na declaração clássica de função ocorre o HOISTING! (arrow & anonimous functions não realizam hoisting)
//  * function are FIRST-CLASS OBJECT: 
//  */

// // function expression
// const teste01 = function () {
//     return 'Sou um dado armazenado como função.';
// }
// function teste02 (funcao) {
//     console.log(typeof funcao, ' - sou uma função');
//     funcao();
// }
// teste02(teste01);

// // arrow function
// const arrow = (val=100) => console.log('sou uma arrow function', val);
// arrow();

// // =====================================================================================
// /**
//  * // ***** FUNCTION PARAMETERS & ARGUMENTS ***** //
//  */

// //funções definidas com a palavra FUNCTION contém a variável ARGUMENTS
// function funcao () {
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     console.log(arguments[4]);
//     const [ arg0, arg1, arg2, ...rest ] = arguments;
//     console.log();
//     console.log(arg0);
//     console.log(arg1);
//     console.log(arg2);
//     console.log(rest);
// }
// funcao('values', 1, 2, 3, 4, 5, 6);

// // exemplo de aplicação
// function sumArguments () {
//     let sum = 0;
//     for (let arg of arguments) {
//         sum += arg;
//     }
//     return 'Soma igual: ' + sum;
// }
// console.log(sumArguments(1, 2, 3, 4, 5));

// // atribuição via desestruturação em funções: para objectos e arrays
// function example ({ nome:n="esquisito", sobrenome:s, idade:i , profissao:p}) {
//     console.log(n, s, i, p);
// }
// const obj = {
//     nome: 'jay',
//     sobrenome: 'rods',
//     sexo: 'masculino',
//     idade: 33,
//     logradouro: 'R. Manoel Pinto, 70-A'
// }
// example(obj);

// function example2 ([ val1, val2, val3, ...rest ]) {
//     console.log(val1, val2, val3, rest);
// }
// const vetor1 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// example2(vetor1);

// const somador = (operador, acumulador, ...numeros) => {
//     console.log(operador, acumulador, numeros);
//     console.log(arguments);
//     for (let number of numeros) {
//         if (operador === '+') acumulador += number;
//         if (operador === '-') acumulador -= number;
//         if (operador === '/') acumulador /= number;
//         if (operador === '*') acumulador *= number;
//         if (operador === '**') acumulador **= number;
//         if (operador === '%') acumulador %= number;
//     }
//     return acumulador;
// }
// console.log(somador('+', 0, 10, 20, 30, 40, 50, 60, 70));

// // =====================================================================================
// /**
//  *  // ***** NESTED FUNCTIONS ***** //
//  */

// // NESTED FUNCTIONS - level 2
// function falaFrase (comeco) {
//     function falaResto (resto) {
//         return comeco + resto;
//     }
//     return falaResto;
// }

// const falador = falaFrase('Olá ');
// console.log(falador);
// console.log(falador('Mundo!'));

// // NESTED FUNCTIONS - level 3
// function fu1 (param1) {
//     function fu2 (param2) {
//         function fu3 (param3) {
//             return param1 + param2 + param3;
//         }
//         return fu3;
//     }
//     return fu2;
// }
// const var1 = fu1('first ');
// const var2 = var1('second ');
// const var3 = var2('third.');
// console.log(var1);
// console.log(var2);
// console.log(var3);

// //NESTED FUNCTION - multiplier
// function multiplicador (mult) {
//     return (val) => val * mult;
// }
// const duplica = multiplicador(2);
// const triplica = multiplicador(3);
// const quadriplica = multiplicador(4);
// const quintuplica = multiplicador(5);
// console.log(duplica(2), triplica(2), quadriplica(2), quintuplica(2));

// const multiplicador = (mult) => (val) => val * mult;
// const duplica = multiplicador(2);
// const triplica = multiplicador(3);
// const quadriplica = multiplicador(4);
// const quintuplica = multiplicador(5);
// console.log(duplica(2), triplica(2), quadriplica(2), quintuplica(2));

// // =====================================================================================
// /**
//  * // ***** CALLBACK FUNCTIONS ***** //
//  */

// function rand (min=0, max=3000) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// function f1 (callback) {
//     setTimeout(() => {
//         let exactNum = rand(0, 50);
//         if (exactNum === 25) {
//             return console.log('Algarismo encontrado!');
//         }
//         console.log('Retornando a procura (1)... ');
//         if (callback) callback();
//     }, rand());
// }
// function f2 (callback) {
//     setTimeout(() => {
//         let exactNum = rand(0, 50);
//         if (exactNum === 25) {
//             return console.log('Algarismo encontrado!');
//         }
//         console.log('...retornando a procura (2)... ');
//         if (callback) callback();
//     }, rand());
// }
// function f3 (callback) {
//     setTimeout(() => {
//         let exactNum = rand(0, 50);
//         if (exactNum === 25) {
//             return console.log('Algarismo encontrado!');
//         }
//         console.log('...retornando a procura (3)...');
//         if (callback) callback();
//     }, rand());
// }
// function f4 (callback) {
//     setTimeout(() => {
//         console.log('...nada encontrado, REINICIANDO');
//         if (callback) callback();
//     }, rand());
// }

// function loop () {
//     f1(function () {
//         f2(function () {
//             f3(function () {
//                 f4(function () {
//                     loop();
//                 });
//             });
//         });
//     });
// }
// loop();

// const loopArrow = () => f1(() => f2(() => f3(() => f4(() => loop()))));
// loopArrow();

// (() => f1(() => f2(() => f3(() => f4(() => loop())))))(); // IIFE - Immediately Invoked Function Expression + callback

// // =====================================================================================
// /**
//  * // ***** IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION ***** //
//  */

// (() => console.log('inicializando...'))();

// (function (param) {
//     console.log('calling immediately my function!');
// })();
// ((param) => console.log('calling my parameter' + param))(' ESTRINGUES');

// (function (val1=0, val2=0) {
//     const objeto = {
//         nomeSecreto: 'jaySecreto',
//         sobrenomeSecreto: 'rodsSecreto',
//         idadeSecreta: 2000,
//         EnderecoSecreto: 'Russia, Nevskii Prospect'
//     }
//     console.log(objeto);
//     console.log(val1, val2, arguments);
// })();

// // =====================================================================================
// /**
//  * // ***** FACTORY FUNCTIONS ***** //
//  * 
//  * Objects may contain: ATRIBUTES, METHODS, GETTERS, SETTERS, OBJECTS, etc.
//  */

// function factoryFunction (key1, key2, key3) {
//     return {
//         key1,
//         key2,
//         key3,
//         height: 12,
//         args: arguments,
//         objFunction1: function () {
//             return `${this.key1} e ${this.key2} são ${this.key3}`;
//         },
//         get keys () {
//             return `${this.key3}: ${this.key1} ${this.key2}.`
//         },
//         set keys (param) {
//             let valueStr = param.replace(/:|\./gi, '');
//             let values = valueStr.split(' ');
//             this.key3 = values.shift();
//             this.key1 = values.shift();
//             this.key2;values.shift();
//         },
//     };
// }

// const obj1 = factoryFunction('jay', 'rods', 'nomes', 12, 2, 3, 4, 5);
// console.log(obj1);
// console.log(obj1.objFunction1());
// console.log(obj1.key1);
// console.log(obj1.key2);
// console.log(obj1.key3);
// console.log(obj1.height);
// console.log(obj1.args);
// console.log(obj1.keys);
// obj1.keys = 'idades: 12 13.'
// console.log(obj1.keys);

// // =====================================================================================
// /**
//  * // ***** CONSTRUCTOR FUNCTIONS ***** //
//  */

// function Pessoa (nome, sobrenome, idade) {
//     const ID = 123456;
//     const metodoInternoID = function () {
//         return ID;
//     };
//     this.metodoExternoID = function () {
//         return ID;
//     };
    
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//     this.metodo = function () {
//         return `${this.nome} ${this.sobrenome}, ID-${metodoInterno()}, tem ${this.idade} anos.`
//     };
//     this.endereco = {
//         rua: 'Manoel Pinto',
//         numero: '70-A',
//     };
// }

// const pessoa1 = new Pessoa('jay', 'rods', 33);
// console.log(pessoa1);
// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
// console.log(pessoa1.endereco);
// console.log(pessoa1.metodo());

// // =====================================================================================
// /**
//  * // ***** RECURSIVE FUNCTIONS ***** //
//  * 
//  * functions that call themselves back until match a stop-running condition.
//  */

// function fatorial (value) {
//     let fat = value;
//     if (value > 1) {
//         fat *= fatorial(value - 1);
//     }
//     return fat;
// }
// console.log(fatorial(5));

// function recursiva (max) {
//     if (max >= 10) return;
//     max++;
//     console.log(max);
//     recursiva(max);
// }
// recursiva(-10);

// // =====================================================================================
// /**
//  * // ***** GENERATOR FUNCTIONS ***** //
//  */

// function* geradora1 () {
//     console.log('rum first code');
//     yield '==first value==';
//     console.log('rum second code');
//     yield '==second value==';
//     console.log('rum the last code');
//     return '==OVER=='; // encerra a função e os yields abaixo;
// }
// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

// function* geradora2 () {
//     let i = 0;
//     while (true) {
//         yield i;
//         i++;
//     }
// }
// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

// function* geradora3 () {
//     yield 0;
//     yield 1;
//     yield 2;
// }
// function* geradora4 () {
//     yield* geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }
// const g4 = geradora4();
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);

// function* geradora5 () {
//     yield function () {
//         console.log('___vim do y1');
//     };
//     yield () => console.log('___vim do y2');
//     yield function passo3 () {
//         console.log('___vim do y3');
//     };
//     yield passo4;
//     return () => console.log('___vim do return');
// }
// function passo4 () {
//     console.log('___vim do y4');
// }
// const g5 = geradora5();
// const func1 = g5.next().value;
// const func2 = g5.next().value;
// const func3 = g5.next().value;
// const func4 = g5.next().value;
// const func5 = g5.next().value;
// func1();
// func2();
// func3();
// func4();
// func5();
