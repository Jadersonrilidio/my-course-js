// .defineProperty & .defineProperties

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

let estoquePrivado = estoque;

    Object.defineProperty (this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // pode configurar o objeto (deletar, outras ações)
        // value: estoque, // valor
        // writable: true, // pode alterar o valor
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('bad error');
            }
            estoquePrivado = valor; 
        }
    });

}
const pro1 = new Produto('Camiseta', 20, 3);
pro1.estoque = 30;
console.log(pro1.estoque);

// with factory functions =======================================================

function criaProduto (nome) {
    return {
        get nome () {
            return nome;
        },
        set nome (valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}
const pro2 = criaProduto("Camisetas");
pro2.nome = 'qualquer coisa';
console.log(pro2.nome);