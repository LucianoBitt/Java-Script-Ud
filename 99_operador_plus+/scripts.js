const muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("0123456789"));
console.log(muitosOuPoucosDigitos.test(""));
console.log(muitosOuPoucosDigitos.test("asd"));