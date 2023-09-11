const ano = /\d\d\d\d/;

console.log(ano.test("05"));
console.log(ano.test("2023"));
console.log(ano.test("Opa"));

const palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test("dia"));
console.log(palavraTresLetras.test("ano"));
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste"));

const dia = /\d\d/;

console.log(dia.test("2023") && "2023".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd7"));