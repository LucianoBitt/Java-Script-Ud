let lista = document.createElement('ul');

for (i = 1; i < 4; i++) {
    let item = document.createElement('li');
    let texto = document.createTextNode("Texto lista " + i);
    item.appendChild(texto);
    lista.appendChild(item);
}

let container = document.getElementById('container-principal');
container.appendChild(lista);