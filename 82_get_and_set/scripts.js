class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log('Au au!');
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}

let pastor = new Cachorro('Pastor Alemão', 'Sem cor');
console.log(pastor);

pastor.setCor = 'Marrom';
console.log(pastor.getCor);

// Get - serve para RESGATAR o valor de uma propriedade;

// Set - serve para ALTERAR o valor de uma propriedade;