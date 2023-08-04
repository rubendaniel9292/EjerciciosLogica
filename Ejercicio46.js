'use strict';
/*
Enunciado Ejercicio 46:
Crea una función a la que le pasemos una nota y nos de una calificación:
 
0-3: Deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
 
Ejemplos:
calificar(8.2) // Notable
 */
function calificar(nota) {
    let resultado = '';
    switch (true) {

        case (nota >= 0 && nota < 3):
            resultado = 'deficiente';
            break;
        case (nota >= 3 && nota < 5):
            resultado = 'insuficiente';
            break;
        case (nota >= 5 && nota < 6): ;
            resultado = 'suficiente';
            break;
        case (nota >= 6 && nota < 7): ;
            resultado = 'buena';
            break;
        case (nota >= 7 && nota < 9): ;
            resultado = 'notable';
            break;
        case ((nota >= 9 && nota <= 10) || nota > 10): ;
            resultado = 'sobresaliente';
            break;
    }
    console.log(resultado)
    return resultado;
}
calificar(10);
