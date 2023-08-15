function verificarTipoDeDados(dado) {
    if (typeof dado === 'string') {
        console.log("Este dado é uma String");
    } else if (typeof dado === 'number') {
        console.log("Este dado é um Number");
    } else if (typeof dado === 'boolean') {
        console.log("Este dado é um Boolean");
    }
}

verificarTipoDeDados(true);
verificarTipoDeDados(45);
verificarTipoDeDados("teste");