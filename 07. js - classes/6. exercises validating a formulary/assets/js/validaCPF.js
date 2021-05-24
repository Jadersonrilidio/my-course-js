class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: false,
            configurable: false
        });
    }

    isSequence () {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    }

    geraNovoCpf () {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }


    static geraDigito (cpfSemDigitos) {
        // const cpfArray = Array.from(cpfSemDigitos);
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for (let stringNum of cpfSemDigitos) {
            total += Number(stringNum) * reverso;
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida () {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.cpfLimpo === this.isSequence()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}

/*
const cpf1 = new ValidaCPF('070.987.720-03');
console.log(cpf1);
console.log(cpf1.valida());
*/