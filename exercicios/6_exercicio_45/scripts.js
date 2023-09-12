let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(validarNomeUsuario.test("luciano_123"));
console.log(validarNomeUsuario.test("lu"));
console.log(validarNomeUsuario.test("11111122222233333444445555"));
console.log(validarNomeUsuario.test("luciano 45"));
console.log(validarNomeUsuario.test("lu45"));
console.log(validarNomeUsuario.test("77_luciano"));