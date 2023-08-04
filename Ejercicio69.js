"use strict";
/*
Enunciado Ejercicio 69:
Crea una función que dado un texto, sea capaz de censurar palabras.
 
Ejemplos:
censurar("Texto de prueba", "texto") // ***** de prueba
 
 */

function censurar(texto, censura) {
    let remplazada = texto.toLowerCase();
    while (remplazada.includes(censura)) {
        remplazada = remplazada.replace(censura, '*'.repeat(censura.length));
    }
    return remplazada;
}
console.log(censurar("Texto de prueba porque soy un texto de prueba", "texto"));