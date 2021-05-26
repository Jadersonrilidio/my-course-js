// Function declaration (function hoisting mechanism - the compiler reads the functions at first
// independent of its declaration line)
function falarOi () {
    console.log('Oi');
}

// Functions are first-class objects

// Function expression
const souUmDado = function () {
    console.log('sou um dado');
};

souUmDado();

function executeFunction (funcao) {
    console.log('vou executar sua função abaixo');
    funcao(); 
}
executeFunction(souUmDado);

// Arrow function
const arrowFunction = () => {
    console.log('sou uma arrow funciton');
};

arrowFunction();
executeFunction(arrowFunction);

setInterval(arrowFunction, 1000);

// Funciton inside objects
const Obj = {
    nome: 'jay',
    idade: 32,
    falar: function () {
        console.log('quero falar...');
    },
    falando () {
        console.log('estou falando...');
    }
};
Obj.falar();
Obj.falando();
setInterval(Obj.falando, 3000);