const validarMaiuscula = /[A - Z]/;
console.log(validarMaiuscula.test("testando"));
console.log(validarMaiuscula.test("12345"));
console.log(validarMaiuscula.test("TESTANDO"));
console.log(validarMaiuscula.test("Luciano"));
console.log(validarMaiuscula.test("teste45"));