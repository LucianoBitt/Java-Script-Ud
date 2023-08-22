class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua José alves Carneiro", "Mesquita", "Rio de Janeiro", "RJ");
console.log(endereco);

endereco.novaRua = "Rua Caimirim";
console.log(endereco);

endereco.novoBairro = "Nilopolis";
console.log(endereco);

endereco.novaCidade = "São Paulo";
console.log(endereco);

endereco.novoEstado = "SP";
console.log(endereco);