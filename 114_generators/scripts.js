function* gentest() {
    let id = 0;
    while (true) {
        yield id++;
    }
}

let criarId = gentest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);

console.log(criarId.next());