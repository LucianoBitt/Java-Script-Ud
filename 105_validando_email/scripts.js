const validarEmail = /\w+@\w+\.\w+/;
console.log(validarEmail.test("luciano@hotmail.com.br"));
console.log(validarEmail.test("email@email"));
console.log(validarEmail.test("stefania30@gmail.com"));
console.log(validarEmail.test("email.com"));