let a = 5;
let b = 3;

if (a + b == 3) {
    console.log('O resultado é 3');
} else if (a == 4) {
    console.log('O valor de a é 4');
} else if (b == 3) {
    console.log('O valor de b é 3');
} else {
    console.log('Nenhuma das condições acima!');
}

let nome = "Luciano";
let idade = 40;

if (nome != undefined && nome == "Rafael") {
    console.log("Nome está definido");
} else if (nome == "Luciano" && nome.length > 5 && idade == 50) {
    console.log("O nome é Luciano");
} else {
    console.log("Não é Luciano!");
}

if (1 > 2) {
    console.log("Teste");
} else if (1 == 1) {
    console.log("Testando!");
}