// const img = document.createElement('img')

// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'nuevoAtributo')

// h1.classList.add('nuevoAtributo')
// // input.value= "BANKAI"

// // img.setAttribute('src', 'https://i.pinimg.com/564x/e4/bd/ed/e4bdedc12a36103ac2c06cd9baaa8e26.jpg')
// // pId.innerHTML = '' //Borra el contenido que tenía ese párrafo
// // pId.append(img)
// console.log(img);
let h1 = document.querySelector('h1');
let input1 = document.querySelector('#calculoUno');
let input2 = document.querySelector('#calculoDos');
let btn = document.querySelector('#btnCalc');
let resultados = document.querySelector('#resultado');
let form = document.querySelector('#miFormulario');


form.addEventListener('submit',inputSum)
function inputSum(event){
    event.preventDefault()
    let suma = +input1.value + +input2.value
    resultados.append("El resultado de la suma es: " + suma)
}