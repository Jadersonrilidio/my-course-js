/*
705.484.450-52

dígitos         7x   0x   5x   4x   8x   4x   4x   5x   0x   
mutiplicador    10   09   08   07   06   05   04   03   02
resultado       70   00   40   28   48   20   16   15   00
soma            = 237
calculo digito  11 -(237 % 11) = 5 (Primeiro dígito - Se o número dígito for maior que 9, consideramos 0)

dígitos         7x   0x   5x   4x   8x   4x   4x   5x   0x   5x   
mutiplicador    11   10   09   08   07   06   05   04   03   02
resultado       77   00   45   32   56   24   20   20   00   10
soma            = 284
calculo digito  11 -(284 % 11) = 2 (Primeiro dígito - Se o número dígito for maior que 9, consideramos 0)

CPF gerado: 705.484.450-52
*/

class ValidateCPF {
    constructor (sentCpf) {
        this.sentCpf = sentCpf;
    }

    validate () {
        const cpf = this.sentCpf;
        const clearCpf = ValidateCPF.clearCPF(cpf);
        const arrayCpf = ValidateCPF.arrayCPF(clearCpf);

        const digit1 = ValidateCPF.getDigit(arrayCpf.slice(0, -2));
        const digit2 = ValidateCPF.getDigit(arrayCpf.slice(0, -1));

        if (digit1 == arrayCpf[9] && digit2 == arrayCpf[10]) return true;
        return false;
    }

    static clearCPF (sentCpf) {
        return sentCpf.replace(/\D+/g, '');
    }

    static getDigit (arrayCpf) {
        const total = arrayCpf.reduce((ac, value, index) => value * (arrayCpf.length - index + 1), 0);
        const digit = 11 - (total % 11);
        return digit <= 9 ? digit : 0;
    }

    static arrayCPF (cpfNumber) {
        return Array.from(cpfNumber);
    }
}

// TESTS
const cpf1 = new ValidateCPF('705.484.450-52');
console.log(cpf1)
console.log(cpf1.validate());
