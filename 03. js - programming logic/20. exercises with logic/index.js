const num1 = 12;
const num2 = 23;

//==============================================================
// FORMA 1
const max1 = (num1, num2) => Math.max(num1, num2);
const min1 = (num1, num2) => Math.min(num1, num2);

console.log('Max 1:');
console.log(max1(num1, num2));
console.log(min1(num1, num2));

//==============================================================
// FORMA 2
const max2 = (num1, num2) => num1 > num2 ? num1 : num2;
const min2 = (num1, num2) => num1 > num2 ? num2 : num1;

console.log('Max 2:');
console.log(max2(num1, num2));
console.log(min2(num1, num2));

//==============================================================
// FORMA 3
console.log('Max 3:');
console.log(num1 > num2 ? num1 : num2);
console.log(num1 > num2 ? num2 : num1);
