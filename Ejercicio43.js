'use strict';
/*

Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
 */

let coleccion = [['A', 'B', 'C', 'D'],
['Z', 'V', 'K', 'S'],
['F', 'G', 'O', 'E']]
function puedeFormarPalabra(palabra, diccionario) {
    //aplanar array en uno solo
    let allletras = diccionario.flat();
    //recorrer cada letra de la palabra
    for (const letra of palabra) {
        if (!allletras.includes(letra)) return false;
    }

    return true;

}
console.log(puedeFormarPalabra('PERRO', coleccion));  // false
console.log(puedeFormarPalabra('CASO', coleccion));   // true