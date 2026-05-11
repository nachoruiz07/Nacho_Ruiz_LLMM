# Semana 4: Tecnologías de Almacenamiento (XML en SQL Server)

## Objetivo
Aprovechar los conocimientos en SQL Server para almacenar y consultar documentos XML de forma nativa dentro de una base de datos relacional orientada a tablas. Utiliza la plantilla de trabajo llamada `soluciones.sql` rellenando los apartados. (Ejecuta primero `script_base.sql`).

## Ejercicio 1: Método `.query()`
El tipo XML nativo en SQL Server dispone de una serie de funciones (parecidas a métodos de objetos orientados) que se inyectan en las TSQL con el punto (`.`).
**Guía Paso a Paso:**
- **Paso 1:** Abre SQL Server Management Studio (SSMS) o tu IDE de trabajo y conéctate.
- **Paso 2:** Genera un `SELECT` tradicional sobre `DocumentosXML`. Fíjate que hay una columna cuyo tipo y renderización por el programa parece literalmente un documento anidado.
- **Paso 3:** En tu proyección (SELECT), llama a `ContenidoXML.query('tu_ruta_xpath_aqui')`. Con esto lograrás que SQL dispare el motor XQuery internamente contra esa ruta, extrayendo los trozos de nodos conservando sus etiquetas (`<etiqueta>`).

## Ejercicio 2: Método `.value()` para extracción de tipos atómicos
Es genial traernos trozos de un árbol XML, pero en BBDD relacionales casi siempre queremos datos simples (VARCHAR, INT, FLOAT) que podamos sumar u ordenar.
**Guía Paso a Paso:**
- **Paso 1:** Ve a la zona de proyección en el `SELECT`. Escribe la función `.value()`. Ésta exige siempre dos argumentos en su interior: `.value('ruta[indice]', 'tipoDato')`.
- **Paso 2:** Construye la XPath al título (tiene que apuntar al título exacto y acabar explícitamente en el primer elemento extraído si es ambiguo, por ejemplo: `(//libro/titulo)[1]`). Esto es estrictamente obligatorio para el método `.value()`.
- **Paso 3:** Indica el segundo argumento (el tipo). Prueba a castearlo a un string escribiendo `'VARCHAR(50)'` para que te devuelva el texto plano extraído del nodo.

## Ejercicio 3: ESCENARIO REAL - Informe Integrado de Costes y Control de Calidad Transaccional (`.nodes` mezclado con Lógica Relacional en T-SQL Puro)
El equipo general de finanzas nos exige romper ese XML hermético y opaco guardado globalmente y modelizar un pipeline que extraiga, separe e integre iterativamente las filas dentro del motor. Quieren descartar a nivel de sistema relacional los libros que dejan un margen dudoso de beneficio (menos de 20 euros) y extraer sus celdas ya tabuladas y tipificadas limpiamente antes del guardado.
**Guía Paso a Paso:**
- **Paso 1:** Aplica en tu sentencia FROM la potente cláusula estandarizada de desdoble `CROSS APPLY` rompiendo la membrana de cada documento mediante el volcado generador temporal `.nodes('//libro')`.
- **Paso 2:** Diseña tu modelo tabular en el bloque `SELECT` en T-SQL puro, solicitando la descripción y abriendo dinámicamente nuevas columnas atómicas mediante casteos de tipo a ese alias/puntero. Exige el `<titulo>` como simple `VARCHAR(100)` y procesa de manera vital el valor jerárquico del `<precio>` convirtiéndolo inequívocamente al tipo transaccional nativo ideal `DECIMAL(10,2)`.
- **Paso 3:** Es el momento cumbre. Como el XML ha mutado de objeto bloqueado y estancado a valores nativos de tipo escalares en una tabla viva local del entorno relacional, invoca e instrumenta abajo en tu query una cláusula estándar `WHERE`. Pídele puramente a SQL Server (utilizando recursívamente el .value nuevamente del alias de puntero) que te ignore todos los desplegados tabulados cuyo formato originario importado y casteado denotara un precio `< 20`.

---

## Ejercicio 4: Modificación de Datos XML con `.modify()`

Hasta ahora solo hemos **leído** el XML. Pero SQL Server también permite **modificar** el contenido de un nodo directamente con el método `.modify()`, sin tener que reemplazar el documento entero.

**Guía Paso a Paso:**
- **Paso 1:** Escribe un `UPDATE` sobre la tabla `DocumentosXML`. En el bloque `SET`, llama al método `.modify()` sobre la columna `ContenidoXML`. Este método acepta instrucciones XQuery especiales de mutación.
- **Paso 2:** Dentro de `.modify()`, usa la expresión `replace value of` para localizar el nodo que quieres cambiar. La sintaxis es: `replace value of (//libro[@id="L01"]/titulo/text())[1] with "El Camino de los Reyes"`. Esto localiza el nodo texto y lo sustituye.
- **Paso 3:** Añade una cláusula `WHERE ID = 1` para que el `UPDATE` solo afecte a la fila con ese documento. Después, comprueba el resultado haciendo un `SELECT` con `.query()` para verificar que el título ha cambiado realmente en la base de datos.

---

## Ejercicio 5: Inserción Condicional con `IF EXISTS` y XML

Antes de insertar un nuevo nodo en el XML, el sistema debe comprobar si ya existe para evitar duplicados. Combinamos lógica T-SQL con predicados XQuery.

**Guía Paso a Paso:**
- **Paso 1:** Usa el método `.exist()` dentro de un bloque `IF` de T-SQL para comprobar si ya existe un libro con `id="L01"`. La estructura es: `IF (SELECT ContenidoXML.exist('//libro[@id="L01"]') FROM DocumentosXML WHERE ID = 1) = 1`.
- **Paso 2:** Si el libro ya existe (rama `BEGIN ... END` del `IF`), usa `.modify()` con la expresión `insert` de XQuery para añadir un **nodo nuevo** `<precio>24.95</precio>` como hijo del libro L01. La sintaxis de inserción es: `insert <precio>24.95</precio> as last into (//libro[@id="L01"])[1]`.
- **Paso 3:** Si el libro **no** existe (bloque `ELSE BEGIN ... END`), lanza un mensaje de aviso con `PRINT 'El libro L01 no existe, no se puede insertar el precio.'`. Verifica el resultado con un `.query()` final.

---

## Ejercicio 6: ESCENARIO AVANZADO — Procedimiento Almacenado Generador de Informes XML

El departamento de dirección quiere un sistema reutilizable. Debes encapsular toda la lógica de extracción en un **Stored Procedure** parametrizado que acepte un nombre de sección y devuelva una tabla con los libros de esa sección.

**Guía Paso a Paso:**
- **Paso 1:** Crea un procedimiento con `CREATE PROCEDURE sp_InformeSeccion @seccion VARCHAR(50)`. Dentro del cuerpo, escribe el `SELECT` con `CROSS APPLY` y `.nodes()` que ya dominaste en el Ejercicio 3.
- **Paso 2:** En el predicado XPath del `.nodes()`, filtra dinámicamente por el atributo `nombre` de la sección usando el parámetro SQL dentro del XQuery: `//seccion[@nombre=sql:variable("@seccion")]/libro`. La función `sql:variable()` es el puente entre T-SQL y XQuery.
- **Paso 3:** Prueba el procedimiento ejecutándolo con `EXEC sp_InformeSeccion 'Tecnica'` y luego con `EXEC sp_InformeSeccion 'Ficcion'`. Comprueba que los resultados cambian según el parámetro.


