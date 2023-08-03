let y = 5;

const multiplicar = function(n) {
    let y = n * 2;
    console.log(y); // escopo função
    if (y == 10) {
        let y = 55;
        console.log(y); // escopo if dentro da função
    }
}

multiplicar(y);

console.log(multiplicar(y));


let a = 10;

function mult(b, c) {
    let a = b * c;
    if (a > 10) {
        let a = 0;
        a++;
        console.log(a);
    }

    console.log(a);
}

console.log(a);

mult(3, 7);