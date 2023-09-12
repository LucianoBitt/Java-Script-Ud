const teste = /\d+/.exec("O número 100");
console.log(teste);
console.log(teste.index);

const teste2 = /\w+\d+/.exec("Meu nome é Luciano 45");
console.log(teste2);
console.log(teste2.index);

const digitos = /\d+/;

console.log(digitos.exec("tem o número 77 aqui"));
console.log(digitos.exec("Não tem número aqui"));