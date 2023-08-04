"use strict";
/*
Enunciado Ejercicio 63:
Crea una función para conseguir las sumas acumuladas de una array de numeros
 
Ejemplos:
sumasAcumuladas([1, 2, 3, 4])   // [1, 3, 6, 10] 
 
(se calcula como: [1, 1+2, 1+2+3, 1+2+3+4])
 */
function sumasAcumuladas(numeros) {
    let resultado = [];
    let suma = 0;
    for (const numero of numeros) {
        suma += numero;
        resultado.push(suma);
    }
    return resultado;
}
console.log(sumasAcumuladas([1, 2, 3, 4]));