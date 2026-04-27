(: EJERCICIO 4: FILTRADO Y ORDENACIÓN :)

<html>
<body>
  <h1>Libros de Programación Ordenados por Precio</h1>
  <table border="1">
    <tr><th>Título</th><th>Precio</th></tr>
    {
        (: TODO: Filtra por categoría 'Programacion' y ordena por precio ascendente :)
        for $libro in doc("biblioteca.xml")//libro
        where $libro/categoría = 'Programacion'
        order by _____($libro/precio) ascending 
        return 
            <tr>
                <td>{ $libro/titulo/text() }</td>
                <td>{ $libro/precio/text() } €</td>
            </tr>
    }
  </table>
</body>
</html>
