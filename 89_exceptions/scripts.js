// let a = 1;

// if (a != 2) {
//     throw new Error("O valor de a não pode ser 1");
// }

function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error("O parâmetro nome precisa ser string.");
    } else {
        console.log(`Olá, ${nome}!`);
    }
}

saudacao("Luciano");
saudacao(77);

console.log('teste');