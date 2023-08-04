'use strict';
/*
Enunciado Ejercicio 53:
Crea una función para encontrar la longitud del mayor
subconjunto de caracteres que no se repiten.
 
Ejemplos:
encontrarSubcadenaSinRepetir("abcabcbb")  // abc, 3
encontrarSubcadenaSinRepetir("bbbbb")     // b, 1
encontrarSubcadenaSinRepetir("pwwkew")    // wke, 3
 */

function encontrarSubcadenaSinRepetir(texto) {
    let subcadenasinrepetir = '';
    let subcadenactual = '';
    for (const caracter of texto) {
        //comporbar si el caracter se cuentra en la subcadena
        if (subcadenactual.indexOf(caracter) !== -1) {
            subcadenactual = '';
        }
        //añadir el caracter a la subcadena actual
        subcadenactual += caracter;
        if (subcadenactual.length > subcadenasinrepetir.length) {
            subcadenasinrepetir = subcadenactual;
        }
        console.log(subcadenasinrepetir, subcadenasinrepetir.length);
        return subcadenasinrepetir.length;


    }
}
encontrarSubcadenaSinRepetir("abcabcbb");  // abc, 3
encontrarSubcadenaSinRepetir("bbbbb");    // b, 1
encontrarSubcadenaSinRepetir("pwwkew");    // wke, 3