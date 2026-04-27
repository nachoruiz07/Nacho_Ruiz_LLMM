(: EJERCICIO 2: GENERACIÓN DE UNA TABLA ESTRUCTURADA HTML :)

<table>
    <tr>
        <th>Título</th>
        <th>Autor</th>
        <th>Stock</th>
    </tr>
{
    (: TODO Paso 1: Retoma tu FOR recorriendo todos los libros :)
    for $libro in doc("biblioteca.xml")//_____
    
    (: TODO Paso 2: Retorna una fila de tabla completa y usa llaves {} para sustituir en los campos internos :)
    return 
        <tr>
            <td>{ $libro/titulo/text() }</td>
            <td>{ $libro/autor/text() }</td>
            <!-- Coloca abajo el stock: -->
            <td>{$libro/stock/text()}</td>
        </tr>
}
</table>
