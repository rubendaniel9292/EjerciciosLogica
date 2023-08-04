'use strict';
/*
Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles(["HTML", "PHP"])   // true
sonCompatibles(["PHP", "PYTHON"]) // false

 */
function sonCompatibles(len1 = '', len2 = '') {
    const frontend = ['html', 'html5', 'css', 'javascript'];
    const backend = ['php', 'python', 'ruby', 'node', 'rust', 'perl', 'go', 'golang'];
    if (typeof len1 === 'object') {
        let copia = len1;
        len1 = copia[0];
        len2 = copia[1];


    }
    if (frontend.includes(len1.toLowerCase()) && backend.includes(len2.toLowerCase()) ||
        backend.includes(len1.toLowerCase()) && frontend.includes(len2.toLowerCase())) {
        return true;
    }
    return false;
}
console.log(sonCompatibles(["HTML", "PHP"]));  // true
console.log(sonCompatibles(["PHP", "PYTHON"])); // false