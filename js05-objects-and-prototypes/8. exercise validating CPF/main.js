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

function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial.concat(digito1));

    if (digito1 == this.cpfLimpo[9] && digito2 == this.cpfLimpo[10]) return true;
    return false;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += Number(val) * regressivo;
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito; 
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

// função adicional para checar a validade do cpf:
ValidaCPF.prototype.checkCPF = function (cpf) {
    if (cpf.valida()) return `O CPF ${cpf.cpfLimpo} é válido`;
    return `O CPF ${cpf.cpfLimpo} é inválido`;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.checkCPF(cpf));
