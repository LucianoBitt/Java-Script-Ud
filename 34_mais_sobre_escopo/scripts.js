let x = 10;

if (true) {
    let x = 20;
    console.log(x); // escopo if
}

console.log(x); // escopo global


let y = 10;

if (y > 5) {
    let y = 20;
    y++;
    console.log(y); // escopo if
}

console.log(y); // escopo global