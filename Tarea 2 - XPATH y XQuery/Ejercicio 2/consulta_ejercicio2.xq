(: EJERCICIO 2: INTRODUCCIÓN A XQUERY (FLWOR) :)

(: TODO Paso 1: Itera sobre todos los libros presentes en datos.xml :)
for $libro in doc("datos.xml")//_____ 

(: TODO Paso 2: Genera un texto plano concatenando resultados. 
    Ejemplo de output esperado: "El libro El Imperio Final cuesta 19.95 euros." 
    Pista: Usa la notación {$variable} para incrustar el XML en tu cadena. :)
return concat("El libro ", $libro/_____, " cuesta ", $libro/_____, " euros.")

for $libro in //libro
return concat("El libro ", $libro/titulo, " cuesta ", $libro/precio, " euros.")
