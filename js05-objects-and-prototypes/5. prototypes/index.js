// função construtora -> molde (classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL-> ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// instância
const p1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = função construtora
const p2 = new Pessoa('Maria', 'A.'); // <- Pessoa = função construtora

console.dir(p1);
console.dir(p2);