'use strict';
/**
 Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Ruben Rivas WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12
 */

function contarPalabras(frases) {
    //devitir el total de palabras de cada frase
    let totalpalabras = 0;
    //bucle para recorrer frases
    frases.forEach(element => {
        //divifir frase en un array de palabras
        const palabras = element.split(' ');
        let numpalabras = palabras.length;
        //sumar total de palabras a la variable acumuladora
        totalpalabras += numpalabras;
    });
    return totalpalabras;


}
console.log(contarPalabras([
    "Hola, soy Ruben Rivas WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
]));