// strongly related to the lexical scope
const nome = 'Luiz';

function returnFunction (nome) {
    return function () {
        return nome;
    };
}

const funcao = returnFunction('negoBan');
console.log(funcao());
console.dir(funcao()); // show up the function on the console menu on the browser