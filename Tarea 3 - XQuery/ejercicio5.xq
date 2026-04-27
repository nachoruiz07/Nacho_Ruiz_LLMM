(: EJERCICIO 5: AGRUPACIÓN Y LISTAS ANIDADAS :)

<reporte>
  <h1>Catálogo por Categoría</h1>
  {
    (: TODO: Obtén los valores únicos de las categorías :)
    for $cat in distinct-values(doc("biblioteca.xml")//categoria)
    return
      <div class="categoria">
        <h2>Categoría: { $cat }</h2>
        <ul>
        {
          (: TODO: Para cada categoría, busca sus libros correspondientes :)
          for $libro in doc("biblioteca.xml")//libro[categoria = $cat]
          return
            <li>{ $libro/autor/text() } ({ $libro/autor/text() })</li>
        }
        </ul>
      </div>
  }
</reporte>
