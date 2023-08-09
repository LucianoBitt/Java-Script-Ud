let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
}

let objetoB = {
    prop3: 'propriedade'
}

Object.assign(objetoA, objetoB);
console.log(objetoA);


let carro = {
    portas: 4,
    portamalas: '200 Litros',
    motor: 2.0
}

let adicionais = {
    tetosolar: true,
    arcond: true
}

console.log(carro);
Object.assign(carro, adicionais);
console.log(carro);