'use strict';
/** 
 Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
*/
function diferenciaDeDias(fecha1, fecha2) {
    //comprobar que ambas fechas tengan un formato correcto
    fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
    fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);
    //obtener la diferencia en milisegundos entre las dos fechas
    const diferenciaMS = Math.abs(fecha1.getTime() - fecha2.getTime());
    //dividir la firerence de ms entre los ms que tiene un dia y redondearla para sacar los dias
    const dias = Math.floor(diferenciaMS / (1000 * 60 * 60 * 24));
    if (isNaN(dias)) { return 'Formato incorrecto' };
    return 'La diferencia es de ' + dias + ' dias';
}
console.log(diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023'));  // Salida: 23
console.log(diferenciaDeDias('2023-01-24', '2023-05-033'));  // Salida: 98
