const frutas = /\d+ (bananas|maçãs|laranjas)/;
console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));
console.log(frutas.test("12 maçãs"));

const reg = /\w+: (Luciano|Stefania|Vitoria)/; // Nome: Fulano de Tal
console.log(reg.test("Nome: Luciano"));
console.log(reg.test("Nome: Stefania"));
console.log(reg.test("Nome: Pedro"));
console.log(reg.test("Nome: Vitoria"));