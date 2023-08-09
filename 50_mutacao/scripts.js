let objetoA = {
    pontos: 10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
};

console.log(objetoA == objetoB); // true
console.log(objetoA == objetoC); // false


let pessoa = {
    nome: "Luciano"
}

let pessoa2 = pessoa;
let pessoa3 = {
    nome: "Luciano"
}
console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa);

pessoa2.nome = "Stefania";
console.log(pessoa.nome);

pessoa.nome = "Victoria";
console.log(pessoa2.nome);