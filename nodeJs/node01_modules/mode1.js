const nome = 'Luiz';
const sobrenome = "Miranda";

const falaNome = () => {
    console.log(nome, sobrenome);
    return nome  + ' ' + sobrenome;
};

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

//exports.nome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;

this.qualquerCoisa = 'O que eu quiser';
this.nomes = 'Luiz Miranda';
//this.falaNome = falaNome;

// TESTES ============================================================

console.log(module);
console.log(module.exports);
console.log(exports);