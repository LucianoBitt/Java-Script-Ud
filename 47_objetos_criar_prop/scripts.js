let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 2.0
}

console.log(carro.portas);
delete carro.portas;
console.log(carro.portas);
carro.tetoSolar = true;
console.log(carro.tetoSolar);


let pessoa = {
    nome: "Victoria",
    idade: 13,
    profissao: "Estudante",
}

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);
pessoa.casado = false;
console.log(pessoa.casado);