const validarId = /\d+ID\b/;
console.log(validarId.test("4569ID"));
console.log(validarId.test("ID49855"));
console.log(validarId.test("LucianoID"));
console.log(validarId.test("123IDLu"));