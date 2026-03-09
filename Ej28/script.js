// Ejercicio 28: ES6+

const container = document.getElementById('resultado');

// 1. Convierte esta función a Arrow Function
// function saludar(nombre) {
//    return 'Hola ' + nombre;
// }
const saludar = (nombre) => 'Hola ' + nombre;

// 2. Dado el siguiente array de objetos:
const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Carlos', rol: 'User' },
    { id: 3, nombre: 'Bea', rol: 'Editor' }
];

// 3. Usa .filter() (con arrow function) para encontrar a los de rol 'Admin'
const admins = usuarios.filter(usuario => usuario.rol === 'Admin');

// 4. Renderiza la lista en el DOM usando Template Literals (``) y .map()
const listaHTML = admins.map(admin => `<li>${admin.nombre}</li>`);