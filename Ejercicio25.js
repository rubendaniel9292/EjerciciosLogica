'use strict';
/*
 Enunciado Ejercicio 25:
 similar al anterior, pero con extenciones de archivos
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);
 
Devuelve: 
[ 'nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg']
 
 */
function renombrarArchivos(ficheros) {
    return ficheros.map((fichero, indice) => {
        //crea array nuevo que contenta todos los archivos menos el actual
        let filtrados = ficheros.slice(0, indice).filter(ficherofiltro => fichero === ficherofiltro);
        //sino hay repetidos devolvemos el achivo actual
        //si si hay repetido agregamos numeracion
        let resultado = fichero;
        if (filtrados.length !== 0) {
            let ficheropartido = fichero.split('.');
            resultado = `${ficheropartido[0]}(${filtrados.length}).${ficheropartido[1]}`;


        }
        return resultado;
    })
}
console.log(renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]));