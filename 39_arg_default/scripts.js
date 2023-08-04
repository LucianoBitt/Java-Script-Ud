function repetirFrase(frase, n = 5) {
    for (let x = 1; x <= n; x++) {
        console.log(frase + " " + x);
    }
}

repetirFrase("Testando", 5);
repetirFrase("Cinco vezes.");


function potencia(base, exp = 2) {
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));