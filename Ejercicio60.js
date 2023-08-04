'use strict';
/*
Enunciado Ejercicio 60:
Programa que calcule el beneficio de un producto despues de restarle:
- 20% de descuento
- 21% de iva
- 15% de irpf
 
 */
function calcularbeneficio(precio) {
    const descuento = precio * 0.2;
    const precioDesceunto = parseFloat(precio - descuento);
    const iva = precioDesceunto * 0.21;
    const irpf = parseFloat(precioDesceunto - iva) * 0.15;
;
    const beneficio = precioDesceunto - iva - irpf;
    return [beneficio]

}
console.log(calcularbeneficio(995));