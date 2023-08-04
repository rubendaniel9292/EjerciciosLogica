'use strict';
/**
 Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola
 */

function invertirPalabras(frase) {
    const palabras = frase.split(' ');
    let fraseinvertida = '';
    for (let i = palabras.length - 1; i >= 0; i--) {
        if (palabras[i].length >= 1) {
            fraseinvertida += palabras[i].trim() + ' ';
        }
    }
    return fraseinvertida;
}
console.log(invertirPalabras("Hola soy Victor Robles"));