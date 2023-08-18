class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta(2000);
conta.deposito(8000);
console.log(conta.saldo);

conta.saque(3500);
console.log(conta.saldo);