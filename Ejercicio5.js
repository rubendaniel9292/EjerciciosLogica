'use strict';
/*
Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético
 
Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);  
 
*/

function ordenarPorApellidos(personas) {
    //crear variable con aray de apellidos
    const appellidos = personas.map(personas => personas.split(' ')[1]);
    //ordenar los apellidos afabeticamente
    //appellidos.sort((a,b)=>a>b?-1:1) de manera descendetne;
    appellidos.sort();
    //crear array con nombre y appellidos ordenados
    const personasOrdenados = appellidos.map(apellido => {
        //encontrar el nombre y el apellido original correspondiente al apellido ordenado
        const nombreoriginal = personas.find(nombrecompleto => {
            return nombrecompleto.split(' ')[1] === apellido;
        });
        return nombreoriginal;
    });

    return personasOrdenados;

}
console.log(ordenarPorApellidos([
    "Daniel Rivas",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]));