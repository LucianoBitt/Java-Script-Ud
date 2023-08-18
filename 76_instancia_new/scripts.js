function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function() {
        console.log("Au au!");
    }
}

let husky = new Cachorro('Husky', 4, 'Caramelo');
husky.latir();