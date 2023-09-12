console.log("Ainda não chamou o callback");

setTimeout(function() {
    console.log("Foda-se o callback!");
}, 8000);


console.log("Contagem regressiva...");

setTimeout(function() {
    console.log("5");
}, 2000);
setTimeout(function() {
    console.log("4");
}, 3000);
setTimeout(function() {
    console.log("3");
}, 4000);
setTimeout(function() {
    console.log("2");
}, 5000);
setTimeout(function() {
    console.log("1");
}, 6000);
setTimeout(function() {
    console.log("BUUUUUMMMMMM!!!");
}, 7000);