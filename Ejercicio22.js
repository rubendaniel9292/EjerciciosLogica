'use strict';
/*
Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 
 */

function invertirTexto(texto) {
    //variable para almacenar la cadena invertida
    let invertida = '';
    //recorrer la cadena de manera ivnersa
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];

    }
    return invertida;

}
console.log(invertirTexto('hola'));