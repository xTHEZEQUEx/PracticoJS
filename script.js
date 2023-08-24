let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let pClase = document.querySelector('.parrafoClase');
let pId = document.querySelector('#parrafoId');
let input = document.querySelector('input');

const img = document.createElement('img')
function cambiarTitulo(){

    h1.innerHTML = "AjáManiQue"
}

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'nuevoAtributo')

h1.classList.add('nuevoAtributo')
// input.value= "BANKAI"

img.setAttribute('src', 'https://i.pinimg.com/564x/e4/bd/ed/e4bdedc12a36103ac2c06cd9baaa8e26.jpg')
pId.innerHTML = '' //Borra el contenido que tenía ese párrafo
pId.append(img)
console.log(img);