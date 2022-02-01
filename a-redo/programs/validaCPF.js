function CPF (cpf) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        configurable: false,
        get: function () {
            return cpf;
        },
    });

    Object.defineProperties(this, {
        cleanCPF: {
            enumerable: false,
            configurable: false,
            get: function () {
                return this.cpf.replace(/\D+/g, '');
            }
        },
        cutDigits: {
            enumerable: false,
            configurable: false,
            get: function () {
            return this.cleanCPF.slice(0, -2);
            }
        },
        numArray: {
            enumerable: false,
            configurable: false,
            get: function () {
                return [...this.cutDigits]; // Array.from(this.cutDigits); [...this.cutDigits]; this.cutDigits.split(''); Object.assign([], this.cutDigits);
            }
        },
        digitOne: {
            enumerable: false,
            configurable: false,
            get: function () {
                const myArray = [ ...this.numArray];
                const sum = myArray.reduce((ac, val, index, array) => {
                    return ac + Number(val) * (array.length + 1 - index);
                }, 0);
                const res = 11 - (sum % 11);
                return (res > 9) ? '0' : String(res);
            }
        },
        digitTwo: {
            enumerable: false,
            configurable: false,
            get: function () {
                const myArray = [ ...this.numArray, ...this.digitOne ];
                const sum = myArray.reduce((ac, val, index, array) => {
                    return ac + Number(val) * (array.length + 1 - index);
                }, 0);
                const res = 11 - (sum % 11);
                return (res > 9) ? '0' : String(res);
            }
        },
        isValid: {
            enumerable: true,
            configurable: false,
            get: function () {
                if (this.cleanCPF === this.cleanCPF[0].repeat(11)) return false;
                return this.digitOne == this.cpf[12] && this.digitTwo == this.cpf[13];
            }
        },
    });
}

// =============================================================================

function Pessoa (nome, sobrenome, idade, cpf) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    CPF.call(this, cpf);
}
Pessoa.prototype = Object.create(CPF.prototype);
Pessoa.prototype.constructor = Pessoa;

// ====== TESTS ====== TESTS ====== TESTS ====== TESTS ====== TESTS ====== TESTS

const cpf1 = new CPF('705.484.450-52');
const p1 = new Pessoa('jay', 'rods', 33, '705.484.450-52');

console.table({ p1, cpf1 });

// // =============================================================================
// /**
//  * // ***** ALTERNATIVE OBJECT CPF ***** //
//  * 
//  * In this version all the functions to validate a cpf number were moved to the object's prototype object.
//  * ADVANTAGES:
//  *      - smaller code (used less lines);
//  *      - the instances no longer store all the functions in their body, as could be seem on the console panel;
//  *      - the functions can receive parameters (that can be reduced in size), thus reduced in some parts (avoiding redundancy).
//  * DISADVANTAGES:
//  *      - imo, the code is more confuse;
//  *      - functions are places out of the object constrait, more deorganized;
//  *      - the functions must be acessed as functions using ();
//  *      - the functions could be called on a console.log() function; they are not locked any way;
//  *      - the function to validade where filled with new lines, counterfacting the cut of the redundant functions digitOne and digitTwo previously placed;
//  *      - the 'atribute' isValid is no longer visualizable in the object atributes body.
//  * 
//  */

// function AltCPF (cpf) {
//     Object.defineProperty(this, 'cpf', {
//         enumerable: true,
//         configurable: false,
//         get: function () {
//             return cpf;
//         },
//     });
// }
// AltCPF.prototype.cleanCPF = function () {
//     return this.cpf.replace(/\D+/g, '');
// };
// AltCPF.prototype.cutDigits = function () {
//     return this.cleanCPF().slice(0, -2);
// };
// AltCPF.prototype.numArray = function () {
//     return [...this.cutDigits()];
// };
// AltCPF.prototype.digits = function (vector) {
//     const sum = vector.reduce((ac, val, index, array) => {
//         return ac + Number(val) * (array.length + 1 - index);
//     }, 0);
//     const res = 11 - (sum % 11);
//     return (res > 9) ? '0' : String(res);
// };
// AltCPF.prototype.isValid = function () {
//     if (this.cleanCPF() === this.cleanCPF()[0].repeat(11)) return false;
//     const numOne = [...this.numArray()];
//     const digit1 = this.digits(numOne);
//     const numTwo = [...this.numArray(), digit1];
//     const digit2 = this.digits(numTwo);
//     return (digit1 == this.cpf[12] && digit2 == this.cpf[13]);
    
// };

// // ====== TESTS ====== TESTS ====== TESTS ====== TESTS ====== TESTS ====== TESTS

// const cpf2 = new AltCPF('705.484.450-52');

// console.log(cpf2);
// console.log(cpf2.isValid());
