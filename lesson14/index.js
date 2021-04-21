// we can use the inverted slash '\' to use certain features inside a string
let umaString = "Um \"texto\" aqui \\inverted slash";
console.log(umaString);

//                 01234567
let otherString = "um texto"
console.log(otherString[1]); // return the character on the index '1', equals 'm'

// forms of concatenation
console.log(umaString.concat(' em um lindo dia '.concat(otherString)));
console.log(umaString + ' em um lindo dia ' + otherString );
console.log(umaString, 'em um lindo dia', otherString);
console.log(`${umaString} em um lindo dia ${otherString}`);

// search the typed character/sequence inside the string from index 0 to last
console.log(otherString.indexOf('um'));
console.log(otherString.indexOf('o', 3));

// search the typed character/sequence inside the string from index last to 0
console.log(otherString.lastIndexOf('um'));
console.log(otherString.lastIndexOf('m', 3));

// regular expressions
console.log(otherString.match(/[a-z]/g));
console.log(otherString.match(/[a-z]/));

console.log(otherString.search(/[a-z]/));
console.log(otherString.search(/x/)); // similar to indexOf, however accepts regular expressions

console.log(otherString.replace('um', 'outra'));
console.log(otherString.replace('t', '#'));
console.log(otherString.replace(/um/, 'outra'));
console.log(otherString.replace(/t/g, '#'));

console.log(otherString.slice(0, 2));
console.log(otherString.slice(-5, -1));
console.log(otherString.substring(otherString.length - 5));
console.log(otherString.substring(otherString.length - 5, otherString.length - 1));

console.log(otherString.split(' '));
console.log(otherString.split(' ', 1));

// size - number of characters
console.log(otherString.length);



