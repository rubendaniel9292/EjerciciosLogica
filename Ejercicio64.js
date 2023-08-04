"use strict";
/* 
Enunciado Ejercicio 64:
Crea un programa que compruebe si los paréntesis, llaves y corchetes 
de una expresión están equilibrados, es decir, que estos delimitadores 
se abren y cieran de forma adecuada.
 
Ejemplos:
expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }');  // imprime true
expresionEquilibrada('{ x * ( y + z ) ] + 12 }');  // imprime false
*/
function expresionEquilibrada(expresion) {
    //pila para gruadar signos de aperura
    const pila = [];
    //crear un objeto para guardar pares válidos
    const pares = {
        '{':'}', '[':']', '(':')'
    }
    //recorrer carateres
    for (const caracter of expresion) {
        //si es abierto lo agrego a la pila
        if (caracter in pares) {
            pila.push(caracter);
            //si el carcater es cerrado compruebo si es equivalente al abierto de la pila
        } else if (Object.values(pares).includes(caracter)) {
            //si el valor de cierre es distinto al de apertura, retorna false 
            if (pares[pila.pop()] !==caracter) return false;

        }
       
    }
    return pila.length === 0;

}
console.log(expresionEquilibrada('{ [ x * ( y + z ) ] * 12 }'));  // imprime true
console.log(expresionEquilibrada('{ x * ( y + z ) ] + 12 }'));  // imprime false