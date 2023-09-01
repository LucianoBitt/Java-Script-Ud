console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 3 e 8 estão presentes aqui?"));

const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6?"));
console.log(reg1.test("Temos o número 2?"));
console.log(reg1.test("Temos o número 0?"));
console.log(reg1.test("Temos o número 45?"));
console.log(reg1.test("Temos o número 77?"));
console.log(reg1.test("Temos o número 36?"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 0?"));
console.log(reg2.test("Temos o número 199?"));
console.log(reg2.test("Temos o número 77?"));
console.log(reg2.test("Temos o número 9465?"));
console.log(reg2.test("Temos o número 45?"));
console.log(reg2.test("Temos o número 73?"));
console.log(reg1.test("Temos o número?"));