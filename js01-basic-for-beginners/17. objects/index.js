
// objects creation, used as struct in solidity.
const pessoa1 = {
    nome = 'jaderson',
    sobrenome = 'rodrigues',
    idade = 33,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} diz: Olá mundo`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.nome);
console.log(pessoa1.idade);

// function to create objects
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa2.nome);
console.log(pessoa2.idade);

// or even use like this:
function criaPessoa2 (nome, sobrenome, idade) {
   return {nome, sobrenome, idade};
}

// or even: I AM NOT SURE THAT IS RIGHT???
// const pessoa3 = (nome, sobrenome, idade) => {nome, sobrenome, idade};
