function escreverNoConsole() {
    console.log("Escrever no console!");
}

escreverNoConsole();

const textoNoConsole = function() {
    console.log("Texto no console!");
}

textoNoConsole();

const textPorParametro = function(texto) {
    console.log(texto);
}

textPorParametro("Testando por parâmetro!");

function imprimirNoConsole() {
    console.log("Olá, Mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(7);

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();