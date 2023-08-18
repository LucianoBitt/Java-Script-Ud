let cachorro = {
    raca: 'SRD'
}

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemão';
console.log(pastorAlemao.raca);


cachorro2 = {
    raca: 'SRD',
    patas: 4,
    latir: function() {
        console.log("Au au!");
    }
}

let labrador = Object.create(cachorro2);
labrador.latir();
labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(labrador.patas);