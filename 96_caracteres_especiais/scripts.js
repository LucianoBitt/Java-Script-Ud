// Caracteres Especiais

// \d - aceita qualquer número [0-9];
// \w - aceita caracteres alfanumérico(letras ou números);
// \s - aceita caracteres de espaço em branco(tab, quebra de linha, etc...);
// \D - aceita qualquer caractere q ñ são números;
// \W - não aceita caracteres alfanumérico(letras ou números);
// \S - não aceita caracteres q sejam espaço em branco;
// .  - aceita qualquer caractere, menos linhas;

const pontoRegex = /./;
console.log('.');
console.log(pontoRegex.test("luciano"));
console.log(pontoRegex.test("12345"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("luk123"));

const dRegex = /\d/; // [0-9]
console.log('d');
console.log(dRegex.test("luciano"));
console.log(dRegex.test("12345"));
console.log(dRegex.test(" "));
console.log(dRegex.test("luk123"));

const dRegex2 = /\D/; // [^0-9] - ñ aceita
console.log('D');
console.log(dRegex2.test("luciano"));
console.log(dRegex2.test("12345"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("luk123"));

const sRegex = /\s/; // aceita espaços em branco
console.log('s');
console.log(sRegex.test("	luk123	"));
console.log(sRegex.test("12345"));
console.log(sRegex.test(" "));
console.log(sRegex.test("luk123"));

const Regexw = /\w/; // aceita alfanumérico
console.log('w');
console.log(Regexw.test("	luk123	"));
console.log(Regexw.test("12345"));
console.log(Regexw.test(" "));
console.log(Regexw.test("luk123"));

const wRegex = /\W/; // não aceita alfanumérico
console.log('W');
console.log(wRegex.test("	luk123	"));
console.log(wRegex.test("12345"));
console.log(wRegex.test(" "));
console.log(wRegex.test("luk123"));

const Regexs = /\S/; // aceita espaços em branco
console.log('S');
console.log(Regexs.test("		"));
console.log(Regexs.test("12345"));
console.log(Regexs.test(" "));
console.log(Regexs.test("  luk123  "));