"use strict";
/*
Enunciado Ejercicio 62:
Dado un diccionario de letras disponibles:
[
   ['A','B','C','D'],
   ['S','V','C','S'],
   ['A','D','O','E']
 ]
 
 Crea una función que me diga si la palabra que le paso
 como parametro se puede formar con las letras del
 diccionario disponibles.
 
¡PERO OJO! Cada vez que se usa una letra, se eliminia del array.

Ejemplos:
puedeFormarPalabra('BESO', diccionario)   // true
puedeFormarPalabra('SOSO', diccionario)   // false   
 
 */
function puedeFormarPalabra(palabra) {
    let resultado = null;
    let diccionario = [
        ['A', 'B', 'C', 'D'],
        ['S', 'V', 'C', 'S'],
        ['A', 'D', 'O', 'E']
    ];
    let todaslasletras = diccionario.flat();
    for (const letra of palabra) {
        if (!todaslasletras.includes(letra)) resultado = false;
        todaslasletras.splice(todaslasletras.indexOf(letra), 1);
        //console.log(diccionario);
    }
    if (resultado === false) {
        resultado = false;
    } else {
        resultado = true;
    }
    console.log(resultado);
    return resultado;
}

console.log(puedeFormarPalabra('BESO'));   // true
console.log(puedeFormarPalabra('SOSO'));// false   