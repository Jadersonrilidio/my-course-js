// creating a literal object using  quotes {}
const pessoa = {
    nome: 'João',
    sobrenome: 'Rodrigues'
};
console.log(pessoa['nome']);
console.log(pessoa.nome);
// ou
const chave = 'nome';
console.log(pessoa[chave]);

// creating a object using by a new instance of Object

const pessoa1 = new Object();
pessoa1.nome = 'Jorge';
pessoa1.sobrenome = 'Bento';

console.log(pessoa1['nome']);
console.log(pessoa1.nome);

// to delete a key from the object

delete pessoa1.nome;
console.log(pessoa1.nome);
console.log(pessoa1.apelido);

// it's possible to declara a functions directly inside the object

pessoa.falarNome = function () {
    return `${this.nome} está falando seu nome.`;
};
console.log(pessoa.falarNome());

pessoa.idade = 33;
pessoa.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade - 1;
};
console.log(pessoa.getDataNascimento());

// to visualize the keys from an object

for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}

// model functions to create objects: factory functions / constructor functions / classes
// factory functions
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);

// constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2);

// to freeze an object (look its 'key: value' values)
// OBS: the function below could also be used inside an object, however it is not recomended as best practice
// work with arrays as well
Object.freeze(p1);
