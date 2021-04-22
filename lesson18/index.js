// função recebe um valor, faz uma ação e pode ou não retornar um valor baseado nesta ação

// 1st example:

function saudacao(nome) {
    console.log(`bom dia! ${nome}`);
    return 123546;
}
saudacao('Luiz');
const variavel = saudacao('Luiz');
console.log(variavel); // retorna 123456

// 2nd example:

function soma(x=1, y=1) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
const resultado = soma(2, 2);
console.log(resultado);
console.log(soma(4));

// caracteriza uma função anônima em js
const raiz = function (n) {
    return Math.sqrt(n);
};
console.log(raiz(9));

// arrow function - forma reduzida da função anônima, simplificação
const raiz = (n) => {
    return Math.sqrt(n);
};
console.log(raiz(9));

// AINDA: forma mais simplificada possível de uma função:
const raiz = n => Math.sqrt(n);
console.log(raiz(9));