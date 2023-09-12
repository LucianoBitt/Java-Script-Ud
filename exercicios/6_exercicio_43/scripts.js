const validarMarca = /Marca: (Nike|Adidas|Puma|Converse)/;
console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: adidas"));
console.log(validarMarca.test("Marca: Puma"));
console.log(validarMarca.test("Marca: Naique"));
console.log(validarMarca.test("Marca: Converse"));
console.log(validarMarca.test("Marca: pluma"));