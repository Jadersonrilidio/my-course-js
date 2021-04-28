/*
let i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}

const nome = 'Jaderson';
let j = 0;

while (j < nome.length) {
    console.log(nome[j]);
    j++;
}
*/

// exercise

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let counter = 0;
let rand = random(min, max);

while (rand !== 49) {
    rand = random(min, max);
    counter++;
    console.log(`${counter} : ${rand}`);
}

console.log('########');

do {
    rand = random(min, max);
    counter++;
    console.log(`${counter} : ${rand}`);
} while (rand !== 49);