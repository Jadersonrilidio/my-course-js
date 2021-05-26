/*
Comparison operators:
>       greater than
>=      greater or equal than
<       lower than
<=      lower of equal than
==      equal            (value) - not recommended to use
===     strict equal     (value and typeof)
!=      not equal        (value) - not recommended to use
!==     strict not equal (value and typeof)
*/

console.log(10 > 5);
// or
const comp = 10 > 5;
console.log(comp);

const num1 = 10; // number
const num2 = '10'; // string
console.log(num1 == num2);
console.log(num1 === num2); // equal values but diferent types
