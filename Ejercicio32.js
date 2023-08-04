'use strict';
/*
Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 
// Devuelve: Hola Victor Robles, hace frio
 */
function fraseFiltrada(texto) {
    //separar el texto por palabras y guardarlas en un array
    const palabras = texto.split(' ');
    //filtrar el array con las palabras de 4 o mas caracteres
    const filtrado = palabras.filter(palabra => palabra.length >= 4);
    return filtrado.join(' ');
}

console.log(fraseFiltrada("Hola soy Victor Robles, hoy hace frio"));