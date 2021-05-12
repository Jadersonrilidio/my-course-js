const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2;
console.log(a3, typeof a3);

const a4 = a1.concat(a2, 7, 8, 9, [10, 11, 12], 'Luiz');
console.log(a4, typeof a4);

const a5 = [...a1, ...a2];
console.log(a5, typeof a5);
