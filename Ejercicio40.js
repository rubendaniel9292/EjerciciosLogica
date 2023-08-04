'use strict';
/*
Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120
 */
function romanoAEntero(romano) {
    //objeto de numeros romanos y su correspindiente en numero
    const tablaRomanos = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let resultado = 0;
    //Si la letra actual es la ultima o si el valor del siguiente caracter es menor o igual al del actual, añadimos el valor rel resultado

    for (let i = 0; i < romano.length; i++) {
        if (i === romano.length - 1 || tablaRomanos[romano[i + 1]] <= tablaRomanos[romano[i]]) {
            console.log(romano[i], tablaRomanos[romano[i]]);
            resultado += tablaRomanos[romano[i]];
        } else {
            resultado -= tablaRomanos[romano[i]];
        }

    }
    //sino, restar el valor de la letra actual al resultado
    return resultado;
}
console.log(romanoAEntero("XVIII"));   // 18
console.log(romanoAEntero("CXX"));     // 120