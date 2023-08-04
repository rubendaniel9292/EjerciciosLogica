"use strict";
/* 
Enunciado Ejercicio 67:
Dada una frase devuelve la longitud de la última palabra que tenga más de 4
caracteres y que contenga la vocal A.
 
Ejemplos:
longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy')
 
*/
function longitudUltimaPalabra(string) {
    const palabras = string.split(' ');
    let palabrasquecumplen = [];
    for (let palabra of palabras) {
        palabra.toLowerCase();
        if (palabra.length >= 4 && palabra.includes('a')) {
            palabrasquecumplen.push(palabra);
        }
    }
    return palabrasquecumplen[palabrasquecumplen.length - 1];

}
console.log(longitudUltimaPalabra('El cielo está encapotado quien lo desencapotará hoy'));