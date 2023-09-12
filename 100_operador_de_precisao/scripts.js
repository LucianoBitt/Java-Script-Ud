const telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050"));
console.log(telefone.test("99999-8080"));
console.log(telefone.test("999-999"));
console.log(telefone.test("9-5996"));
console.log(telefone.test("99669-1225"));


const cep = /\d{5}-\d{3}/;

console.log(cep.test("26553-140"));
console.log(cep.test("asd15-w15"));
console.log(cep.test("16969-25"));
console.log(cep.test("99999-999"));


const telddd = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telddd.test("(21)9669-1225"));
console.log(telddd.test("(42)9956-4659"));
console.log(telddd.test("(11)9856-895"));
console.log(telddd.test("1198965-1254"));
console.log(telddd.test("11 9589-9568"));