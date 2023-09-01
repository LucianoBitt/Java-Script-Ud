// let reg = new RegExp("teste");
// let reg2 = /teste/;

console.log(/testando/.test("tttttestandoooooo"));
console.log(/testando/.test("asdtestasd"));

const reg1 = new RegExp('bola');
console.log(reg1.test("tem bola?"));
console.log(reg1.test("não tem"));

const reg2 = /bola/;
let text = 'Tem bola na rede';

console.log(reg2.test("tem bola?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado?"));
console.log(/quadrado/.test("68541563241quadrado9654156324?"));