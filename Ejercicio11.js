"use strict";
/* 
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
*/
function sumarDos(numeros, resultado) {
    //recorrer el array de numeros
    for (let i = 0; i < numeros.length; i++) {
        //calculo para sacar el segundo numero para devlver
        let segundoNumero = resultado - numeros[i];
        //console.log(numeros.includes(segundoNumero));
        //comprobar si existe un segundo numero en el array que sumado al actual sea igual al resultado esperado
        //y comprobar que la variable 2
        //si se cumple la condicion devolver un array con el numero actual y el segundo que he calculado
        //donumero el valor es distinto al numero actual que estoy recorriendo
        if (numeros.includes(segundoNumero) && segundoNumero !== numeros[i]) {
            return [numeros[i], segundoNumero];
        }
    }
}
console.log(sumarDos([1, 2, 3, 4], 5));
console.log(sumarDos([3, 7, 8, 2], 10)); // [3, 7] (ambos suman 10)
console.log(sumarDos([4, 5, 9, 1], 10)); // [9, 1]
console.log(sumarDos([1, 2, 3, 4], 5)); // [2, 3]
