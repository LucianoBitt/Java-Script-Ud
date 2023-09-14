async function somar(a, b) {
    return a + b;
}

console.log(somar(2, 2));

somar(2, 2).then(function(value) {
    console.log(value);
});