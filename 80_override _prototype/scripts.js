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

golden.latir();

console.log(golden.raca);
console.log(golden.cor);
console.log(Cachorro.prototype.raca);