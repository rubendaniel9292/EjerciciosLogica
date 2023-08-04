'use strict';
/*
Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);

Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
]
 */

function generarMatriz(numero) {
    //crear array vacion
    let matriz = [];
    //variable con el numero actual
    let numeroActual = 1;
    //bucle para generar las filas y dentro otro bucle para las colmunas
    for (let i = 0; i < numero; i++) {
        matriz.push([]);
        for (let j = 0; j < numero; j++) {
            matriz[i].push(numeroActual++);
        }
    }
    return matriz;
}
console.log(generarMatriz(20));