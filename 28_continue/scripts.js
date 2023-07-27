let x = 0;

while (x < 11) {
    x = x + 1;
    if (x % 2 == 0) {
        continue
    }
    console.log(x);
    x = x + 1;
}

for (let i = 10; i > 0; i = i - 1) {

    if (i % 2 == 0) {
        console.log("Caiu no continue");
        continue;
    }

    console.log(i);

}