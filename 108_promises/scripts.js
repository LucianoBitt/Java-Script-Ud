let promessa = Promise.resolve(4 + 8);
console.log('Algum Código');
promessa.then((value) => console.log(`A soma é ${value}`));


let p = Promise.resolve(7);
console.log("Outros Códigos...");
console.log(p);
p.then((value) => { console.log(`O valor é ${value}`) });


let prom = Promise.resolve(7);
console.log("Diversos Códigos...");
console.log(p);
prom.then((value) => { return value + 7 })
    .then((value) => { console.log(value); });