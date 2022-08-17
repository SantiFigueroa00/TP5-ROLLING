let btnComenzar = document.querySelector('#btnComenzar');
let numeroAdivinar =0;
btnComenzar.addEventListener('click', generarNumeroAleatorio);

let formulario = document.querySelector('#formJuego');
formulario.addEventListener('submit', adivinar);

let alertas = document.querySelector('#alerts')

function generarNumeroAleatorio() {
    let numAleatorio = Math.round(Math.random() * (0 - 10) + 10);
    numeroAdivinar = numAleatorio;
    console.log(numeroAdivinar);
    alertas.innerHTML = 'Numero aleatorio generado'
    btnComenzar.className = 'btn btn-success my-4 disabled'
}

function adivinar(e){
    //aqui va la logica para verificar si lo que ingreso el usuario en el input es igual, menor o mayor que el numeroAdivinar
    e.preventDefault();
    let numeroIngresado = parseInt(document.querySelector('input').value);
    console.log(numeroIngresado);
    if (numeroAdivinar === numeroIngresado) {
        formulario.reset();
        btnComenzar.className = 'btn btn-success my-4'
        alertas.innerHTML = '¡ADIVINASTE!'
        alertas.className = 'alert alert-success my-4'
      } else if (numeroAdivinar < numeroIngresado) {
        alert("El numero es menor al que usted ingreso.");
        formulario.reset();
      } else{
          alert("El numero es mayor al que usted ingreso.")
          formulario.reset();
      }
}
 