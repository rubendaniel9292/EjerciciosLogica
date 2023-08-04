'use strict';
/*
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio  
 */

function deboSerSocio(veces) {
    let llenadoindividual = 10 * veces;
    let llenadosocio = 90;
    for (let i = 1; i <= veces; i++) {
        //calcular descuento
        let descuento = (0.78 ** i);//elevar a x veces, se acumula el descuento 

        //bloquear descuento a un amximo del 50%
        if (descuento <= 0.5) {
            descuento = 0.5;
        }
        //actualizar variable llenado socio y sumale valores

        llenadosocio += 8.2 * descuento;
    }
    //montar string resultado
    let resultado = `como usuario casual te sale a: ${llenadoindividual}
    como socio te sale a : ${parseFloat(llenadosocio.toFixed(2))}\n`;
    if (llenadosocio < llenadoindividual) {
        resultado += 'Es mas rentable ser socio';
    } else resultado += 'no te sale rentable ser socio';
    return resultado;
}
console.log(deboSerSocio(1));