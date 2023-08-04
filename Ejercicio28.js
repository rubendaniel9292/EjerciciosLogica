'use strict';
/*
Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true
 */
function esArmstrong(numero) {
    //convertir numero a cadena de texto
    numero = numero.toString();
    //calcualr la longitudde la cadena
    let zize = numero.length;
    //variable para acumular la cifra de calcular la elevacion al tamaño
    let suma = 0;
     //recorrer el caracter del texto  y actualizar la variable acumuladora
    for (let i = 0; i < zize; i++) {
        suma += parseInt(numero[i]) ** zize;

    }
    return parseInt(numero) === suma;

   


}

console.log(esArmstrong(371));