// IIFE - Immediately Invoked Function Expression

(function (idade, peso, altura) {
    
    const sobrenome = 'Miranda';
    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome () {
        console.log(criaNome('Luiz'));
    }

    function atributosDePessoa () {
        const Pessoa = {
            idade, peso, altura
        };
        return Pessoa;
    }

    falaNome();
    console.log(atributosDePessoa());

})(33, 87, 1.78);
