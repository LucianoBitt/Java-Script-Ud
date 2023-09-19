let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.github.com/LucianoBitt';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));