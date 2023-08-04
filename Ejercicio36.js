'use strict';
/*
Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ]

 */
function encontrarParejasConSuma(numeros, suma) {
    //comprobar validez de array y de longitud de 2
    if (!Array.isArray(numeros) || numeros.length < 2) {
        return false;
    }
    //crear array de parejas
    let parejas = [];
    //recorrer array de numeros
    for (const numeroActual of numeros) {
        //recorrer de nuevo a partir del elemento que recorro ahorra
        for (const otroNumero of numeros.slice(numeros.indexOf(numeroActual) + 1)) {//comprobar la suma desde el indice siguiente
            //comprobar si la suma me da el resultado de la suma esperada
            if (numeroActual + otroNumero===suma) {
                parejas.push([numeroActual, otroNumero]);
            }
        }
    }
    return parejas;



}
console.log(encontrarParejasConSuma([1, 2, 3, 4], 5));