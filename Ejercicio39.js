'use strict';
/*
Enunciado Ejercicio 39:
Dado un número crea una función que genere todas las combinaciones
de parentesis válidas.
 
Ejemplos:
combinacionesParentesis(3);
 
Devuelve:
[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]
 */
function combinacionesParentesis(numero) {
    let resultado = [];
    //comprobar si el numero es valido
    if (numero < 1) return resultado;
    generarParentesis('', numero, numero, resultado);
    return resultado;

}
//funcion  recursiva que se va a llamar a si misma varias veces
let contator = 0;
function generarParentesis(combinacion, abiertos, cerrados, resultado) {
    //sino quedan parentesis abiertos ni cerrados, añadir convinacion a resultados
    if (abiertos === 0 && cerrados === 0) {
        resultado.push(combinacion);
        return true;
    }
    //si todavian quedan parentesis abiertos, añadimos uno a la conbinacion y seguimos con la recurcion
    if (abiertos > 0) {
        generarParentesis(combinacion + '(', abiertos - 1, cerrados, resultado);
    }
    //si todavia quedan parentesis cerrados dipobniles y hay al menos uno abierto disponible,
    //añadimos uno a la combinacion y continuamos con la recursividad
    if (cerrados > 0 && abiertos < cerrados) {
        generarParentesis(combinacion + ')', abiertos, cerrados - 1, resultado);
    }
    //actualizar el contador de recursion
    contator++;
    console.log("Ejecuciones: ", contator, combinacion, resultado);
}
console.log(combinacionesParentesis(2));