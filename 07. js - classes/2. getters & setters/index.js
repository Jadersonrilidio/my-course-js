
const _velocidade = Symbol('velocidade');

class Carro {
    constructor (nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade (valor) {
        if (typeof valor !== 'number') return;
        if (valor < 0 || valor > 100) return;
        this[_velocidade] = valor;
    }

    get velocidade () {
        return this[_velocidade];
    }

    acelerar () {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar () {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

// TESTS
const c1 = new Carro('fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

console.log(c1);

console.log(c1.velocidade);
c1.velocidade = 99;
console.log(c1.velocidade);
c1.velocidade = 101;
console.log(c1.velocidade);

// ============================================================================

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto () {
        console.log('GETTER');
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto (valor) {
        console.log('SETTER');
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' '); 
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Jaderson Rodrigues Ilídio';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log( p1.sobrenome);