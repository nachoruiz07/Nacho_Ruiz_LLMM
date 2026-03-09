// Lógica de Tabs
// 1. Selecciona botones y paneles
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
// 2. Al hacer click en un botón:
//    - Quita active de todos
//    - Pon active al clickeado
//    - Muestra el panel correspondiente (id en data-attribute)
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        
     
        
     
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        
      
        button.classList.add('active');
        
      
        const targetId = button.dataset.target;
        
        const targetPane = document.getElementById(targetId);
        targetPane.classList.add('active');
    });
});