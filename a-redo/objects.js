// /**
//  * // ***** OBJECTS ***** //
//  */

// //literal object
// const pessoa01 = {
//     nome: 'jay',
//     sobrenome: 'rodrigues',
//     idade: 33,
//     sexo: 'masculino'
// }
// console.log(pessoa01);
// console.log(`${pessoa01.nome} ${pessoa01.sobrenome}, ${pessoa01.idade} anos, do sexo ${pessoa01.sexo}.`);

// // factory function - basics
// function criaPessoa (nome="'nome'", sobrenome="'sobrenome'", idade="'idade'", sexo="'sexo'") {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//         sexo: sexo,
//     }
// }
// function criaPessoa2 (nome, sobrenome, idade, sexo) {
//     return {
//         nome,
//         sobrenome,
//         idade,
//         sexo
//     }
// }
// const pessoa02 = criaPessoa('jay', 'rodrigues', 33, 'masculino');
// const pessoa03 = criaPessoa2('jay', 'rodrigues', 33, 'masculino');
// console.log(pessoa02);
// console.log(pessoa03);

// // ===================================================================================================
// /**
//  *  // ***** MORE ABOUT OBJECTS - BASICS ***** //
//  */

// const pessoa = {
//     nome: 'jay',
//     sobrenome: 'rods'
// }
// const key1 = 'nome';
// console.log(pessoa['nome'], pessoa[key1]);

// const pessoa1 = new Object();
// pessoa1.nome = 'JAY';
// pessoa1.sobrenome = 'RODS';
// pessoa1.tratamento = function () {
//     if (pessoa1.nome && pessoa1.sobrenome) return `${pessoa1.nome} ${pessoa1.sobrenome}.`;
//     if (pessoa1.nome) return `${pessoa1.nome}.`;
//     if (pessoa1.sobrenome) return `Mr./Mss. ${pessoa1.sobrenome}.`;
//     return 'Senhor(ra).';
// }

// Object.freeze(pessoa1);

// console.log(pessoa1);
// delete pessoa1.nome;
// console.log(pessoa1);
// delete pessoa1.sobrenome;
// console.log(pessoa1);
// console.log(pessoa1.tratamento());

// // ===================================================================================================
// /**
//  *  // ***** DEFINE_PROPERTY & DEFINE_PROPERTIES ***** //
//  * 
//  *  SYNTAX: Object.defineProperty( OBJECT, VARIABLE, PROPERTIES );
//  *  
//  *  PROPERTIES       = DESCRIPTION
//  *  enumerable       = o objeto mostrará a chave 'estoque'?
//  *  value            = valor que a variável irá receber do parametro da função construtora
//  *  writable         = pode alterar o valor da variável?
//  *  configurable     = pode apagar/deletar a chave? pode editar ou reconfigurar a chave?
//  */

// function Produto (nome, preco, estoque, GET_SET_var,) {
//     this.nome = nome;
//     this.preco = preco;
//     let GET_SET = GET_SET_var;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: false,
//         configurable: false
//     });

//     Object.defineProperty(this, 'GET_SET_var', {
//         enumerable: true,
//         configurable: false,
//         get: function () {
//             return GET_SET;
//         },
//         set: function (newValue) {
//             if (typeof newValue !== 'string') return console.log('BAD VALUE');
//             GET_SET = newValue;
//         }
//     });
// }
// const prod1 = new Produto('Camiseta', 20, 5000, 'GETTER_SETTER_VARIABLE');
// console.log(Object.keys(prod1));
// console.log(prod1);
// console.log(prod1.GET_SET_var);
// prod1.GET_SET_var = 'qqer merda';
// console.log(prod1.GET_SET_var);

// function Produto2 (nome, preco, estoque, GET_SET_VAR) {
//     let GET_SET = GET_SET_VAR;
    
//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true,
//             value: nome,
//             writable: true,
//             configurable: true
//         },
//         preco: {
//             enumerable: true,
//             value: preco,
//             writable: true,
//             configurable: true
//         },
//         estoque: {
//             enumerable: true,
//             value: estoque,
//             writable: false,
//             configurable: false
//         },
//         GET_SET_VAR: {
//             enumerable: true,
//             configurable: false,
//             get: function () {
//                 return GET_SET;
//             },
//             set: function (newValue) {
//                 GET_SET = newValue;
//             }
//         }
//     });
// }
// const prod2 = new Produto2('Calça', 80, 200, 'GETTER_SETTER_VARIABLE');
// console.log(Object.keys(prod2));
// console.log(prod2);
// console.log(prod2.GET_SET_VAR);
// prod2.GET_SET_VAR = 'Hi!!';
// console.log(prod2.GET_SET_VAR);

// // ===================================================================================================
// /**
//  *  // ***** USEFULL METHODS FOR OBJECTS ***** //
//  * 
//  *  Object.values -> análogo ao Object.keys, retorna os valores
//  *  Object.entries -> análogo a Object.keys e Object.values retorno ambos chaves e valores
//  *  Object.assign -> outra maneira de copiar um objeto (spread é melhor)
//  *  Object.getOwnPropertyDescriptor -> retorna as propriedades de um atributo do objeto (de maneira similar a defineProperty)
//  *  ... spread
//  *  delete Object.variable
//  *  Object.keys -> retorna as chaves
//  *  Object.freeze -> congela o objeto
//  *  Object.defineProperty -> define uma propriedade
//  *  Object.defineProperties -> define varias propriedades
//  */

// // spread para copia de objetos
// const produto = { nome: 'Caneca', preco: 1.80 };
// const outraCoisa = { ...produto };
// const { ...outraCoisa2 } = produto;
// console.log('\n', outraCoisa, '\n', outraCoisa2);

// // Object.assign() para copia de objetos
// const produto2 = { nome: 'Caneca', preco: 1.80 };
// const caneca = Object.assign({material: 'plástico'}, produto2, {peso: '1kg'});
// console.log(caneca);

// const produto3 = { nome: 'Caneca', preco: 1.80 };
// console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'));
// console.log(Object.values(produto3));
// console.log(Object.entries(produto3));

// const produto4 = { nome: 'Caneca', preco: 1.80 };
// for (let [chave, valor] of Object.entries(produto4)) {
//     console.log(chave, valor);
// };

// // ===================================================================================================
// /**
//  * // ***** PROTOTYPES ***** //
//  * 
//  *      pessoa1.__proto__ === Pessoa.prototype
//  *      pessoa1 --> Pessoa.prototype --> Object.prototype
//  * 
//  */

// function Pessoa (nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     // this.nomeCompleto = () => ,this.nome + ' ' + this.sobrenome;
// }
// Pessoa.prototype.variavel = 'qualquer variavel';
// Pessoa.prototype.setIdade = function (idade) {
//     return this.idade = idade;
// }
// Pessoa.prototype.nomeCompleto = function () {
//     return this.nome + ' ' + this.sobrenome;
// }
// const p1 = new Pessoa('jay', 'rods', 33);
// console.dir(p1);
// p1.setIdade(500);
// console.dir(p1);
// console.dir(p1.idade);
// console.dir(p1.nomeCompleto());
// console.log(p1.variavel);
// p1.variavel = 'outra coisa';
// console.log(p1.variavel);

// // ===================================================================================================
// /**
//  *  // ***** MANAGING PROTOTYPES ***** //
//  */

// const objA = {
//     chaveA: 'A',
//     // __proto__: Object.prototype
// }
// const objB = {
//     chaveB: 'B',
//     // __proto__: objA
// }
// Object.setPrototypeOf(objB, objA);
// Object.getPrototypeOf(objA);
// console.log(objA, objB);
// console.log(objB.chaveA);
// console.log(objB.chaveB);

// function Produto (nome, preco) {
//     this.nome = nome;
//     this.preco = preco;
// }
// Produto.prototype.desconto = function (percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 100));
// };
// Produto.prototype.aumento = function (percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100));
// };

// const p1 = new Produto('camisa', 60.00);
// const p2 = {
//     nome: 'caneca',
//     preco: 500.00
// }
// Object.setPrototypeOf(p2, Produto.prototype);

// console.log(p1, p2);
// p1.aumento(40);
// p2.aumento(40);
// console.log(p1, p2);

// const p3 = Object.create(Produto.prototype);
// p3.nome = 'vaso';
// p3.preco = 200;
// console.log(p3);

// const p4 = Object.create(Produto.prototype, {
//     nome: {
//         enumerable: true,
//         value: String('nome'),
//         writable: true,
//         configurable: true
//     },
//     preco: {
//         enumerable: true,
//         value: Number(44),
//         writable: true,
//         configurable: true
//     }
// });
// p4.aumento(50);
// console.log(p4);

// // ===================================================================================================
// /**
//  *  // ***** INHERITANCE  ***** //
//  */

// function Produto (nome, preco) {
//     this.nome = nome;
//     this.preco = preco;
// }
// Produto.prototype.aumento = function (percentage) {
//     this.preco += (this.preco * (percentage / 100));
// };
// Produto.prototype.desconto = function (percentage) {
//     this.preco -= (this.preco * (percentage / 100));
// };

// // creating new object that inherits Produto
// function Camiseta (nome, preco, cor) {
//     Produto.call(this, nome, preco);
//     this.cor = cor;
// }
// // setting object prototype
// Camiseta.prototype = Object.create(Produto.prototype);
// // resetting object constructor
// Camiseta.prototype.constructor = Camiseta;
// // overiding prototype's method
// Camiseta.prototype.aumento = function (valor) {
//     this.preco += valor;
// };

// const c1 = new Camiseta('regata', 7.5, 'Preta');
// console.log(c1);
// c1.aumento(10);
// console.log(c1);

// // creating new object that inherits Produto
// function Caneca (nome, preco, material, estoque) {
//     Produto.call(this, nome, preco);
//     this.material = material;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         configurable: true,
//         get: function () {
//             return estoque;
//         },
//         set: function (valor) {
//             if (typeof valor !== 'number') return;
//             estoque = valor;
//         }
//     })
// }
// Caneca.prototype = Object.create(Produto.prototype);
// Caneca.prototype.constructor = Caneca;

// const ca1 = new Caneca('vremeia', 20, 'plastico');
// console.log(ca1);
// ca1.aumento(10);
// console.log(ca1);

// // ===================================================================================================
// /**
//  *  // ***** POLIMORFISM ***** //
//  */

// function Conta (agencia, conta, saldo) {
//     this.agencia = agencia;
//     this.numero = conta;

//     Object.defineProperty(this, 'saldo', {
//         enumerable: true,
//         configurable: true,
//         get: function () {
//             return saldo;
//         },
//         set: function (valor) {
//             saldo = valor;
//         }
//     });
// }
// Conta.prototype.saque = function (valor) {
//     if (this.saldo < valor) return console.log('saldo insuficiente');
//     this.saldo -= valor;
// };
// Conta.prototype.deposito = function (valor) {
//     this.saldo += valor;
// };
// // Conta.prototype.verSaldo = function () {
// //     return this.saldo;
// // }

// const conta1 = new Conta(1234, 10000, 500);
// console.log(conta1);
// console.log(conta1.saldo);


// function CC (agencia, numero, saldo) {
//     Conta.call(this, agencia, numero, saldo);
// }
// CC.prototype = Object.create(Conta.prototype);
// CC.prototype.constructor = CC;
// CC.prototype.saque = function (valor) {
//     if (this.saldo + 200 < valor) return console.log('saldo insuficiente');
//     this.saldo -= valor;
// };
// CC.prototype.verSaldo = function () {
//     return this.saldo + 200;
// }

// function CP (agencia, numero, saldo) {
//     Conta.call(this, agencia, numero, saldo);
// }
// CP.prototype = Object.create(Conta.prototype);
// CP.prototype.constructor = CP;

// // ===================================================================================================
// /**
//  *  // ***** FACTORY FUNCTIONS & PROTOTYPE ***** //
//  */

// // EXAMPLE 1
// function criaPessoa (nome, sobrenome) {
//     const pessoaPrototype = {
//         falar () {
//             console.log(`${this.nome} está falando.`);
//         },
//         comer () {
//             console.log(`${this.nome} está comendo.`);
//         },
//         beber () {
//             console.log(`${this.nome} está bebendo.`);
//         },
//     };
//     return Object.create(pessoaPrototype, {
//         nome: {
//             enumerable: true,
//             value: nome,
//             writable: true,
//             configurable: true
//         },
//         sobrenome: {
//             enumerable: true,
//             value: sobrenome,
//             writable: true,
//             configurable: true
//         }
//     });
// }
// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1);

// // EXAMPLE 2 - MIXING COMPOSITION
// function criaPessoa (nome, sobrenome) {
//     return Object.create(pessoaPrototype, {
//         nome: {
//             value: nome,
//             enumerable: true
//         },
//         sobrenome: {
//             value: sobrenome,
//             enumerable: true
//         }
//     });
// }
// const falar = {
//     falar () {
//         console.log(`${this.nome} está falando.`);
//     },
// }
// const comer = {
//     comer () {
//         console.log(`${this.nome} está comendo.`);
//     },
// }
// const beber = {
//     beber () {
//         console.log(`${this.nome} está bebendo.`);
//     },
// }
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1);
// p1.falar();
// p1.comer();
// p1.beber();
