// ***** MATH METHODS *****

// Math.random() 	Returns a random number between 0 and 1

// Math.ceil(x) 	Returns x, rounded upwards to the nearest integer
// Math.round(x) 	Rounds x to the nearest integer
// Math.floor(x) 	Returns x, rounded downwards to the nearest integer

// Math.log(x)  	Returns the natural logarithm (base E) of x
// Math.log2(x) 	Returns the natural logarithm (base 2) of x
// Math.log10(x) 	Returns the natural logarithm (base 10) of x

// Math.max(x, y, ..., n) 	Returns the number with the highest value
// Math.min(x, y, ..., n) 	Returns the number with the lowest value

// Math.pow(x, y) 	Returns the value of x to the power of y
// Math.sqrt(x) 	Returns the square root of x
// Math.cbrt(x) 	Returns the cubic root of x

// Math.sign(x) 	Returns if x is negative, null or positive (-1, 0, 1)
// Math.trunc(x) 	Returns the integer part of a number (x)
// Math.abs(x) 	    Returns the absolute value of x
// Math.exp(x)  	Returns the value of Ex

// ==============================================================================

let num1 = 10;
let num2 = 9.95;

console.log(num1, num2);

console.log(Math.max(num1, num2), Math.min(num1, num2));

console.log(Math.floor(num2), Math.ceil(num2), Math.round(num2));
console.log(Math.log(num1), Math.log2(10), Math.log10(num1));

console.log(Math.random());

console.log(`
    Math Constants:
    E:          ${Math.E}
    LN10:       ${Math.LN10}
    LN2:        ${Math.LN2}
    LOG10E:     ${Math.LOG10E}
    LOG2E:      ${Math.LOG2E}
    PI:         ${Math.PI}
    SQRT1_2:    ${Math.SQRT1_2}
    SQRT2:      ${Math.SQRT2}
`);
