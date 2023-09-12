const teste = "O número 77".match(/\d+/);
console.log(teste);
console.log(teste.index);

const frase = "O número 55 está aqui".match(/\d+/);
console.log(frase);
console.log(frase.index);

const frase2 = "Não tem número aqui".match(/\d+/);
console.log(frase2);