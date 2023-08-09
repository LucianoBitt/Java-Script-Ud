let pessoa = {
    nome: "Luciano",
    profissao: "Programador",
    idade: 45,
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);


let pessoa2 = {
    nome: "Stefania",
    profissao: "Atendente",
    idade: function() {
        console.log(30);
    }
}

console.log(pessoa2.nome);
pessoa2.idade();
console.log(pessoa2.profissao);


// [] = array
// {} = objeto