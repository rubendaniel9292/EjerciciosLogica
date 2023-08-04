'use strict';
/*
Enunciado Ejercicio 49:
Crea una función que dado un array de números devuelva el número 
más pequeño de la matriz.
 
No puedes ordenar el array, solo usar estructuras de control.
 
Ejemplos:
elMasPequenio([8,9,99,88,77,1,12,13,6,7])  // Devuelve: 1

 */
function elMasPequenio(numeros) {
    let peque = numeros[0];
    for (const numero of numeros) {
        if (numero < peque) {
            peque = numero;
        }
    }
    return peque;

}
console.log(elMasPequenio([8, 9, 99, 88, 77, 1, 12, 13, 6, 7]));