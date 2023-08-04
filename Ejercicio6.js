'use strict';
/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
// Salida:
2024
2028
2032
2036
2040
2044
2048
2052
*/

function bisiestos(anio) {
    //varliable limite de año
    const limite = 30;
    //bucle que se ejecute tantas veces como años limite tengamos
    for (let i = 0; i < limite; i++) {
        //comprobar con date si el 29 de febrero existe en el año actual, si existe mostrarlo cono año biciesto
        const fecha = new Date(anio, 1, 29).getMonth();
        anio++;
        if (fecha === 1) {
            console.log('Año', anio, 'Mes', fecha + 1);
        }
    }
}
bisiestos(2023);