class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log('Au au!');
    }
}

let golden = new Cachorro('Golden', 'Caramelo');
Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.cor = 'Caramelo';

let patas = Symbol();
Cachorro.prototype[patas] = 4;

golden.latir();

console.log(golden.raca);
console.log(golden.cor);
console.log(Cachorro.prototype.raca);

// acessando o Symbol
console.log(Cachorro.prototype[patas]);