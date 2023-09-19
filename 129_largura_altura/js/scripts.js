let elemento = document.querySelector('#titulo-principal');

console.log('Largura: ' + elemento.offsetWidth); // considerar as bordas
console.log('Altura: ' + elemento.offsetHeight);

console.log('Largura: ' + elemento.clientWidth); // considerar as bordas
console.log('Altura: ' + elemento.clientHeight);

let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.github.com/LucianoBitt';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));