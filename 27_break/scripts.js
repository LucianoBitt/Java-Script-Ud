for (let i = 5; i < 20; i = i + 1) {
    if (i % 10 == 0) {
        console.log('Saiu do loop');
        break;
    }
    console.log('Prosseguindo o loop');
}

let nome = "Luciano";
for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        nome = "Maria";
    }
    if (i == 5 && nome == "Maria") {
        console.log("O nome é Maria, pode parar!");
        break
    }
    console.log(i);
}