'use strict';
/*
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
*/
function juegoDelAhorcado(palabraSecreta) {
    //variable oculta con guines bajos
    let palabraoculta = '_'.repeat(11);
    //variable con el numero de intentos a tener
    let intentos = 5;
    //bucle para pedir letras mientras la palara no este descubierta y aun queden intentos
    while (intentos > 0 && palabraoculta !== palabraSecreta) {
        //pedimos una letra
        let letra = prompt('Ingresa una letra');
        //comprobar si la letra esta en la palabra para actulizar la variable oculta
        if (palabraSecreta.includes(letra)) {
            //actualizar la variable palabra oculta y meter la letra en la posicion correcta
            for (let contadorLetras = 0; contadorLetras < palabraSecreta.length; contadorLetras++) {
                //validar si la letra que he introducido es igual a la letra que estoy recorriendo y asiconseguir el indice
                if (letra === palabraSecreta[contadorLetras]) {
                    console.log(palabraSecreta[contadorLetras]);
                    //convertir la palabra oculta en un array
                    let palabraocultaArray = Array.from(palabraoculta);
                    //selecionar su indice y cambiar _ por la letra adivinada
                    palabraocultaArray[contadorLetras] = letra;
                    //unir el aray en un string de nuevo y acualizar la variable palabra oculta
                    palabraoculta = palabraocultaArray.join('');
                }
            }

        } else {
            //sino existe la letra en la palaba resto un intento
            intentos--;
        }
        //mostrar el estado actual de la palabra oculta
        console.log(`La palabra es: ${palabraoculta}`)
        //mostrar cuantos intentos quedan
        console.log(`te quedan ${intentos} intentos`);

    }
    //si se han adividado las letras mostrar mensaje de victoria
    if (palabraSecreta === palabraoculta) {
        console.log(`Feliciaddes, adivinaste la palabra secreta:  ${palabraSecreta}`);
    } else console.log(`Lo siento, has perdido. La palabra secreta era: ${palabraSecreta}`);
}
const lanzarjuego = document.querySelector('#lanzarjuego').addEventListener('click', juegoDelAhorcado('danielruben'));