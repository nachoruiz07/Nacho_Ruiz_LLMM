# Semana 1: XPath Básico

## Objetivo
Aprender a navegar y extraer información de un documento XML estructurado utilizando expresiones de ruta XPath. Trabajarás sobre el documento adjunto `catalogo.xml`. Tienes unos ficheros guía llamados `soluciones_...txt` con comentarios y pistas ("TODO") que debes rellenar.

## Ejercicio 1: Rutas Básicas
Abre el fichero `soluciones_ejercicio1.txt` y rellena las consultas solicitadas en sus respectivos huecos.
**Guía Paso a Paso:**
- **Paso 1:** Evalúa cómo descender desde el inicio real (raíz `/`) nivel a nivel hasta llegar a `<libro>`. Si tienes fallos, asegúrate de haber puesto los nombres exactamente igual que en el XML.
- **Paso 2:** Observa cómo las dobles barras `//` cambian el comportamiento buscando en cualquier nivel del documento. Pruébalo con la etiqueta título.
- **Paso 3:** Recuerda la regla fundamental de los atributos: para seleccionarlos debes escribir la arroba `@` justo antes de su identificador.

## Ejercicio 2: Predicados Simples
Ve al archivo `soluciones_ejercicio2.txt`. El objetivo es aprender a filtrar ("quedarme solo con unos pocos resultados guiados por una condición").
**Guía Paso a Paso:**
- **Paso 1:** Escribe tu ruta hacia los libros. Justo después, abre corchetes `[` y escribe la condición: `@id='L02'`. Luego cierra `]`. Presta especial atención al uso de comillas simples para valores exactos de texto.
- **Paso 2:** Combina navegación y predicados. Intenta no extraer el libro entero, sino solamente la etiqueta `<titulo>` de forma que se cumpla la regla de que su precio sea `> 20`.
- **Paso 3:** Para unir condiciones puedes utilizar operadores lógicos como el `and`. Verifica que se cumplan ambas condiciones para obtener un resultado válido.

## Ejercicio 3: ESCENARIO REAL - Informe de Auditoría mediante Funciones
Por último, abre `soluciones_ejercicio3.txt`. Imagina que trabajas para el gerente de la tienda y solicita unos cálculos rápidos financieros usando el motor de XPath.
**Guía Paso a Paso:**
- **Paso 1 (Recuento de fallos diarios):** Envuelve dentro de los paréntesis de `count(...)` una ruta con un predicado que extraiga los libros cuyo stock es exactamente 0.
- **Paso 2 (Inversión económica):** El gerente necesita saber cuánto valen los libros de un tipo de temática concreta. Haz una ruta hacia los nodos `<precio>` pero asegúrate de filtrar el título o el libro matriz añadiendo como condición que su categoría sea "programacion". Envuelve toda la ruta en un iterador `sum(...)`.
- **Paso 3:** Usa `name(/*)` o seleccionando el nodo raíz directamente para que tu script devuelva programáticamente el nombre de la raíz al sistema.

---
> **Tip Práctico:** Puedes probar tus consultas antes de dejarlas reflejadas abriendo tu `catalogo.xml` a través de herramientas gratuitas online como [XPather](http://xpather.com/) o mediante la extensión "XML Tools" integrada en navegadores o IDEs.
