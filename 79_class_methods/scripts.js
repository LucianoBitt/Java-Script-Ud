class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir() {
        console.log('Au au!');
    }
}
Cachorro.prototype.cor = 'Caramelo';

let poodle = new Cachorro('Poodle', 4, 'Caramelo');

console.log(poodle);
poodle.latir();