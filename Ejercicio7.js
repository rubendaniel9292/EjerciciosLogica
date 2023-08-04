'use strict';
/* 
Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
Devolver el número faltante más grande.
El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4
*/
function permutacion(numeros) {
    //ornedar numeros
    numeros.sort((a, b) => a - b);
    //pila de numeros faltantes
    let numfaltantes = [];
    //recorrer el array y comprobar si cada elemento es igual al siguiente numero + 1
    for (let i = 0; i < numeros.length; i++) {
        let faltante = numeros[i] + 1;
        if (numeros[i + 1] !== faltante) {//evlua siguiente posicion 
            numfaltantes.push(faltante)
        };
    }
    //eliminar el ultimo elemento
    numfaltantes.pop();
    //sino falta ningun numero, devolver el ultimo.
    let resultado = numeros[numeros.length - 1];//conseguimos el ultimo numero
    if (numfaltantes.length >= 1) {
        resultado = numfaltantes[numfaltantes.length - 1];
    }

    //para mostrar el numero faltante mas grande
    return resultado;
}
console.log(permutacion([1, 2, 3, 4, 5, 8]));
