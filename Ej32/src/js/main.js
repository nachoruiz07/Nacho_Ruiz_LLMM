// Cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    
    const contenedor = document.getElementById('productos-container');
    
  
    fetch('dist/data/productos.xml')
        .then(response => response.text())
        .then(xmlTexto => {
            
          
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlTexto, 'text/xml');
            
          
            const productos = xml.querySelectorAll('producto');
            
            // PARA QUITAR EL CARGANDO
            contenedor.innerHTML = '';
            
            
            productos.forEach(producto => {
                
               
                const id = producto.getAttribute('id');
                const nombre = producto.querySelector('nombre').textContent;
                const precio = producto.querySelector('precio').textContent;
                const moneda = producto.querySelector('precio').getAttribute('moneda');
                const descripcion = producto.querySelector('descripcion').textContent;
                const categoria = producto.querySelector('categoria').textContent;
                
         
                const tarjeta = document.createElement('div');
                tarjeta.className = 'producto-card';
                
              
                tarjeta.innerHTML = `
                    <h3>${nombre}</h3>
                    <p>${descripcion}</p>
                    <p>Precio: ${precio} ${moneda}</p>
                    <p>Categoría: ${categoria}</p>
                    <small>ID: ${id}</small>
                `;
                
               
                contenedor.appendChild(tarjeta);
            });
        })
        .catch(error => {
            // HE VISTO ESTO Y LO HE AÑADIDO POR SI HAY UN ERROR EN LA CARGA DEL XML, PARA QUE SE VEA EN LA PÁGINA Y NO SOLO EN LA CONSOLA
            contenedor.innerHTML = `<p>Error al cargar: ${error}</p>`;
        });
});