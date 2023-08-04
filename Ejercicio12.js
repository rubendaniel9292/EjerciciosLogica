'use strict';
/*
Enunciado Ejercicio 12:
Crea un programa que cuente las palabras de un texto
 
Ejemplos:
contarPalabras("El perro de san roque no tiene el rabo 
porque es un perro muy muy malo");
 
Devuelve:
{
  el: 2,
  perro: 2,
  de: 1,
  san: 1,
  roque: 1,
  no: 1,
  tiene: 1,
  rabo: 1,
  porque: 1,
  es: 1,
  un: 1,
  muy: 2,
  malo: 1
}

*/
function contarPalabras(frase) {
    //crear el array convertir a minusculas y elimiar tildes
    //con expresion para eliminar signos de puntuacion de manera global indistintametne de si son mayuscuals o minusculas
    const palabaras = frase.toLowerCase().replace(/[^\w\s]/gi, '').split(' ');
    //crear objeto para guardar palabras y su contador
    let contadorPalabras = {};
    //iterar el arrray de palabas y contar cuantas palabras hay
    palabaras.forEach(element => {
        if (element in contadorPalabras) {
            contadorPalabras[element]++;
        } else {
            contadorPalabras[element] = 1;
        }
    });
    //devolver palabaras contadas
    return contadorPalabras;
}
console.log(contarPalabras("estudiar proramacion es lo mejor, los del grupo son de lo mejor"));