# Semana 3: XQuery Avanzado (Generación HTML)

## Objetivo
Transformar un documento XML en un formato de representación web clásico estándar (HTML), aplicando lógica y bucles de renderizado condicionales (`if-then-else`). Tienes las plantillas preparadas en `ejercicio1.xq`, `ejercicio2.xq` y `ejercicio3.xq`.

## Ejercicio 1: Generación de una Lista estática HTML
Abre `ejercicio1.xq`. 
**Guía Paso a Paso:**
- **Paso 1:** Revisa cómo se construyen directamente desde un script de datos etiquetas HTML en crudo: `<ul> ... </ul>`.
- **Paso 2:** Empotra dentro de esa etiqueta madre el código dinámico abriendo las llaves especiales obligatorias para que el motor las considere operaciones XQuery: `{ ... }`.
- **Paso 3:** Dentro de las llaves, completa la iteración de los libros contenidos en `biblioteca.xml` y efectúa tu retorno final (`return`). Ese retorno debe imprimir en exclusiva un string etiquetado `<li>` combinando dinámicamente `<titulo>` y de `<autor>`.

## Ejercicio 2: Generación Estructurada (Tabla HTML)
Abre `ejercicio2.xq`. Vamos a maquetar información iterativa dentro de la estructura general típica.
**Guía Paso a Paso:**
- **Paso 1:** Al igual que en el ejercicio 1, tienes preparado un cascarón HTML sólido y estático: `<table><tr><th>Título</th>...</tr> ... </table>`.
- **Paso 2:** Desciende al área de llaves dinámicas `{...}`, finaliza tu iterador sobre el XML fuente, e imprime recursivamente en el script filas puras HTML (`<tr>...</tr>`) completas durante el `return`.
- **Paso 3:** Utiliza la apertura de brackets incrustados (`{ }`) en cada interior de celda `<td>` para soltar los métodos que evaluarán el nombre y demás.

## Ejercicio 3: ESCENARIO REAL - Dashboard Comercial
El almacén necesita una página web de seguimiento `ejercicio3.xq` que avise si los libros están agotados coloreando sus celdas, y que al final del todo sume y arroje la estadística global de inventario disponible usando funciones incrustadas y HTML dinámico.
**Guía Paso a Paso:**
- **Paso 1:** Parte de tu iterador base (`for`) que rellena filas `<tr>`.
- **Paso 2:** Observa en la sección de inserción `return` el bloque `if (...) then ... else ...`. Modifica la condición evaluadora para que si el hijo `<stock>` iterado tiene el valor `0`, se devuelva el `then` (donde configurarás el estilo visual rojo "Agotado"). En el `else`, devuelve la fila normal imprimiendo su stock estándar.
- **Paso 3:** Ahora viene la métrica real. Justo al terminar de iterar absolutamente todos los elementos (superado el bloque FOR completo), pero situándote justo antes de cerrar el tag de finalización de tu tabla web `<table/>`, añade otra fila estática y solitaria `<tr>` indicando la estática "Total Stock General".
- **Paso 4:** En la celda final de esa métrica agregada lanza entre las llaves algorítmicas ` { } ` la función funcional general de la tecnología base: `sum(//libro/stock)`. Habrás logrado incrustar un dashboard semántico del documento procesado dentro de tu HTML repetitivo de visualización y sin usar CSS externo ni JavaScript.

## Ejercicio 4: Filtrado y Ordenación (Catálogo Específico)
Abre `ejercicio4.xq`. Vamos a crear un listado filtrado por una categoría específica y ordenado por precio.
**Guía Paso a Paso:**
- **Paso 1:** Utiliza la cláusula `where` para filtrar solo los libros cuya `<categoria>` sea "Programacion".
- **Paso 2:** Aplica `order by` sobre el campo `<precio>`. Recuerda usar la función `number()` o `xs:decimal()` para asegurar que la ordenación sea numérica y no alfabética.
- **Paso 3:** En el `return`, genera las celdas de la tabla con el título y el precio acompañado del símbolo €.

## Ejercicio 5: Agrupación Avanzada (Reporte por Categoría)
Abre `ejercicio5.xq`. Este es el reto final: generar un reporte que agrupe los libros por su categoría.
**Guía Paso a Paso:**
- **Paso 1:** Primero, obtén las categorías únicas usando la función `distinct-values(//categoria)`.
- **Paso 2:** Crea un bucle externo (`for $cat in ...`) que recorra esas categorías únicas.
- **Paso 3:** Dentro de cada iteración de categoría, abre un bucle interno que busque los libros que pertenecen a esa categoría específica: `//libro[categoria = $cat]`.
- **Paso 4:** Genera una estructura de lista anidada (`<ul><li>...</li></ul>`) para mostrar los títulos de los libros bajo cada encabezado de categoría.

