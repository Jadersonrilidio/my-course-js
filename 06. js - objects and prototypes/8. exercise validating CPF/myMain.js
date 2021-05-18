/*
705.484.450-52

dígitos         7x   0x   5x   4x   8x   4x   4x   5x   0x   
mutiplicador    10   09   08   07   06   05   04   03   02
resultado       70   00   40   28   48   20   16   15   00
soma            = 237
calculo digito  11 -(237 % 11) = 5 (Primeiro dígito - Se o número dígito for maior que 9, consideramos 0)

dígitos         7x   0x   5x   4x   8x   4x   4x   5x   0x   5x   
mutiplicador    11   10   09   08   07   06   05   04   03   02
resultado       77   00   45   32   56   24   20   20   00   10
soma            = 284
calculo digito  11 -(284 % 11) = 2 (Primeiro dígito - Se o número dígito for maior que 9, consideramos 0)

CPF gerado: 705.484.450-52
*/

// receber os dígitos (9) sem pontuação: XXXXXXXXX
const number = '705484450';
const cpfNumber = generateCPF(number);
const cpf = generateFormatedCPF(number);

// MAIN FUNCTION
function generateCPF (number) {
    const number2 = concatenateDigit(number, getDigit1(number));
    return concatenateDigit(number2, getDigit2(number2));
}

// TRABALHAR O CPF para apresentar no formato XXX.XXX.XXX-XX
function generateFormatedCPF (number) {
    const cpfNumber = generateCPF(number);
    const n1 = cpfNumber.slice(0, 3);
    const n2 = cpfNumber.slice(3, 6);
    const n3 = cpfNumber.slice(6, 9);
    const n4 = cpfNumber.slice(9, 11);
    return `${n1}.${n2}.${n3}-${n4}`;
}

// funções que geram o dígito a partir de um número
function getDigit1 (number) {
    const arrayNumber = createArray(number);
    const result = getSum1(arrayNumber);
    return generateDigit(result);
}

function getDigit2 (number) {
    const arrayNumber = createArray(number);
    const result = getSum2(arrayNumber);
    return generateDigit(result);
}

// checar se é string, se não, transformar em string
function createArray (variable) {
    const stringVariable = createString(variable);
    return Array.from(stringVariable);
}
function createString (variable) { // MAIN
    if (isString(variable)) {
        return variable;
    }
    return variable.toString();
}
function isString (variable) {
    return typeof variable === 'string';
}

// pegar dígito a dígito da string, transformar em number, multiplicar pelo multiplicador, somar
function getSum1 (variable) { 
    return variable.reduce((ac, val, i) => ac += val * (10 - i), 0);
}

function getSum2 (variable) {
    return variable.reduce((ac, val, i) => ac += val * (11 - i), 0);
}

// gerar dígito a partir do resultado, com a fórmula  11 -(result % 11) = DIGIT
function generateDigit (result) {
    const digit = (11 - (result % 11));
    if (digit > 9) return '0';
    return digit;
}

// concatenar dígito ao número inicial
function concatenateDigit (number, digit) {
    return number.toString().concat(digit.toString());
}

// TESTAGEM
console.log(number, typeof number);
console.log(cpfNumber, typeof cpfNumber);
console.log(cpf, typeof cpf);
