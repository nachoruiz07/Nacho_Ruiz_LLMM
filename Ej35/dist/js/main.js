// Variables
let peliculas = [];

// Cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    cargarXML();
    
    // Filtro
    document.getElementById('buscador').addEventListener('keyup', function() {
        let texto = this.value.toLowerCase();
        let tarjetas = document.querySelectorAll('.pelicula-card');
        
        tarjetas.forEach(tarjeta => {
            let titulo = tarjeta.querySelector('h2').textContent.toLowerCase();
            if (titulo.includes(texto)) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    });
});

// Cargar XML
function cargarXML() {
    fetch('data/peliculas.xml')
        .then(res => res.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(xmlText, 'text/xml');
            let items = xml.querySelectorAll('pelicula');
            
            let html = '';
            items.forEach(item => {
                html += `
                    <article class="pelicula-card">
                        <h2>${item.querySelector('titulo').textContent}</h2>
                        <p><strong>Director:</strong> ${item.querySelector('director').textContent}</p>
                        <p><strong>Año:</strong> ${item.querySelector('año').textContent}</p>
                        <p><strong>Género:</strong> ${item.querySelector('genero').textContent}</p>
                        <p><strong>Duración:</strong> ${item.querySelector('duracion').textContent} min</p>
                    </article>
                `;
            });
            
            document.getElementById('contenedor').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('contenedor').innerHTML = '<p>Error al cargar</p>';
        });
}