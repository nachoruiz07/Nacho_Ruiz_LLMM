-- ============================================================
-- ALUMNO: [TU NOMBRE COMPLETO] | Expediente: [XXXXX]
-- ============================================================
-- UTILIZA LA BASE DE DATOS CREADA --
-- USE BibliotecaXML;
-- GO

-- EJERCICIO 1: MÉTODO .query()

-- 1. Selección básica
-- TODO: Haz un SELECT a toda la tabla DocumentosXML.


-- 2. Uso del método query()
-- TODO: Añade el método .query('//titulo') apuntando a la columna ContenidoXML para traerte el fragmento jerárquico inalterado.


-- 3. Combinación relacional-XML
-- TODO: Selecciona proyectando la columna ID, la Descripcion normal y finalmente invoca .query() para traer los títulos.


-- EJERCICIO 2: MÉTODO .value() PARA EXTRACCIÓN ESCALAR O ATÓMICA

-- 1 y 2. Extraer el primer título
-- TODO: Convierte un nodo interno del XML a algo utilizable por columnas SQL. 
-- El argumento de .value() es .value('ruta[indice]', 'tipo_de_dato'). Transforma (//libro/titulo)[1] casteándolo a texto (VARCHAR(50)).


-- 3. Extracción de atributo raíz u objeto único
-- TODO: Intenta sacar también en el mismo SELECT el atributo @nombre de la <seccion> casteándolo a VARCHAR(30).


-- EJERCICIO 3: ESCENARIO REAL - PROCESADO FINANCIERO Y CONTROL DE CALIDAD (.nodes + WHERE de negocio)

-- Finanzas quiere que integremos y volquemos los datos de cada libro almacenado en el XML, 
-- pero descartando a nivel relacional nativo las inserciones de libros con coste <= 20.

-- 1. Separar XML iterativamente
-- TODO: Escribe tu SELECT general con su FROM natural hacia DocumentosXML. A continuación añádele el ancla CROSS APPLY extrayendo repetitivamente '//libro' de ContenidoXML y bautiźalo con un Alias.


-- 2. Transformación robusta
-- TODO: En la zona de selección, extrae primero de forma atómica con .value(..., 'VARCHAR(100)') el <titulo>.
-- TODO: Extrae también con .value(..., 'DECIMAL(10,2)') la propia etiqueta <precio>, es fundamental para que el motor entienda los decimales reales y no texto.


-- 3. Transacción pura SQL (El cruce final)
-- TODO: Has transformado el XML en columnas nativas. Acaba el ejercicio inyectando un maravilloso WHERE puramente SQL por debajo del CROSS APPLY. Usa dentro de este WHERE de nuevo la extracción .value() del precio forzandole al compilador relacional la orden expresa: (tuAliasXML.NodoLibro.value(...) > 20).


-- ============================================================
-- EJERCICIO 4: MODIFICACIÓN DE DATOS XML CON .modify()
-- ============================================================



-- 1. UPDATE con .modify() usando replace value of
-- TODO: Escribe el UPDATE sobre DocumentosXML modificando el nodo <titulo>
-- del libro L01 con la expresión: replace value of (...texto()[1]...) with 'TU LIBRO FAVORITO'
-- El título nuevo debe ser un libro real que tú hayas leído.


-- 2. Verificación del cambio
-- TODO: Haz un SELECT con .query('//libro[@id="L01"]') para confirmar
-- que el título ha cambiado en la base de datos.


-- ============================================================
-- EJERCICIO 5: INSERCIÓN CONDICIONAL CON IF EXISTS Y XML
-- ============================================================

-- 1. Bloque IF usando .exist()
-- TODO: Escribe el bloque IF comprobando si existe un libro con id="L01"
-- mediante: IF (SELECT ContenidoXML.exist('//libro[@id="L01"]') FROM ... WHERE ID = 1) = 1


-- 2. Rama BEGIN...END del IF: insertar nodo <precio>
-- TODO: Dentro del BEGIN, usa .modify() con la expresión insert para
-- añadir <precio>24.95</precio> as last into el nodo libro L01.


-- 3. Rama ELSE: mensaje de aviso
-- TODO: En el ELSE, añade PRINT 'El libro L01 no existe, no se puede insertar el precio.'


-- 4. Verificación final
-- TODO: Haz el SELECT .query() para ver el XML modificado con el nuevo nodo precio.





-- ============================================================
-- EJERCICIO 6: PROCEDIMIENTO ALMACENADO sp_InformeSeccion
-- ============================================================



-- 1. Crear el procedimiento parametrizado
-- TODO: Crea el procedimiento con CREATE PROCEDURE sp_InformeSeccion @seccion VARCHAR(50)
-- Dentro, escribe el SELECT con CROSS APPLY .nodes() filtrando con sql:variable("@seccion").


GO

-- 2. Prueba con sección Técnica
-- TODO: EXEC sp_InformeSeccion 'Tecnica'


-- 3. Prueba con sección Ficcion
-- TODO: EXEC sp_InformeSeccion 'Ficcion'
