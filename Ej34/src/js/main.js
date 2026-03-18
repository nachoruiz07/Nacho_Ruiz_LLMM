// HE NECESITADO AYUDA TAMBIEN PARA LOS BUCLES, PORQUE AL INTENTARLO HE TENIDO VARIOS FALLOS Y SE ME HA COMPLICADO
async function cargarNoticias() {
    try {
        
        const respuesta = await fetch('data/feed.xml');
        const textoXML = await respuesta.text();
        
       
        const parser = new DOMParser();
        const xml = parser.parseFromString(textoXML, 'text/xml');
        
       
        const items = xml.querySelectorAll('item');
        
       
        mostrarNoticias(items);
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('noticias').innerHTML = '<p>Error al cargar noticias</p>';
    }
}

// Mostrar noticias en el grid
function mostrarNoticias(items) {
    const contenedor = document.getElementById('noticias');
    contenedor.innerHTML = ''; 
    
    // Convertir a array y recorrer con forEach
    Array.from(items).forEach(item => {
        
        const title = item.querySelector('title').textContent;
        const description = item.querySelector('description').textContent;
        const pubDate = item.querySelector('pubDate').textContent;
        const author = item.querySelector('author').textContent;
        const category = item.getAttribute('category');
        
        // Crear tarjeta
        const noticia = document.createElement('article');
        noticia.className = `noticia-card ${category}`;
        
        // Añadir contenido
        noticia.innerHTML = `
            <h2>${title}</h2>
            <div class="fecha"> ${pubDate}</div>
            <p class="descripcion">${description}</p>
            <div class="autor"> ${author}</div>
            <span class="categoria">${category}</span>`;
        
        
        contenedor.appendChild(noticia);
    });
}


function filtrarPorCategoria(categoria) {
    const noticias = document.querySelectorAll('.noticia-card');
    
    noticias.forEach(noticia => {
        if (categoria === 'todas' || noticia.classList.contains(categoria)) {
            noticia.style.display = 'block';
        } else {
            noticia.style.display = 'none';
        }
    });
    
   
    document.querySelectorAll('.filtro').forEach(btn => {
        btn.classList.remove('activo');
        if (btn.dataset.categoria === categoria) {
            btn.classList.add('activo');
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
  
    cargarNoticias();
    
    
    document.querySelectorAll('.filtro').forEach(btn => {
        btn.addEventListener('click', function() {
            filtrarPorCategoria(this.dataset.categoria);
        });
    });
});