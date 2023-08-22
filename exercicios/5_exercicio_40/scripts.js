class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(valor) {
        this.saldoCC += valor;
    }

    saque(valor) {
        this.saldoCC -= valor;
    }

    transrenciaCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transrenciaCC(valor) {
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosNiver() {
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros * 2);
    }
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.saque(500);
console.log(conta);

conta.deposito(5000);
console.log(conta);

conta.transrenciaCP(3000);
console.log(conta);

conta.jurosNiver();
console.log(conta);

let conta2 = new ContaEspecial(10000, 50000, 1);
console.log(conta2);

conta2.saque(5000);
console.log(conta2);

conta2.jurosNiver();
console.log(conta2);