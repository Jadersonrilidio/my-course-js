// ***** COMMOM WINDOW OBJECT METHODS ***** //
Window.alert('mensagem de alerta');
Window.confirm('mensagem de confirm');
Window.prompt('mensagem de escrita');


// ***** VALUES THROUGH REFERENCE EXAMPLES ***** //
let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);


// ***** SHORT-CIRCUIT ***** //
console.log('' || false || null || undefined || 0);
console.log('string' && true && 'valueOfInterest');
const shortCircuit = '' || false || null || undefined || 0;
const shortCircuit2 = 'string' && true && 'valueOfInterest';
const clientColor = null;
const backgroundColor = clientColor || '#FFF'; // if clientColor is set, the background color changes to clientColor, if is null, the background chooses a default color '#FFF'


// ***** TERNARY OPERATORS ***** //
const cash = 1000
const ternaryOperator = cash >= 100 ? 'VIP client' : 'Normal Client';


// ***** USEFULL FUNCTION - ADD ZEROS ON LEFT ***** //
function zeroToLeft (number) {
    return number >= 10 ? number : `0${number}`;
}
const zeroToLeft2 = (number) => number >= 10 ? number : `0${number}`;
console.log(zeroToLeft(date5.getDate()), zeroToLeft2(date5.getDate()));


// ***** ATRIBUTION BY DESTRUCTURATION - ARRAYS ***** //
let a = 'A';
let b = 'B';
let c = 'C';
// MODE 1
[a, b, c] = [b, c, a];
// MODE 2
const letters = [b, c, a];
[a, b, c] = letters;
console.log(a, b, c);
const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [firstNum, secondNum, ,forthNum, ...rest] = numbers;
console.log(firstNum, secondNum, forthNum);
console.log(rest);


// ***** ATRIBUTION BY DESTRUCTURATION - OBJECTS ***** //
const pessoa = {
    nome: 'Jay',
    sobrenome: 'rods',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 70
    }
};
const { nome:change='não_existe', sobrenome, idade, endereco: { rua:R, numero='0' }, sexo='_NAO_EXISTE', ...rest } = pessoa;
console.log(change, sobrenome, idade, R, numero, sexo, rest);


// ***** FOR_IN  AND  FOR_OF  AND  FOR_EACH() ***** //
const fruits = ['apple', 'pineapple', 'orange', 'watermellon'];
for (let index in fruits) {
    console.log(index, fruits[index]);
}
for (let value of fruits) {
    console.log(value);
}
// works for arrays, objects, strings
const person = {
    nome: 'jay',
    sobrenome: 'rods',
    idade: 33
}
for (let key in person) {
    console.log(key, person[key]);
}
// alto there is a .forEach() function that can be used with arrays  
const vetor = [100, 200, 300, 400, 500, 600, 700, 800];
vetor.forEach( (value, index, array) => console.log(`Index ${index} - ${value} times.`) );
// for of also works with strings, but no objects
const texto = 'asdfqwer';
for (let index in texto) {
    console.log(index, texto[index]);
}
for (let value of texto) {
    console.log(value);
}


// ***** SET_INTERVAL  AND  SET_TIMEOUT ***** //
function geraHra () {
    console.clear();
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', { hour12: false });
}
const timer = setInterval(() => console.log(geraHora()), 1000);
setTimeout(function () {
    clearInterval(timer);
}, 5000);
// SYNTAX:
setInterval(AnonFunction(), 'interval in miliseconds');
setTimeout(AnonFunction(), 'rumtime in miliseconds');


// ***** CASTING EXAMPLES ***** //
const nomes1 = new Array('nome1', 'nome2', 'nome3');
const booleano = new Boolean('false');
const numero = new Number('11234');
const stringue = new String(12345);
console.log(`
    Array:      ${nomes1} / ${nomes1 instanceof Array}
    Boolean:    ${booleano} / ${booleano instanceof Boolean}
    Number:     ${numero} / ${numero instanceof Number}
    String:     ${stringue} / ${stringue instanceof String}
`);