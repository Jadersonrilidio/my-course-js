/**
 * function receive a number and:
 * 
 * if number is divisible by 3, FIZZ;
 * if number is divisible by 5, BUZZ;
 * if number is divisible by 3 and 5, FIZZBUZZ;
 * if number is not divisible by 3 and 5, return number
 * 
 * check if is Number;
 * number between 0 and 100;
 */

//========================================================
// FORMA 1
function fizzBuzz (n) {
    if (isNaN(n)) return NaN;  // (typof n !== 'number') return NaN
    if (n%3===0 && n%5===0) return 'FIZZBUZZ';
    if (n % 3 === 0) return 'FIZZ';
    if (n % 5 === 0) return 'BUZZ';
    return n;
}
for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}

//========================================================
// FORMA 2 - deu ruim
/*
const n = num;
console.log(isNaN(n) || n%3===0 && n%5===0 || n % 3 === 0 || n % 5 === 0 || n)
*/