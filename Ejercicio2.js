'use strict';
/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
*/
function simplificarRuta(ruta) {
    //variable pila para almacenar las partes de rutas
    let pila = [];
    //dividir la ruta en diferentes partes utlizando el separador
    const partes = ruta.split('/');
    //recorrer cara parte
    for (const parte of partes) {
        //si parte es ... quita el ultimo elemento
        if (parte === '..') { pila.pop(); }
        //si la parte es difernete a . o cadena vacia lo guardo esa parte en la pila
        else if (parte !== '.' && parte !== '') { pila.push(parte); }
    }
    return '/' + pila.join('/');

}
//console.log(simplificarRuta('/home//pruebas'));
console.log(simplificarRuta("/home/"));             // Salida: /home
console.log(simplificarRuta("/x/./y/../../z/"));    // Salida: /z
console.log(simplificarRuta("/../"));               // Salida: /
console.log(simplificarRuta("/home//pruebas/"));    // Salida: /home/pruebas



