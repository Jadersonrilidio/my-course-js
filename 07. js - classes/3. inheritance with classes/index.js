// FORMAS DE ACESSO DA VARIÁVEL ligado:
// GETTER - para ver estado
// FUNÇÕES - para mudar estado
const _ligado = Symbol('ligado');

class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this[_ligado] = false;
    }

    // SETTER - não necessita

    // GETTER
    get ligado () {
        console.log('GETTER');
        return this[_ligado];
    }

    // FUNÇÃO - para mudar o estado
    ligar () {
        if (this[_ligado]) return;

        this[_ligado] = true;
    }

    // FUNÇÃO - para mudar o estado
    desligar () {
        if (!this[_ligado]) return;
        this[_ligado] = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor (nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor (nome, wifi) {
        super(nome);
        this.wifi = wifi;
    }

    ligar () {
        console.log('você alterou o método ligar');
    }

    falaOi () {
        console.log('Oi');
    }
}

// TESTES
const s1 = new Smartphone('iPhone', 'Preto', 'Galaxy S10');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.falaOi();
console.log(t1);