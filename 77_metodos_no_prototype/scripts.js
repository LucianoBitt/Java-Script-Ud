function Cachorro(raca) {
    this.raca = raca;
}

Cachorro.prototype.latir = function() {
    console.log('Au au!');
}
Cachorro.prototype.uivar = function() {
    console.log('Auuuuuu!');
}

let pug = new Cachorro('Pug');

console.log(pug.raca);
pug.latir();
pug.uivar();