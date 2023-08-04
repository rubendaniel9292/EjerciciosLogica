"use strict";
/*
Enunciado Ejercicio 70:
Crea una función que dado un texto que contenga varias frases en minusculas,
logre poner en mayusculas las letras correctas del texto. 
 
Ejemplos:
capitalizarFrase("hola. como estas. soy Daniel Rivas. me gusta programar.");
 
Devuelve:
Hola. Como estas. Soy Victor Robles. Me gusta programar.
 */

function capitalizarFrase(texto) {

    let capitalizado = '';
    let nuevafrase = true;
    for (let i = 0; i < texto.length; i++) {

        if (nuevafrase) {
            if (texto[i] !== ' ') {
                capitalizado += texto[i].toUpperCase();
                nuevafrase = false;
            } else {
                capitalizado += texto[i];
            }
        } else {
            capitalizado += texto[i];
        }
        if (texto[i] === '.') {
            nuevafrase = true;
        }

    }
    return capitalizado;
}
console.log(capitalizarFrase("hola. como estas. soy Daniel Rivas. me gusta programar."));