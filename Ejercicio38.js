'use strict';
/*
Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100
 */
function aBinario(numero) {
    let resulatdo = '';
    //mientras el numero sea mayor que 0 continuamos dividiendo entre 2 y aadiendo el resto al resultado
    while (numero > 0) {
        resulatdo = (numero % 2) + resulatdo;
        numero = Math.floor(numero / 2);
    }

    return resulatdo;

}
console.log(aBinario(10)); // 1010
console.log(aBinario(76)); // 1001100