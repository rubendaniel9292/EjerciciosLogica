'use strict';
/*Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
Ejemplos:
filtrarUsuarios(usuarios);
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
*/
function filtrarUsuarios(usuarios) {
    //usar filter
    const filtrado = usuarios.filter(({ nombre, edad }) => {
        return edad >= 20 && nombre.toLowerCase().includes('o') && nombre.toLowerCase().includes('n');
    });
    return filtrado;
    //devovler como validos los que coumplan las 3 condicion

}
const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
console.log(filtrarUsuarios(usuarios));
