// Ejercicio 21: Manipulación del DOM

// 1. Selecciona la caja (id="miCaja")
const miCaja = document.getElementById('miCaja');

// 2. Selecciona los botones
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// 3. Agrega funcionalidad al botón de color (click)
//    - Cambia el color de fondo de la caja
btnColor.addEventListener('click', () => {
// Código que se ejecuta al clickar
    miCaja.style.backgroundColor = 'red';
});

// 4. Agrega funcionalidad al botón de texto (click)
//    - Cambia el texto interno de la caja
btnTexto.addEventListener('click', () => {
// Código que se ejecuta al clickar
   miCaja.innerText = 'Nuevo Texto añadido';
});

// 5. Agrega funcionalidad al botón de agregar (click)
//    - Crea un nuevo elemento li
btnAgregar.addEventListener('click', () => {
    const elementoLista = document.createElement('li');
    elementoLista.innerText = 'Nuevo elemento';

//    - Agrégalo a la lista ul
lista.appendChild(elementoLista);
});