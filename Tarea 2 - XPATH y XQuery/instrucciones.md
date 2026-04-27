# Semana 2: XPath Avanzado e Introducción a XQuery

## Objetivo
Profundizar en las expresiones complejas de XPath utilizando ejes avanzados y realizar las primeras iteraciones utilizando XQuery (cláusulas básicas FLWOR). Se adjunta un nuevo archivo de trabajo, `datos.xml`.

## Ejercicio 1: XPath - Ejes Avanzados y Múltiples Predicados
Abre el archivo `datos.xml` en tu consola o IDE. Crea o edita el archivo `soluciones_ejercicio1.txt` rellenando los huecos con TODO:
**Guía Paso a Paso:**
- **Paso 1:** Para buscar dentro de un rango numérico de valores (precio entre más de 20 y hasta 26) utiliza condicionales dentro del predicado del elemento deseado. Utiliza `and`.
- **Paso 2:** Si ya estás posicionado en un nivel demasiado profundo (`id="L04"`), puedes subir un eslabón hasta tu etiqueta madre (`<seccion>`) empleando el eje de paso inverso `parent::` o `ancestor::`.
- **Paso 3:** Para encontrar hermanos que le siguen y están situados en el mismo nivel, tira un eje horizontal empleando `following-sibling::`.

## Ejercicio 2: Introducción a XQuery (Cláusulas FOR y RETURN)
Utiliza la plantilla de trabajo llamada `consulta_ejercicio2.xq`.
**Guía Paso a Paso:**
- **Paso 1:** Define en tu iterador inicial (`for $libro in ...`) la variable que va a almacenar cada libro y la ruta al documento (usa `doc("datos.xml")//libro`).
- **Paso 2:** Añade una cláusula final `return`. Dentro de ella debes concatenar los valores específicos para crear el string requerido. ¡Acuérdate de usar `{}` para evaluar variables XML dentro del texto plano o el método `concat()`!

## Ejercicio 3: ESCENARIO REAL - Generador de Top Ventas (Filtros y Ranking)
El equipo de marketing solicita un listado XML limpio de libros que cuesten más de 20 euros, listos para destacar en portada. Abre el fichero `consulta_ejercicio3.xq`:
**Guía Paso a Paso:**
- **Paso 1:** Inicia la iteración exactamente igual que en el ejercicio dos extrayendo todos los libros de la base (cláusula `for`).
- **Paso 2:** Añade un filtro de permanencia estricto (cláusula `where`) para evaluar y discriminar los libros baratos. Exige que el `precio` sea mayor a `20`.
- **Paso 3:** Emplea la cláusula `order by` apuntando a las `<ventas>` para conformar el ranking de forma descendente (`descending`).
- **Paso 4:** Devuelve cada iteración dentro de un nuevo esquema inventado por ti: utiliza de envolvente una etiqueta `<top_ventas></top_ventas>` e introduce dinámicamente (`{}`) dentro sus correspondientes títulos y ventas generadas iteración a iteración.
