let promiseErrada = Promise.resolve(new Error("Algo deu errado! Vai dá não..."));

console.log("Booooooraaa!!!");

promiseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));