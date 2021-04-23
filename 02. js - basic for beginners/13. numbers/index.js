// IEEE 754-2008 js number pattern standard
let num1 = 100;
let num2 = 2.1515151515;

console.log(num1 + num2);
console.log(num1.toString() + num2);
console.log(num1.toString); // transform number into string

console.log(num1.toString(2)); // get the binary version of the string number

console.log(num2.toFixed(2)); // reduce the decimals to 2

console.log(Number.isInteger(num1)); // find out it a number is interger, return bool
console.log(Number.isInteger(num2));

let tempNum = num1 + 'olá'; // return a NaN - Not a Number variable
console.log(Number.isNaN(tempNum)); // return bool

// decimals issue on js (solved by adjust values as follow below)
let num3 = 0.7;
let num4 = 0.1;
let num5 = num3 + num4;
console.log(num5)
num5 = parseFloat(num5.toFixed(2));
console.log(num5);