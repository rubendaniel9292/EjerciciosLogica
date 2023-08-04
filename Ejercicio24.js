'use strict';
/*
Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 
 */
function renombrarArchivos(ficheros) {
    return ficheros.map((fichero, indice) => {
        //crea array nuevo que contenta todos los archivos menos el actual
        let filtrados = ficheros.slice(0, indice).filter(ficherofiltro => fichero === ficherofiltro);
        //sino hay repetidos devolvemos el achivo actual
        //si si hay repetido agregamos numeracion
        return filtrados.length === 0 ? fichero : `${fichero}(${filtrados.length})`;
    })
}
console.log(renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]));