function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            //let [ valor1, ...resto ] = valor;
            //this.nome = valor1;
            //this.sobrenome = resto.join(' ');
        },

        fala: function (assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,

        // getter function - not eligible to receive new arguments
        get imc () {
            const indice = this.peso / Math.pow(this.altura, 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.78, 87);
console.log(p1.fala('está falando sobre js'));
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.imc);
p1.nomeCompleto = 'Jay Rodrigues Ilidio';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
