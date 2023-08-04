'use strict';
/*
Enunciado Ejercicio 54:
En la película de Avatar, existen diferentes tribus de Na'vi 
que habitan Pandora. Cada tribu tiene una habilidad especial y 
un valor de poder entre 1 y 5:
 
Tribus pacifistas: Omaticaya (1), Tawkami (2), Kekunan (3)
Tribus guerreras: Rda (2), Hometree (3), Toruk Makto (5)
 
Crea un programa que calcule el resultado de una guerra 
entre dos ejércitos de Na'vi. 
Ejemplos:
calcularResultadoGuerra(tribusBuenas, tribusMalas);
Devuelve:
"¡Gana el mal!"
 */
const tribusBuenas = [
    { nombre: { valor: 1, nombre: "Omaticaya" }, cantidad: 10 },
    { nombre: { valor: 2, nombre: "Tawkami" }, cantidad: 5 },
    { nombre: { valor: 3, nombre: "Kekunan" }, cantidad: 13 },
];
 
const tribusMalas = [
    { nombre: { valor: 2, nombre: "Rda" }, cantidad: 10 },
    { nombre: { valor: 3, nombre: "Hometree" }, cantidad: 5 },
    { nombre: { valor: 5, nombre: "Toruk Makto" }, cantidad: 1 },
];
 