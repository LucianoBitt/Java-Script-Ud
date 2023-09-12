const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1900-2023]{4}/;
console.log(validarDataNasc.test("28/09/1977"));
console.log(validarDataNasc.test("1/12/95"));
console.log(validarDataNasc.test('29/03/1992'));
console.log(validarDataNasc.test("46 12 9898"));
console.log(validarDataNasc.test("12/12/1999"));
console.log(validarDataNasc.test("99/99/9999"));
console.log(validarDataNasc.test("05-11-1985"));