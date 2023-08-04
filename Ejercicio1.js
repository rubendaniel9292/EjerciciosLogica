'use strict';
/*
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/
// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};

function mostrarInformacionSuperheroe(aka){//recibe el nombre del super heroe
    //comprobar si el super heroe existe en el objeto
    if(aka in infoSuperheroes){
        //mostrar la info
        const info = infoSuperheroes[aka];
        console.log(`------${aka}------`);
        console.log(`Nombre real:  ${info.nombreReal}`);
        console.log(`Poderes:  ${info.poderes.join(', ')}`);
        console.log(`Equipo:  ${info.equipo} \n`);


    }else console.log(`${aka}`, " no existe ");
    //conseguir la info del superheroe


}
mostrarInformacionSuperheroe('Iron Man');

//mostrar info por arrays

const mostrarInformacionSuperheroes = (akas)=>{
    //recorrer todos los nombres
    akas.forEach(element => {
        //mostrar la info usando la informacion anterior
        mostrarInformacionSuperheroe(element);
    });
}
mostrarInformacionSuperheroes(["Iron Man","Thor","Batman"]);