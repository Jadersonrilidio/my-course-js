/**
 * funções estáticas são como funções de estado de uma classe,
 * sendo assim, quando se executa uma função estática de uma
 * respectiva classe, sua execução abrange todas as instâncias
 * dessa classe, por exemplo, se uma função estática incrementa
 * o valor de certa variável dentro da classe, este valor será 
 * incrementado para todas as instâncias existentes (há algumas
 * exceções a este comentário, considerando-se quais as condições
 * de contorno propostas)
 */

// função que mostra o objeto global do node.js / js
function teste () {
    console.log(this);
}

class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // método de instância
    aumentarVolume () {
        this.volume += 2;
    }

    // método de instância
    diminuirVolume () {
        this.volume -= 2;
    }

    // método estático
    static trocaPilha () {
        console.log('Pilhas novas');
    }
}

const controle1 = new ControleRemoto('LG');

// representação de uso: métodos de instância
controle1.aumentarVolume();
controle1.diminuirVolume();

// representação de uso: métodos estáticos
ControleRemoto.trocaPilha();

console.log(controle1);