function tamanhoTexto(texto) {
    if (texto.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("texto dentro do limite");
    }
    console.log(texto.length);
}

tamanhoTexto("Teste");
tamanhoTexto("Vamos testar se funciona");
tamanhoTexto("Só 10");