'use strict';

/*
Enunciado Ejercicio 51:
Crea una función que dibuje un diamante de asteriscos.
 
Ejemplos:
generarDiamante(5);
 
Devuelve: 
  *
 *** 
*****
 *** 
  *  
  */

function generarDiamante(size) {
    //forzar que el tamaño que sea impar
    if (size % 2 === 0) size--;
    //calcular la mitad del diamante y redondear
    const mitad = Math.floor(size / 2);
    //recorrer filas del diamente
    for (let filaactual = 0; filaactual < size; filaactual++) {
        let fila = '';
        //calcular numero de espacios
        const espacios = Math.abs(mitad - filaactual);
        //imprimir esfacio en cada fila
        for (let espacioactual = 0; espacioactual < espacios; espacioactual++) {
            fila += ' ';
        }
        //imprimir asteriscos
        for (let asteriscoActual = 0; asteriscoActual  < size - (espacios * 2); asteriscoActual++) {
            fila += '*';
        }
        console.log(fila);
    }

}
generarDiamante(4);