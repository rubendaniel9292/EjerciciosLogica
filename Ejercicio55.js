'use strict';
/*
Enunciado Ejercicio 55:
Dado un conjunto de enteros distintos, 
devuelve todos los subconjuntos posibles.
 
Ejemplos:
subconjuntos([1,2,3]);
 
Devuelve:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
 */

function subconjuntos(numero) {
    let resultados = [[]];
    //ordenar numeros
    numero.sort((a, b) => a - b);
    for (let i = 0; i < numero.length; i++) {
        //calcular el tamaño de la lista de subconjunto actual
        const size = resultados.length;
        //iterar sub conjunto actual
        for (let j = 0; j < size; j++) {
            //añadir a resultados una copia del subconjunto actual con el nuero actual agregado
            resultados.push([...resultados[j], numero[i]]);

        }
    }
    return resultados;
}
console.log(subconjuntos([1, 2, 3]));