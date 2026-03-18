// Esto lo hago para que cuando cargue la página ya tenga el evento listo para escuchar el click en el botón
document.addEventListener('DOMContentLoaded', function() {
 
    const boton = document.getElementById('botonToggle');
    const dashboard = document.querySelector('.dashboard');
    

    function toggleSidebar() {
        dashboard.classList.toggle('colapsado');
        

        if (dashboard.classList.contains('colapsado')) {
            boton.textContent = '->';
        } else {
            boton.textContent = 'MENU';
        }
    }
    
    boton.addEventListener('click', toggleSidebar);
    
});