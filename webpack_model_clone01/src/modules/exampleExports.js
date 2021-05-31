
const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;
const cpf = '064.476.096-76';

// export default (x, y) => x, * y;

export default function soma (x, y) {
    return x + y;
}

export class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }
}

export { nome, sobrenome as sobrenome2, idade, soma };

// export { nome, sobrenome as sobrenome2, idade, soma as defaltu};
