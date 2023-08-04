'use strict';
/*
Enunciado Ejercicio 10:
Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
 
Es un proceso matemático facil que se basa en obtener el 
resto de la división entera del número de DNI y el número 23. 
Y con el resto se obtiene la letra, usandolo como posición o indice
dentro de un array de letras.
 
Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
Ejemplos:
generarLetraDNI("25439343");  // Resultado: 25439343D
 
*/


function generarLetraDNI(numeroDni) {
    //definir el array de letras
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    //convertir numero de dni a entero
    numeroDni = parseInt(numeroDni);
    //comprobar si el dni es valido, 8 crifras
    if (numeroDni > 0 && numeroDni < 999999999) {
        //calcular la letra del dni con modulo (%)
        let resto = numeroDni % 23;
        //conseguir la letra del array en base al resto
        let letra = letras[resto];
        return numeroDni + letra;

    } else return "dni invalido";
}
console.log(generarLetraDNI("12263"));