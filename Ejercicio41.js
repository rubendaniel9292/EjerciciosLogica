'use strict';
/*
Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321
*/

function invertirEntero(numero) {
    let cadena = numero.toString();
    let num = cadena.split('');//separar
    num.reverse();
    if (num[num.length - 1] === '-') {
        num.pop();
        num.unshift('-');
    }
    let textoinvertido = num.join('');
    return parseInt(textoinvertido);
}

console.log(invertirEntero(123));  // 321
console.log(invertirEntero(-123));