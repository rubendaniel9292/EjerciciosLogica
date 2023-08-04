'use strict';
/*
Enunciado Ejercicio 44:
Crea una función que detecte si un string es un pangrama o no.
 
Un pangrama es una frase que incluye todas las letras del abecedario.
 
Ejemplos:
esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol.") // true
esPangrama("Hola soy Víctor Robles") // false
 */

function esPangrama(frase) {
    frase = frase.toLowerCase().replace(/\s/g, '');//quitar los espacios
    const abecedario = "abcdefghijklmnñopqrstuvwxyz".split('');//convertir en array y separar

    return abecedario.every(letra => frase.includes(letra));



}
console.log(esPangrama("El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo."));
console.log(esPangrama("Hola soy Daniel Rivas"));