'use strict';
/*
Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
 */

function todosPares(numeros) {
    //metodos nativos
    return numeros.every(numero => numero % 2 === 0);
}

function todosPares2(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        const element = numeros[i];
        if (element % 2 !== 0) {
            return false;
        }
        return true;

    }
}
console.log(todosPares2([1, 2, 3, 4])); // false
console.log(todosPares2([2, 6, 8, 12])); // true