'use strict';
/*
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
*/
function enteroARomano(numero) {
    const numeroOriginal=numero;
    //variable para guardar el resultado final
    let resultado = '';
    //listado de numero romanos
    const caracteresromanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'IV', 'V', 'I'];
    //equivalente en decimales
    const valoresdecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //bucle para recorrer numeros decimales
    for (let i = 0; i < caracteresromanos.length; i++) {
        //bucle para iterar mientras en numero sea mayor o igual al numer decimal que estoy recorriendo
        while (numero >= valoresdecimales[i]) {
            //añadir el caracter romano al resultado
            resultado += caracteresromanos[i];
            //actualizar numero para restar el valor decimal que ya he agregado al resultado de numeros romanos
            numero -= valoresdecimales[i];
            console.log(valoresdecimales[i], "-", numero);


        }

        //devolver resultado

    }

    //return [caracteresromanos.length, valoresdecimales.length];
    return "El numero "+numeroOriginal +" en romano es " + resultado;

}
console.log(enteroARomano(123));