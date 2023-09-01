function checarNumero(valor) {
    let resultado = Number(valor);
    if (Number.isNaN(resultado)) {
        alert("Por favor, passe somente números para o programa.");
    } else {
        return resultado;
    }
}

checarNumero(5);
checarNumero('teste');

let resultado = prompt("Digite um número");
checarNumero(resultado);