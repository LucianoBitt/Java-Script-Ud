const carro = {
    "Marca": "BMW",
    "Rodas": 4,
    "Portas": 4,
    "Tipo": "Sedan",
    "Cor": "Branco"
}

let jsonToString = JSON.stringify(carro);
console.log(jsonToString);
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);


let pessoa = {
    "nome": "Luciano",
    "idade": 45,
    "Profissão": "Programador",
    "Hobbies": ["filmes", "Séries", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.Hobbies[2]);


// JSON.stringfy = Transforma um arquivo JSON em uma STRING.

// JSON.parse    = Transforma uma STRING em um arquivo JSON.