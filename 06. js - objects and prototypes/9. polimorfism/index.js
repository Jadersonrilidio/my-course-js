function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insifuciente: ${this.verSaldo()}.`);
        return false;
    }
    if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Saque realizado com sucesso! \nSaldo atual: ${this.verSaldo()}.`);
        return true;
    }
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    console.log(`Depósito realizado com sucesso! \nSaldo atual: ${this.verSaldo()}.`)
    return true;
};

Conta.prototype.verSaldo = function () {
    return `R$${this.saldo.toFixed(2)}`;
};

//=========================================================================================
function CC (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente! \nSaldo disponível: ${this.verSaldo() + this.limite}.`);
        return false;
    }
    this.saldo -= valor;
    console.log(`Saque realizado com sucesso! \nSaldo atual: ${this.verSaldo()}.`);
    return true;
}

//=========================================================================================
function CP (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

//=========================================================================================
//TESTS:
const cc = new CC ('0274', '11432494', 0, 100);
cc.depositar(10);
cc.sacar(40);

console.log('');

const cp = new CP ('0274', '11432494', 0);
cp.depositar(10);
cp.sacar(40);