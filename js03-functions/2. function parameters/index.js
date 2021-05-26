function funcao () {
    console.log('Oi');
    console.log(arguments)
    console.log(arguments[0]);
}
funcao('valor', 1, 2, 3, 4, 5, 6);
// todos os argumentos inseridos como parâmetros da função são salvos em um objeto chamado "arguments"
// arguments é um objeto com índices de 0 a n

function funcao2 () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao2(1, 2, 3, 4, 5, 6, 7);

// It is possible to set default values for parameters
function funcao3 (a, b=4, c=8) {
    console.log(a + b + c);
}
funcao3(2);

// It is possible to do disruption in function parameters
// disruption with objects
function funcao4 ({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = {
    nome: 'jay',
    sobrenome: 'rodrigues',
    idade: 33
};
funcao4(obj);

//disruption with arrays
function funcao5 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let array = ['jay', 'rodrigues', 33];
funcao5(array);

// Function with rest operator
function conta (operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);

//NOTE: there is no arguments in arrow functions, only when the word 'function' is specified
