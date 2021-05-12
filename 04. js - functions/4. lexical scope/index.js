// when a function is declared and a variable is called inside this function, it tries first to find the
// variable inside the function scope, if not, the function automaticaly look at its surroundings where
// it was declared, it could be another function's scope or a global scope, in the last case
const nome = 'Luiz';

function falaNome () {
    console.log(nome);
}

function useFalaNome () {
    const nome = 'Jay';
    falaNome();
}

useFalaNome();