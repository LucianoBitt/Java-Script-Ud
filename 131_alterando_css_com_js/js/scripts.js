let elemento = document.querySelector('#titulo-principal');

console.log(elemento.getBoundingClientRect());

let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.github.com/LucianoBitt';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));
setTimeout(function() {
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '400px';
}, 1000);