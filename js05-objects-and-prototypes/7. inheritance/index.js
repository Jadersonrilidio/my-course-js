// produto
// camiseta, caneca

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (q) {
    this.preco += q;
};
Produto.prototype.desconto = function (q) {
    this.preco -= q;
};

//====================================================================
function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (p) {
    this.preco *= 1 + (p / 100);
};

//====================================================================
function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        },
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function (p) {
    this.preco *= 1 + (p / 100);
};
Caneca.prototype.desconto = function (p) {
    this.preco *= 1 - (p / 100);
};

const produto1 = new Produto('AMOSTRA', 100);
const camiseta1 = new Camiseta('regata', 7.5, 'preta');
const caneca1 = new Caneca('caneca', 13, 'plastico', 5)
camiseta1.aumento(10);
caneca1.estoque = 100;
console.log(produto1);
console.log(camiseta1);
console.log(caneca1.estoque);
console.log(caneca1);

