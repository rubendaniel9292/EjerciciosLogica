"use strict";
/* 
Enunciado Ejercicio 65:
Dado un array de objetos de usuarios, con nombre y fecha,
crea una función que los ordene por fecha.
 
[
  {
    nombre: "Juan",
    fecha: new Date(1984, 7, 10),
  },
  {
    nombre: "Paco",
    fecha: new Date(2017, 8, 12),
  },
  {
    nombre: "Pepe",
    fecha: new Date(1991, 12, 6),
  },
]
 
Ejemplos:
ordenarPorFecha(usuarios)
 
// Devolver solo nombre
*/

function ordenarPorFecha(array) {
    array.sort((a, b) => b.fecha - a.fecha);
    return array.map(usuarios => usuarios.nombre);
}

let usuarios = [
    {
        nombre: "Juan",
        fecha: new Date(1984, 7, 10),
    },
    {
        nombre: "Paco",
        fecha: new Date(2017, 8, 12),
    },
    {
        nombre: "Pepe",
        fecha: new Date(1991, 12, 6),
    }
]
console.log(ordenarPorFecha(usuarios));