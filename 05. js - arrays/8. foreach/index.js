const a1 = [1000, 2000, 3000];

a1.forEach(function (value, index, array) {
    console.log(value, index, array);
});


let total = 0;
a1.forEach(value => {
    total += value;
});
console.log(total);