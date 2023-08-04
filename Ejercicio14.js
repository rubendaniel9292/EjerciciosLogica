'use strict';
/*
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

function esPalindromo(palabara) {
    //dividir la cadena en un array
    let letras = [];
    //invertir el array con un bucle
    for (let i = 0; i < palabara.length; i++) {
        letras.push(palabara[i]);
    }
    let letrasinveridas = [];
    for (let i = letras.length - 1; i >= 0; i--) {
        letrasinveridas.push(letras[i]);
    }
    //unir todas las letras del array con un bucle y guardar los resultados en una variable
    let palabrainvertida = '';
    for (let i = 0; i < letrasinveridas.length; i++) {
        palabrainvertida += letrasinveridas[i];
    }
    return (palabara === palabrainvertida);



}

console.log(esPalindromo("otto")); // Devuelve: true
console.log(esPalindromo("victor")); // Devuelve: false