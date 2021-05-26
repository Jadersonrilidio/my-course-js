const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome;
// console.log(nome);

const { nome: teste = 'Não existe', endereco: { rua: logradouro = 'Inexistente', numero}, ...resto } = pessoa;
console.log(teste, logradouro, numero);
console.log(resto);