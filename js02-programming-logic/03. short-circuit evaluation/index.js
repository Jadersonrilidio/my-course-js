/*
FALSY - false values - given as a literal false
0
null    undefined
''  ""  ``
NaN

everything else diferent of FALSY will be considered true
*/

// if all values are true, then return the last given value, in this case, 'Maria'
console.log('Luiz' && 'Jonh' && 'Maria');
// if it encounters a FALSY value, the comparison stops and return the FALSY value
console.log('Luiz' && NaN && 'Maria'); //a short circuit happens

// using OR returns the first true value
console.log(0 || false || null || 'Luiz' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'red';
console.log(corPadrao);

// if all are false, return the last false value
console.log(0 || false || null || NaN);
