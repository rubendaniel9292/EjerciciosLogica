'use strict';
/*
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
*/

function sumarPares(numeros) {

    let suma = 0;
    numeros.forEach(element => {
        if (element % 2 === 0) {
            suma += element;
        }
    });
    return suma;


}
console.log(sumarPares([2,2, 13, 6, 15]));