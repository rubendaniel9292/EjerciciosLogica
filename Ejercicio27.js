'use strict';
/*
 Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
 */
function buscarPalabra(frase, palabra) {
    //convertir a minusculas
    const lowerfrase = frase.toLowerCase();
    const lowpalabra=palabra.toLowerCase();
    //buscar palabras
    const indice = frase.indexOf(palabra);
    let resultado = false;
    if(indice >= 0){
        resultado = true;
    }
    
    return resultado;

}
console.log(buscarPalabra('Hola como estas', 'Hola'));