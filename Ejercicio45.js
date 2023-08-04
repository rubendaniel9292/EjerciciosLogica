'use strict';
/*
Enunciado Ejercicio 45:
Dado un array de números, elimina los números duplicados.
 
Ejemplos:
eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6])
 
// Devuelve:
[ 1, 2, 3, 4, 5, 6 ]
 */

function eliminarDuplicados(numeros){
    numeros.sort((a,b)=>a-b);
    let numerosunicos =[];
    for (const numero of numeros) {
        if (!numerosunicos.includes(numero)) {
            numerosunicos.push(numero);
        }
    }
    return numerosunicos;
}
console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 5, 5, 5, 6,5]));