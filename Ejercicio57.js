/*
Enunciado Ejercicio 57:
Crea una función que convierta cualquier frase a una SEO slug.
 
Una seo slug es un fragmento de url optimizado para posicionamiento web:
cursos-de-victor-robles-web
 
Ejemplos:
transformarURL("Cursos de Daniel Rivas WEB");
 
Devuelve:
cursos-de-daniel-rivas-web
 
 */

function  transformarURL(titulo) {
    //convertir en minusculas
    const titulo2 = titulo.toLowerCase();
    //manera 1 remplazar los espacios con guiones con replacce
    //const slug = titulo.replace(/ /g,'-');
    //manera 2 separar la frase en palabras y luego unirlas con guines
    const slug = titulo2.split(' ').join('-');
    return slug;

}
console.log(transformarURL("Cursos de Daniel Rivas WEB"));