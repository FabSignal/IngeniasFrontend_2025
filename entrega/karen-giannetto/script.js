/* 1) Necesitamos escribir una función la cual
recibiendo un array con importes, nos devuelva el
resultado final de la suma de los importes de todos
los meses que tienen ganancia, a excepción de los
que superen un importe de $1.000. */

// declaro un array cargado 
let arrayImportes = [5000,500,800,220,1000,2500,300]

function sumaImportes (importes) {
    let total=0; 
    for (let i=0; i < importes.length; i++) {     
        if (importes[i] <= 1000) {        //si el contenido del vector en pos i cumple sumo al total 
            total += importes[i];
        }
    }
    return total;
}

let resultado = sumaImportes(arrayImportes);
console.log(`Total de montos del array mayor que no soperan los 1000: ${resultado}`);


/* 2) Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:
Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera, debemos verificar si el
asiento que buscamos está disponible.
Nos piden que escribamos una función, que tome como parámetro un conjunto de asientos disponibles y el
asiento que quiere ocupar la persona. La función deberá verificar si el asiento solicitado se encuentra
disponible y devolverle un mensaje claro y prolijo al cliente como: "Felicitaciones, el asiento número X está
disponible" o "Lo sentimos, el asiento número X está ocupado, pero aún quedan X asientos disponibles".
Ayuda: asientos([15, 28, 44, 45, 70], 15);  */

let arrayDisponibles = [15, 28, 44, 45, 70] 
let nAsiento = 15

function asientosDisp (disponibles, num) {

    let index = disponibles.indexOf (num);   // busca elemento en array y si no encuentra devuelve -1  (también se puede usar .includes() que devuelve V o F)
    if (index !== -1) {  
        return true;    // si encontro valor devuelve verdadero, sino false
    } else {
        return false;
    }
}

if (asientosDisp(arrayDisponibles,nAsiento)) {   // si la funcion con las var declaradas devuelve true imprime que encontro, sino los dispo 
    console.log( `Felicidades, el asieto ${nAsiento} esta disponible `)
} else {
    console.log(`Lo sentimos, el asiento esta ocupado, pero quedan ${arrayDisponibles} disponibles`)
}

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
    }

    return reporte;
}

let numEstacion = 10;  // o puede ser ingresado por teclado
console.log(reportePasajeros(numEstacion));


/* 4)  FizzBuzz con `for` y `while`
Definí una función `fizzBuzz(max)` que tome un número como parámetro e imprima por consola cada número desde el 0 hasta `max` (sin incluirlo) que sea:

- divisible por 3 o 5,  
- pero no por ambos al mismo tiempo.
Requisitos:
1. Hacerlo primero usando un bucle `for`.
2. Luego, hacerlo con un bucle `while`. */

// eje con for
function fizzBuzzFor(max) {
    for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {  // Imprime números divisibles por 3 o 5, pero no por ambos (excluye múltiplos de 15)
        console.log(i);
    }
    }
}
// ej con while
function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
        console.log(i);
    }
    i++;
    }
}
// invoco funciones 
fizzBuzzFor(20);   // Muestra: 3, 5, 6, 9, 10, 12, 18
fizzBuzzWhile(20); // Igual que arriba
