// .defineProperty & .defineProperties

function Produto (nome, preco, estoque) {

    Object.defineProperty (this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor
        configurable: true // pode configurar o objeto (deletar, outras ações)
    });

    Object.defineProperties (this, {
        nome: {
            enumerable: true,
            value: nome, 
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true,
            configurable: true
        },
    });
}

const pro1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(pro1));

for (let chave in pro1) {
    console.log(chave);
}