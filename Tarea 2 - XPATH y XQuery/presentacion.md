---
theme: seriph
background: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Presentación de la Semana 02: XPath Avanzado e Introducción a XQuery
drawings:
  persist: false
title: Semana 2 - XPath Avanzado y XQuery
---

# Semana 2: XPath Avanzado e Introducción a XQuery

Profundizar en las expresiones complejas de XPath utilizando ejes avanzados y realizar las primeras iteraciones utilizando XQuery (FLWOR).

---

# Ejercicio 1: Ejes Avanzados y Múltiples Predicados

Desarrollar expresiones complejas con operadores lógicos y ejes de navegación estructural (padres y hermanos).

---

## Solución - Ejercicio 1: Ejes Avanzados

```sql
-- 1. Predicados con operadores lógicos (and)
//libro[precio > 20 and precio <= 26]/titulo

-- 2. Eje inverso (Subiendo en el árbol)
-- Emplea parent:: o ancestor:: 
//libro[@id='L04']/parent::seccion/@nombre

-- 3. Eje horizontal (Buscando hermanos)
-- Emplea following-sibling::
//libro[@id='L01']/following-sibling::libro
```

---

# Ejercicio 2: Introducción a XQuery (FLWOR)

Aprenderemos a construir iteraciones completas extrayendo y reformateando los datos mediante sentencias `FOR` y `RETURN`.

---

## Solución - Ejercicio 2: XQuery Básico

```sql
(: Iteramos sobre todos los libros y generamos una cadena de texto :)
for $libro in doc("datos.xml")//libro
return concat("El libro ", $libro/titulo, " cuesta ", $libro/precio, " euros.")
```

---

# Ejercicio 3: ESCENARIO REAL - Top Ventas

El equipo de marketing solicita un listado XML limpio de libros que cuesten más de 20 euros, ordenado por número de ventas para destacar en portada.

---

## Solución - Ejercicio 3: Ranking con FLWOR

```sql
(: Iteramos los libros base :)
for $libro in doc("datos.xml")//libro

(: Filtramos únicamente aquellos más caros de 20 euros :)
where $libro/precio > 20

(: Ordenamos basándonos en el nodo ventas de forma descendente :)
order by $libro/ventas descending

(: Generamos una estructura nueva de datos en XML :)
return 
    <top_ventas>
        {$libro/titulo}
        {$libro/ventas} 
    </top_ventas>
```

---
layout: center
class: text-center
---

# ¡Excelente!
Siguiente paso: XQuery Avanzado
