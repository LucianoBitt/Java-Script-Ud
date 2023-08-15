let onibus = {
    rodas: 8,
    limitePass: 45,
    portas: 2
};

delete onibus.rodas;
onibus.janelas = 20;

console.log(onibus);
console.log(onibus.rodas);
console.log(onibus.limitePass);
console.log(onibus.portas);
console.log(onibus.janelas);