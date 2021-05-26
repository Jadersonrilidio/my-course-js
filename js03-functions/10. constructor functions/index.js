function Pessoa (nome, sobrenome) {
    
    // variáveis privadas. atributos ou métodos privados - só funcionam dentro da função
    const ID = 123456;
    const metodoInterno = () => 'SOU UM METODO INTERNO.';
    const metodoInterno2 = function () {
        return 'QUALQUER INFORMAÇÃO INTERNA.';
    }

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(metodoInterno(), metodoInterno2());
        return this.nome + ' SOU UM METODO.';
    }
}

const p1 = new Pessoa('Jay', 'Rodrigues');
console.log(p1);
console.log(p1.metodo());

// console.log(metodoInterno()); - does not work externally of the function