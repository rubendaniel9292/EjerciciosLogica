'use strict';
/*
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
*/

function ordenarPorLongitud(palabras) {
  return palabras.sort((a, b) => a.length - b.length);

}

console.log(ordenarPorLongitud([
  "Hola",
  "soy",
  "Ruben Rivas",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]));