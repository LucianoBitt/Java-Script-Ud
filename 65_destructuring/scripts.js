const person = {
    name: "Luciano",
    lastname: "Bittencourt"
}

const { name: fname, lastname: lname } = person;

console.log(fname);
console.log(lname);


let carro = {
    rodas: 4,
    portas: 4,
    cor: 'Preto',
    motor: '2.0',
    turbo: true
}

const { rodas: vrodas, portas: vportas, cor: vcor, motor: vmotor, turbo: vturbo } = carro;

console.log(vrodas + ' Rodas');
console.log(vportas + ' Portas');
console.log('Cor ' + vcor);
console.log('Motor ' + vmotor);
console.log(vturbo);