# Semana 5: Nuevos Formatos de Intercambio (Introducción a JSON)

## Objetivo
Conocer el formato de intercambio JSON, entender el modelado en base a elementos y Arrays anidados comparando la estructura mental contra la sintaxis XML. Utiliza los archivos `libro.json`, `catalogo.json` e `index.html` construyéndolos guiándote por las pistas marcadas en su interior (las claves de TODO).

## Ejercicio 1: Objeto Simple - De XML a JSON
Tienes preparado un pequeño esqueleto mal formado en `libro.json`. La idea es que apliques las reglas y la sintaxis estricta orientada a objetos JSON. Fíjate en cómo representábamos un libro estándar en XML:
```xml
<libro id="1">
    <titulo>El Imperio Final</titulo>
    <autor>Brandon Sanderson</autor>
</libro>
```
**Guía Paso a Paso:**
- **Paso 1:** Reemplaza el TODO_1 y su comentario declarando un campo numérico `"id": 1`. Recuerda ubicar las comillas siempre delimitando el nombre de clave y finalizar la instrucción parcial con una coma.
- **Paso 2:** Haz lo mismo con el campo de texto `"titulo"` incorporando tanto en clave como en valor comillas dobles.
- **Paso 3:** Continúa con el autor asegurándote de no ubicar comas sueltas detrás del último registro o tu archivo dará un error al procesarse.

## Ejercicio 4: Construcción Jerárquica y Colecciones
Abre `catalogo.json` para recrear las viejas listas compuestas.
**Guía Paso a Paso:**
- **Paso 1:** Borra el primer comentario TODO_1 y genera directamente una súper llave general ("key") que englobará todos tus descendientes en el JSON: `"libros"`.
- **Paso 2:** Seguido de los dos puntos definitorios, abre una sintaxis que emule un Array: usándolo mediante brackets `[ ]`.
- **Paso 3:** Introduce varios libros diferentes creando objetos encapsulados iterados (cada uno dentro de `{}`) y separando cada componente libro del posterior con una coma clásica.

## Ejercicio 3: ESCENARIO REAL - Ficha de Producto Dinámica (Frontend Web)
En vez de imprimir pasivamente por consola como programador, vamos a inyectar vida dando un vuelco real para el cliente armando la estructura web y generando HTML a partir de JSON de forma algorítmica.
**Guía Paso a Paso:**
- **Paso 1:** Revisa al detalle tu `index.html`. Hay un bloque ciego listo y pertrechado con `<ul id="lista-libros"></ul>`.
- **Paso 2:** En la parte JavaScript activa (`<script>`), percatarás que volqué todo tu componente constante `catalogo.json`.
- **Paso 3:** Haz un bucle matricial iterativo en crudo que navegue y repita la matriz `catalogo.libros`. Emplea un clásico `for (let i = 0...` puro o de la función avanzada `.forEach(...)` en los métodos de Arrays de JS.
- **Paso 4:** En el bucle iterativo, instancia y selecciona la ID de dicha lista en el DOM Web con el puntero habitual `document.getElementById()`. Por cada iteración inyecta (`+=`) en el `.innerHTML` de esa lista el código puro en string  `<li>` concadenándole dinámicamente tu `titulo` respectivo por turno de extracción.

---

## Ejercicio 4: JSON Anidado y Tarjetas Enriquecidas

El catálogo real de una biblioteca tiene más datos que un simple título. Vamos a enriquecer nuestro JSON con objetos anidados y mostrarlos en una tarjeta HTML completa.

**Guía Paso a Paso:**
- **Paso 1:** Abre el archivo `tarjetas.json` (créalo tú mismo). Define una estructura donde cada libro tenga, además de `id` y `titulo`, un sub-objeto `"detalles"` con las claves `"autor"`, `"anio"` (número) y `"disponible"` (booleano `true`/`false`).
- **Paso 2:** En el archivo `tarjetas.html`, escribe el JavaScript necesario para recorrer ese array de libros. Por cada libro, construye un bloque HTML dinámico como `<div class="tarjeta"><h2>titulo</h2><p>Autor: ...</p><p>Año: ...</p></div>` accediendo a las propiedades anidadas mediante `libro.detalles.autor`, `libro.detalles.anio`, etc.
- **Paso 3:** Añade un estilo CSS básico para que las tarjetas tengan borde, sombra y separación entre ellas. Deben verse como fichas reales, no como texto plano.

---

## Ejercicio 5: Filtrado Dinámico con JSON y el DOM

Un sistema de biblioteca real necesita búsquedas. Vamos a implementar un filtro en tiempo real que busque libros por título mientras el usuario escribe.

**Guía Paso a Paso:**
- **Paso 1:** En el archivo `buscador.html`, añade un `<input type="text" id="buscador" placeholder="Busca un libro...">` en el HTML. Crea un array JSON hardcodeado con al menos **5 libros** distintos (título + autor).
- **Paso 2:** Escribe una función `filtrar()` en JavaScript que lea el valor actual del input con `document.getElementById('buscador').value.toLowerCase()` y use `.filter()` sobre el array para quedarse solo con los libros cuyo `titulo.toLowerCase()` contenga el texto buscado.
- **Paso 3:** Conecta el input al evento `oninput` (o `addEventListener('input', ...)`) para que la función `filtrar()` se dispare en cada tecla pulsada. La lista HTML del DOM debe actualizarse en tiempo real mostrando solo los libros que coincidan.

---

## Ejercicio 6: ESCENARIO AVANZADO — Persistencia con `localStorage`

Un usuario que visita la biblioteca quiere guardar sus libros favoritos aunque cierre el navegador. Vamos a usar `localStorage` para persistir datos JSON sin ningún servidor.

**Guía Paso a Paso:**
- **Paso 1:** En `favoritos.html`, crea una interfaz con un `<input>` para que el usuario escriba el título de un libro y un `<button>` con el texto *"Añadir a favoritos"*. También añade una `<ul id="favoritos">` donde se mostrarán los guardados.
- **Paso 2:** Al pulsar el botón, lee el valor del input. Recupera el array actual de favoritos de `localStorage` con `JSON.parse(localStorage.getItem('favoritos') || '[]')`. Añade el nuevo título al array y guárdalo de nuevo con `localStorage.setItem('favoritos', JSON.stringify(arrayActualizado))`.
- **Paso 3:** Cada vez que la página cargue (`window.onload`), lee el array del `localStorage` y renderiza todos los favoritos guardados en la lista `<ul>`. Añade también un botón "Borrar todos" que llame a `localStorage.removeItem('favoritos')` y limpie la lista visual.
