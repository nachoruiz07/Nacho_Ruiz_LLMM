(: EJERCICIO 3: ESCENARIO REAL - DASHBOARD WEB DE CONTROL :)

<table>
    <tr>
        <th>Título</th>
        <th>Autor</th>
        <th>Stock</th>
    </tr>
{
    (: TODO Paso 1: Itera todos los libros de biblioteca.xml :)
    for $libro in doc("biblioteca.xml")//libro
    return 
        (: TODO Paso 2: Evalúa numéricamente el nodo stock del iterador actual. 
                        Si es explícitamente = 0, genera un TR de advertencia remarcada en rojo. Si no, uno neutral HTML puro. :)
        if ($libro/stock = 0) then 
            <tr style="color:red; font-weight:bold;">
                <td>{ $libro/titulo/text() }</td>
                <td>{ $libro/autor/text() }</td>
                <td>AGOTADO</td>
            </tr>
        else 
            <tr>
                <td>{ $libro/titulo/text() }</td>
                <td>{ $libro/autor/text() }</td>
                <!-- Introduce en la interpolación el valor puramente natural original -->
                <td>{ $libro/stock }</td>
            </tr>
}
    <!-- TODO Paso 3 y 4: Métricas extra de negocio anexadas tras el volcado -->
    <tr style="background-color: #ddd; font-weight: bold; font-family: monospace;">
        <td colspan="2">UNIDADES EN ALMACÉN LOGÍSTICO:</td>
        <!-- Llama directamente de manera matemática a sum(...) englobando todos y absolutos los stocks generales del archivo para la computación métrica -->
        <td>{sum(//libro/stock)}</td>
    </tr>
</table>
