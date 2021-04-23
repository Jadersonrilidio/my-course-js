/*
 Aritmetic operators
 
 +  addition or concatenation

 -  subtraction

 *  multiplication

 /  division

 ** exponenciation

 %  rest of division (module of division)
 
 */

// js automatically use a cast to convert string number to number
const num1 = 10;
const num2 = '5';
console.log(num1 * num2);

// however if:
const num3 = 10;
const num4 = parseInt('5.2'); // parseInt convert to a integer
console.log(num3 * num4);

// could be used parseFloat:
const num5 = 10;
const num6 = parseFloat('5.2');
console.log(num5 * num6);

// could be used Number:
const num7 = 10;
const num8 = Number('5.2');
console.log(num7 * num8);
