const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if ((numero % 2) === 0) {
        console.log(`Pulei o número ${numero}.`);
        continue;
    }
    if (numero === 9) {
        console.log(`Parei no número ${numero}`);
        break;
    }
    console.log(numero);
}

