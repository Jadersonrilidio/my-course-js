// ***** STRINGS *****

// there are three 03 types to concatenate strings:
// 01 - stringVariable.concat(otherStringVariable, 'otherString.');
// 02 - stringVariable + otherStringVariable + 'otherString.';
// 03 - `${stringVariable} ${otherStringVariable} other string.`; 

// ===============================================================================================

// source: Lesson 2.17 Mais sobre strings
const var2 = 12;
const str1 = 'sStTrRiInNgG';
console.log('01 -', str1[-1], str1[0], str1[1], str1[2], str1[3], str1[4], str1[5], str1[6], str1[7], str1[8], str1[9], str1[10], str1[11], str1[12]);
console.log('02 -', str1.charAt(0));
console.log('03 -', str1.charCodeAt(0)); // code number according to ASCII table
console.log('04 -', str1);
console.log('05 -', str1.concat('number')); // the same as + sign, or use comma (there are 3 forms + template strings)
console.log('06 -', str1.fixed()); // HTML element <tt></tt>
console.log('07 -', str1.indexOf('t', 4));
console.log('08 -', str1.lastIndexOf('n', 9));
console.log('09 -', str1.length);
console.log('10 -', str1.match(/[a-z]/gi)); // insert regular expression to match with
console.log('11 -', str1.replace(/t/, 'P')); // can use regular expression
console.log('12 -', str1.search(/tri/)); // similar to indexOf but accepts regular expressions
console.log('13 -', str1.slice(-10, -1));  // takes indexes from 1 to 3 (if use negative, is like the length minus the negative number)
console.log('14 -', str1.split('t', 2));
console.log('15 -', str1.toUpperCase());
console.log('16 -', str1.toLowerCase());
console.log('17 -', str1.trim()); // removes the white spaces added in front or after the string sequence, if any
console.log('18 -', str1.valueOf()); // convert object String into primitive string value
console.log('19 -', typeof str1);
console.log('20 -', var2.toString()); // return the string representation of, usefull for numbers
console.log('21 -', str1.strike()); // HTML element <strike></strike>
console.log('22 -', str1.substring(str1.length - 10, str1.length - 1)); // we better use .slice()
console.log('23 -', str1.padStart(str1.length + 3, '.'));
console.log('24 -', str1.padEnd(str1.length + 3, '.'));
// A LIST OF STRING METHODS CAN BE FOUND BY TYPING A .DOT AFTER A STRING VARIABLE

// ===============================================================================================

// CRIANDO UM ARRAY DE ÍNDICES DE CHAR OU SUBSTRING DE UMA STRING: 

const texto10 = 'uma string com varios caracteres em portugues do brazil com z';

// função executora: guarda os índices de uma substring ou um char de uma string em um array
function completeIndexOf (string, char) {
    const completeIndexArray = [];
    for (let i=0; i<string.length; i++) {
        if (string[i] === char) completeIndexArray.push(i);
    }
    return completeIndexArray;
}

// função certificadora: testa se os índices guardados estão corretos
function returnChar (string, char) {
    const tempArray = completeIndexOf(string, char);
    const charArray = [];
    for (let value of tempArray) {
        charArray.push(string[value]);
    }
    return charArray;
}

console.log(completeIndexOf(texto10, 'o'));
console.log(returnChar(texto10, 'o'));

// ===============================================================================================

