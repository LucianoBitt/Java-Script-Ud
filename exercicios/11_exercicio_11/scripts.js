let idade = 19;
let cnh = true;

if (idade > 18 && cnh == true) {
    console.log("Sim, ele pode dirigir!");
} else if (idade >= 18 && cnh == false) {
    console.log("Não pode dirigir, mas pode fazer a CNH.");
} else {
    console.log("Não pode dirigir!");
}

let idade1 = 23;
let cnh1 = false;

if (idade1 > 18 && cnh1 == true) {
    console.log("Sim, ele pode dirigir!");
} else if (idade1 >= 18 && cnh1 == false) {
    console.log("Não pode dirigir, mas pode fazer a CNH.");
} else {
    console.log("Não pode dirigir!");
}

let idade2 = 18;
let cnh2 = false;

if (idade2 > 18 && cnh2 == true) {
    console.log("Sim, ele pode dirigir!");
} else if (idade2 < 18 && cnh2 == false) {
    console.log("Não pode dirigir, mas pode fazer a CNH.");
} else {
    console.log("Não pode dirigir!");
}