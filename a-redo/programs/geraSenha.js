// function Senha (size, hasNumber, hasLower, hasUpper, hasSymbol) {    
//     this.sets = ['0123456789', 'abcdefghijklmnopqrstuvxwyz', 'ABCDEFGHIJKLMNOPQRSTUVXWYZ', ',.;:/?-_@#$%&'];
    
//     this.size = size;
//     this.options = [hasNumber, hasLower, hasUpper, hasSymbol];
    
//     this.createSet = function () {
//         let tempSet = '';
//         for (let i=0; i < 4; i++) {
//             if (this.options[i]) tempSet += this.sets[i];
//         }
//         return tempSet;
//     };

//     this.mySet = this.createSet();

//     this.randNumber = function (min=0, max) {
//         return Math.floor(Math.random() * (max - min) + min); 
//     };

//     this.generateChar = function () {
//         const max = this.mySet.length - 1;
//         const result = this.randNumber(0, max);
//         return this.mySet[result];
//     };

//     this.generatePassword = function () {
//         let password = '';
//         for (let i=0; i<this.size; i++) {
//             password += this.generateChar();
//         }
//         return password;
//     };
// }

// // ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== 

// const senha1 = new Senha(20, true, true, true, true);
// console.table(senha1);
// console.log(senha1.size);
// console.log(senha1.options);
// console.log(senha1.createSet());
// console.log(senha1.generateChar());
// console.log(senha1.generatePassword());

// =============================================================================
/**
 * // ***** SECOND ALTERNATIVE ***** //
 * 
 * 
 */

 function Senha (size, hasNumber, hasLower, hasUpper, hasSymbol) {    
    this.size = size;
    this.options = [hasNumber, hasLower, hasUpper, hasSymbol];    

    Object.defineProperties(Object.prototype, {
        charSet: {
            enumerable: false,
            configurable: false,
            get: function () {
                console.log('FLAG 0');
                return ['0123456789', 'abcdefghijklmnopqrstuvxwyz', 'ABCDEFGHIJKLMNOPQRSTUVXWYZ', ',.;:/?-_@#$%&'];
            }
        },
        mySet: {
            enumerable: false,
            configurable: false,
            get: function () {
                console.log('FLAG 1');
                let tempSet = '';
                for (let i=0; i < 4; i++) {
                    if (this.options[i]) tempSet += this.charSet[i];
                }
                return tempSet;
            }
        },
        randNumber:{
            enumerable: false,
            configurable: false,
            get: function () {
                console.log('FLAG 2');
                const max = this.mySet.length - 1;
                return Math.floor(Math.random() * max);
            } 
        },
        generateChar: {
            enumerable: false,
            configurable: false,
            get: function () {
                console.log('FLAG 3');
                const max = this.mySet.length - 1;
                const result = this.randNumber;
                return this.mySet[result];
            }
        },
        generatePassword: {
            enumerable: false,
            configurable: false,
            get: function () {
                console.log('FLAG 4');
                let password = '';
                for (let i=0; i<this.size; i++) {
                    password += this.generateChar;
                }
                return password;
            }
        },
    });

    this.password = this.generatePassword;
}
    
// ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== 

const senha1 = new Senha(18, true, true, true, false);

console.table(senha1);
