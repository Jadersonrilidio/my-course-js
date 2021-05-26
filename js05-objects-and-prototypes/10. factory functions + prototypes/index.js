/*
function criaPessoa (nome, sobrenome) {
    const pessoaPrototype = {
        falar () {
            console.log(`${this.nome} está falando...`);
        },
        comer () {
            console.log(`${this.nome} está comendo...`);
        },
        beber () {
            console.log(`${this.nome} está bebendo...`);
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);
*/
// ==============================================================

//podemos desacoplar os métodos da função factory, como exemplo:
// chama-se na programação de COMPOSIÇÃO
//  esta COMPOSIÇÃO é chamada de MIXING, quando não se tem uma hierarquia de objetos
const falar = {
    falar () {
        console.log(`${this.nome} está falando...`);
    },
};

const comer = {
    comer () {
        console.log(`${this.nome} está comendo...`);
    },
};

const beber = {
    beber () {
        console.log(`${this.nome} está bebendo...`);
    },
};

const pessoaPrototype = { ...falar, ...comer, ...beber };
// Outra maneira usando-se assign:
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa (nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
p1.falar();
p1.comer();
p1.beber();