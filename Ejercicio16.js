
'use strict';
/*
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Ruben  *
* Rrivas *
* WEB    *
**********
 */

function mostrarTextoCaja(frase) {
    //separar la frase en palabras y vel cuantos caracteres tiene la  palabra mas larga
    const palabras = frase.split(' ');
    let longitudMaxima = 0;
    palabras.forEach(palabra => {
        longitudMaxima = Math.max(longitudMaxima, palabra.length);
    });
    //espacio por defectos extra
    const espacios = 4;
    //imprimir la primer linea del marco
    const asteriscosTotales = longitudMaxima + espacios;
    console.log('*'.repeat(asteriscosTotales));
    palabras.forEach(palabra => {
        const espacio = ' '.repeat(longitudMaxima - palabra.length);
        console.log(`*${palabra}${espacio} *`);
    })
    //recorrer palabras y mostrarla por linea dentro de la caja
    //imprimir linea final
    console.log('*'.repeat(asteriscosTotales));

}
console.log(mostrarTextoCaja('Hola soy Ruben Rivas y estudio WEB'));