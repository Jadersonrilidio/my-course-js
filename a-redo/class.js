// /**
//  * // ***** CLASSES ***** //
//  * 
//  */

// // EXAMPLE 1
// class Pessoa1 {
//     constructor (nome, sobrenome, idade) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.idade = idade;
//     }
//     anoNascimento () {
//         const currentyear = new Date().getFullYear();
//         return currentyear - this.idade;
//     }
// }

// // EXAMPLE 2
// class Pessoa2 {
//     constructor (nome, sobrenome, idade) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.idade = idade;
//         this.anoNascimento = function () {
//             const currentyear = new Date().getFullYear();
//             return currentyear - this.idade;
//         }
//     }
// }

// // EXAMPLE 3 - WITH CONSTRUCTOR FUNCTION
// function Pessoa3 (nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
// }
// Pessoa3.prototype.anoNascimento = function () {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.idade;
// }

// const p1 = new Pessoa1('jay', 'rods', 34);
// const p2 = new Pessoa2('jay', 'rods', 34);
// const p3 = new Pessoa3('jay', 'rods', 34);
// const a1 = p1.anoNascimento();
// const a2 = p2.anoNascimento();
// const a3 = p3.anoNascimento();
// console.table({p1, p2, p3, a1, a2, a3});


// // ===========================================================================
// /**
//  *  // ***** CLASSES - GETTERS AND SETTERS ***** //
//  * 
//  *      SYMBOL PRIMITIVE:
//  *       we may use Symbol primitive datatype to create a private key into your object, it can fit for classes or
//  *      construcor function or factory either literal object;
//  *       It will generate an aleatory ID for the variable, each time you execute a Symbol function, it will be a different one;
//  *      
//  *      SYNTAX:
//  *       const _varName = Symbol('varName');
//  *       this[_varName] = _________________;
//  */

// console.log(Symbol() === Symbol());
// console.log(Symbol() == Symbol());

// const _velocidade = Symbol('velocidade');
// class Carro {
//     constructor(nome, marca) {
//         this.nome = nome;
//         Object.defineProperty(this, 'marca', {
//             enumerable: false,
//             configurable: false,
//             writable: true,
//             value: marca
//         });
//         this[_velocidade] = 0;
//     }
//     get velocidade () {
//         return this[_velocidade];
//     }
//     set velocidade (value) {
//         if (typeof value !== 'number') return ;
//         if (value > 100 || value < 0) return ;
//         this[_velocidade] = value;
//     }
//     get nomeDoCarro () {
//         if (this.marca) return `Carro: ${this.nome}, marca: ${this.marca}.`;
//         return `Carro: ${this.nome}, marca: não especificado.`;
//     }
//     set nomeDoCarro (nomeMarca) {
//         const nomeMarcaArray = nomeMarca.split(' ');
//         this.nome = nomeMarcaArray.shift();
//         this.marca = nomeMarcaArray.pop();
//     }

//     acelerar () {
//         if (this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     }
    
//     frear () {
//         if (this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }
// }

// function esmilinguir () {
//     for (let i=0; i<2000; i++) {
//         c1.acelerar();
//     }
// }

// const c1 = new Carro('fusquinha');
// console.table({c1});
// console.log(c1);
// esmilinguir();
// console.table({c1});
// console.log(c1);
// c1.velocidade = 2000;
// console.log(c1);
// c1[_velocidade] = 2000;
// console.log(c1);
// console.table({c1});
// console.log(c1);
// console.log(c1.nomeDoCarro);
// c1.nomeDoCarro = 'fusquitcha da marca Volkswagem';
// console.log(c1.nomeDoCarro);

// // ===========================================================================
// /**
//  *  // ***** CLASSES INHERITANCE ***** //
//  * 
//  */

// class DispositivoEletronico {
//     constructor (nome) {
//         this.nome = nome;
//         this.ligado = false;
//     }

//     ligar () {
//         if (this.ligado) return console.log('nada acontece...');
//         console.log('LIGADO');
//         this.ligado = true;
//     }
//     desligar () {
//         if (!this.ligado) return console.log('nada acontece...');
//         console.log('DESLIGADO');
//         this.ligado = false;
//     }
// }

// class Smartphone extends DispositivoEletronico {
//     constructor (nome, cor, modelo) {
//         super(nome);
//         this.cor = cor;
//         this.modelo = modelo;
//     }

//     // methods override
//     ligar () {
//         if (this.ligado) return console.log('nada acontece com o smartphone...');
//         console.log('Smartphone LIGADO');
//         this.ligado = true;
//     }
//     desligar () {
//         if (!this.ligado) return console.log('nada acontece com o smartphone...');
//         console.log('Smartphone DESLIGADO');
//         this.ligado = false;
//     }
// }

// const d1 = new DispositivoEletronico('Smartphone');
// console.table({d1});
// d1.ligar();
// d1.ligar();
// d1.ligar();
// d1.desligar();

// const s1 = new Smartphone('Samgung', 'preto', 'Galaxy S10');
// console.table({s1});
// s1.ligar();
// s1.ligar();
// s1.ligar();
// s1.desligar();

// // ===========================================================================
// /**
//  *  // ***** CLASSES STATIC METHODS ***** //
//  * 
//  */

// const _tv = Symbol('tv');

// class ControleRemoto {
//     constructor (tv) {
//         this[_tv] = tv;
//         this.volume = 0;
//     }

//     static trocaPilha () {
//         console.log('Pilha renovada.')
//     }

//     aumentarVolume () {
//         this.volume += 2;
//     }
//     diminuirVolume () {
//         this.volume -= 2;
//     }
// }

// const c1 = new ControleRemoto('LG');
// const c2 = new ControleRemoto('SAMSUNG');

// ControleRemoto.trocaPilha();
// ControleRemoto.trocaPilha();

// console.table(c1);
// console.log(c1);
// console.log(c1[_tv]);
// c1[_tv] = 'Samsunga';
// console.table(c1);
// console.log(c1);

// c1.aumentarVolume();
// c1.aumentarVolume();
// c1.aumentarVolume();
// c1.aumentarVolume();
// console.log(c1);
