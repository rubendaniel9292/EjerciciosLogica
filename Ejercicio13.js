'use strict';
/* 
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
Devuelve: 54
*/
function calcularAreaPoligono(poligono) {
    let resultado = 0;
    if (poligono.tipo === 'cuadrado' && poligono.lado) {
        resultado = poligono.lado * poligono.lado;
    } else if (poligono.tipo = 'rectangulo' && poligono.base && poligono.altura) {
        resultado = poligono.base * poligono.altura;
    } else if (poligono.tipo === 'triangulo' && poligono.base && poligono.altura) {
        resultado = (poligono.base * poligono.altura) / 2;
    }
    console.log(poligono.tipo);
    return + resultado;
}
console.log(calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }));