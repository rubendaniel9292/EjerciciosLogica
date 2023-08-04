'use strict';
/*
Enunciado Ejercicio 34:
Crea una función a la cual le pase un array y me devuelva 
un objeto con los elementos agrupados
 
Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)  
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
 
agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
 
 */
function agrupar(datos, clave) {
    //objeto vacio para llenar con los resultados
    let resultado = {};
    //recorrer todos los elementos del array de datos
    datos.forEach(element => {
        //evaluar si la clave de agrupacion es una funcionoo una propiedad
        let propiedad = typeof clave === 'function' ? clave(element) : element[clave];
        //comporbar si el valor no existe y crear un elemento dentro del objeto
        if (!resultado[propiedad]) resultado[propiedad] = [];
        //agregar elemento al array correspondiente
        resultado[propiedad].push(element);

    
    });
    console.log(resultado);


}

agrupar([7.2, 5.3, 7.4], Math.floor)
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length')
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }

agrupar([{ nombre: "victor", edad: 33 }, { nombre: "paco", edad: 44 }], 'edad')
// Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }