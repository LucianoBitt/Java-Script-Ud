function nomeComIdade(nome, idade) {
    if (idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos.");
    }
}

nomeComIdade("Luciano");
nomeComIdade("Luciano", 45);


function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos.");
    } else {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1, 2));


function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log("Olá, " + nome + " !");
    } else {
        console.log("Olá, " + nome + " ! Você tem " + idade + " anos.");
    }
}

saudacao("Luciano");
saudacao("Luciano", 45);