"use strict";
/*
Enunciado Ejercicio 61:
Dado una cadena de números, devuelve todas las combinaciones de letras posibles 
que el número podría representar.
 
Aqui tienes un mapeo de dígitos a letras 
(como en los botones de un teléfono).
 
    const mapeo = [
      ' ', // 0
      '', // 1
      'abc', // 2
      'def', // 3
      'ghi', // 4
      'jkl', // 5
      'mno', // 6
      'pqrs', // 7
      'tuv', // 8
      'wxyz' // 9
    ];
 
Ejemplos:
combinacionesLetras("23")
 
Devuelve:
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 
 */

function combinacionesLetras(numero) {
    if (numero.length === 0) return [];

    //mapear letras
    const mapeo = [
        " ", // 0
        "", // 1
        "abc", // 2
        "def", // 3
        "ghi", // 4
        "jkl", // 5
        "mno", // 6
        "pqrs", // 7
        "tuv", // 8
        "wxyz", // 9
    ];
    //array para guardar resultados
    let resultado = [""];
    //recorrer cada digito de los numeros
    for (const digito of numero) {
        for (let i = 0, longitud = resultado.length; i < longitud; i++) {
            let elementoAnterior = resultado.shift(); //quita el primer elemento
            for (const letra of mapeo[digito]) {
                //console.log(digito, elementoAnterior + letra);
                //console.log(digito, resultado);
                resultado.push(elementoAnterior + letra);
            }
        }
    }
    return resultado;
}

console.log(combinacionesLetras("23"));
