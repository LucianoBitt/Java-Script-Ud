window.addEventListener("scroll", function(e) {
    if (window.pageYOffset > 1000) {
        console.log("Ativou!");
    }
});

let input = document.querySelector("#input1");
input.addEventListener("focus", function() {
    console.log("Entrou no input!");
});

input.addEventListener("blur", function() {
    console.log("Saiu do input!");
});