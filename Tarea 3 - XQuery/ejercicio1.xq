(: EJERCICIO 1: GENERACIÓN DE UNA LISTA HTML :)

<ul>
{
    (: TODO Paso 1: Completa el FOR para iterar por cada uno de los libros del archivo "biblioteca.xml" :)
    for $libro in doc("biblioteca.xml")//_____ return 
    
    (: TODO Paso 2: Genera un elemento li para la lista HTML :)
    (: Ejemplo esperado: <li>El Imperio Final - Brandon Sanderson</li> :)
    return 
        <li>{$libro/titulo} - {$libro/autor}</li>
}
</ul>
