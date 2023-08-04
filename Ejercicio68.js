"use strict";
/*
Enunciado Ejercicio 68:
Crea una función que pueda generar contraseñas aleatorias.
 
Podrás pasar los siguientnes parámetros para las contraseñas:
- Longitud: Entre 6 y 20.
- Con o sin mayúsculas.
- Con o sin números.
- Con o sin símbolos.
 
Ejemplos:
generarContrasenia(12, true, true, false);
 
 */
function generarContrasenia(longitud, mayus, nuemros, simbolos) {
    if (longitud < 6 || longitud > 20) {
        return '';
    }
    let contrania = '';

    let dicionario = 'abcdefghijklmnñopqrstuvwxyz';
    if (mayus) dicionario += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    if (nuemros) dicionario += '0123456789';
    if (simbolos) dicionario += '!@#&%*()/[]{}=.<>';
    for (let contador = 0; contador < longitud; contador++) {
        contrania += dicionario.charAt(Math.floor(Math.random() * dicionario.length));//tomar un idice aleatorio de todo el dicionario

    }
    return contrania;

}
console.log(generarContrasenia(12, true, true, true));