/* 3) Ahora es el turno de una empresa de trenes la cual nos enfrenta a la siguiente situación:
Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber
cuántos pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes
somos responsables de generar un programa que lo resuelva.
Debemos escribir una función, la cual cuando reciba la cantidad de estaciones que avanzó el tren, nos
devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren.
La empresa nos dió los siguientes datos:
-El tren sale de la estación Uno siempre con 200 pasajeros.
-En cada estación el tren sube 50 pasajeros y bajan 30.
-En la estación Olimpo (la estación número 5), como es una estación central es la única donde bajan 80
personas y suben 120. */

function reportePasajeros(estacionesRecorridas) {
    let pasajeros = 200;
    let reporte = [];   // cantidades de cada estacion en un array que empieza en 1

    for (let i = 1; i <= estacionesRecorridas; i++) {
        let nombreEstacion = i === 5 ? "Olimpo" : `Estación ${i}`;   // ternario: condición ? valorSiEsVerdadero : valorSiEsFalso
        let suben = i === 5 ? 120 : 50;    //cant de personas que suben (120 en la est 5 / 50 en estacion i)
        let bajan = i === 5 ? 80 : 30;

        pasajeros += suben - bajan;     // total de pasajeros en tren al parar en estacion act

        reporte.push({                  // agrego al final del array "registro" con nombre de est y cant de pasajeros
            estacion: nombreEstacion,
            pasajeros: pasajeros
        });

         // imprimo por cada estación  
        console.log(`Después de estación ${nombreEstacion} hay ${pasajeros} pasajeros.`);
    }

    return reporte;
}

let numEstacion = 10;  // o puede ser ingresado por teclado
reportePasajeros(numEstacion); // le paso por parametro el valor 10

