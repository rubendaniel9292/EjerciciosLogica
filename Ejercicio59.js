'use strict';
/*
Enunciado Ejercicio 59:
Crea una función que retorne el número total de bumeranes de un 
array de números enteros e imprima cada uno de ellos.
 
Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
en el que el primero y el último son iguales, y el segundo es diferente. 
Por ejemplo [2, 1, 2].
 
Ejemplos:
contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4])
 
Devuelve:
Hay 2 bumeranes: [[2, 1, 2], [4, 2, 4]]
 
 */

function contrarBumeranes(numeros) {
    let contador = 0;
    let bumeranes = [];
    for (let i = 0; i < numeros.length; i++) {
        const primerNumero = numeros[i];
        const segundoNumero = numeros[i + 1];
        const tercerNumero = numeros[i + 2];
        //console.log(primerNumero, segundoNumero, tercerNumero)

        if (primerNumero === tercerNumero && primerNumero !== segundoNumero) {
            contador++;
            bumeranes.push([primerNumero, segundoNumero, segundoNumero]);
        }

    }
    return [contador, bumeranes];


}
let bum = contrarBumeranes([2, 1, 2, 3, 3, 4, 2, 4]);
console.log('Hay ', bum[0], ' boomeranes: ', bum[1]);