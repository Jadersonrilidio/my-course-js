// ***** NUMBERS *****

const num = new Number(9999);
let num1 = 9999;
let num2 = 9998.9999;  // IEEE 754-2008
console.log(typeof num, ' - ', typeof num1, ' - ', typeof num2)  // in Js numbers could be considered literal number (primitive number) or object, depending of how the value was initialized or got

console.log(num1, ' - ', num2);

// convert number decimals into to binary, octal and hexadecimal strings
console.log(num1.toString(2), ' - ', num2.toString(2));  // RETURNS A STRING
console.log(num1.toString(8), ' - ', num2.toString(8));  // RETURNS A STRING
console.log(num1.toString(16), ' - ', num2.toString(16));  // RETURNS A STRING

console.log(num1.toFixed(3), ' - ', num2.toFixed(3));  // RETURNS A STRING

console.log(num1.toExponential(5), ' - ', num2.toExponential(5));  // RETURNS A STRING

console.log(num1.toPrecision(8), ' - ', num2.toPrecision(5));

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values
console.log(num1.valueOf(), ' - ', num2.valueOf());

console.log(`
    EPSILON:             ${Number.EPSILON},
    MAX_SAFE_INTEGER:    ${Number.MAX_SAFE_INTEGER},
    MIN_SAFE_INTEGER:    ${Number.MIN_SAFE_INTEGER},
    MAX_VALUE:           ${Number.MAX_VALUE},
    MIN_VALUE:           ${Number.MIN_VALUE},
    POSITIVE_INFINITY:   ${Number.POSITIVE_INFINITY},
    NEGATIVE_INFINITY:   ${Number.NEGATIVE_INFINITY},
    NaN:                 ${Number.NaN}`
);

console.log(`
    isFinite:        ${Number.isFinite(num1)} : ${Number.isFinite(num2)},
    isInteger:       ${Number.isInteger(num1)} : ${Number.isInteger(num2)},
    isNaN:           ${Number.isNaN(num1)} : ${Number.isNaN(num2)},
    isSafeInteger:   ${Number.isSafeInteger(num1)} : ${Number.isSafeInteger(num2)},
    parseFloat:      ${Number.parseFloat(num1)} : ${Number.parseFloat(num2)},
    parseInt:        ${Number.parseInt(num1)} : ${Number.parseInt(num2)},
    toString:        ${Number.toString(num1)} : ${Number.toString(num2)}`
);

console.log('\n', 'Max Safe Integer legth: ', Number.MAX_SAFE_INTEGER.toString().length);

// GLOBAL METHODS TO TRANSFORM DATA TYPES INTO NUMBER:
console.log(Number('123.567'), typeof Number('123.567'));
console.log(parseInt('123.567'), typeof parseInt('123.567'));
console.log(parseFloat('123.567'), typeof parseFloat('123.567'));

console.log(Number(true));
console.log(Number(false));

// OBS: number method used on Date object returns a number in miliseconds
