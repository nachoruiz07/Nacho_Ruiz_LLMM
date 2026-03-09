// Lógica del menú hamburguesa
// Lógica del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    
    
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    
    if (burger && navLinks) {
        
      
        burger.addEventListener('click', () => {
            
            navLinks.classList.toggle('active');
            
       
            burger.classList.toggle('toggle');
        });
        
       
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            });
        });
    }
    
    console.log('Menú hamburguesa inicializado');
});