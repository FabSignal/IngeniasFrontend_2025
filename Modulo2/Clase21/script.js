//1) Necesitamos escribir una función la cual recibiendo un array con importes, nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $1.000

function calcularGanancias(importes) {
    let totalGanancias = 0;
    for (let i = 0; i < importes.length; i++) {
        if (importes[i] > 0 && importes[i] <= 1000) { // Solo sumar ganancias entre 0 y 1000
            totalGanancias += importes[i];
        }
    }
    return totalGanancias;
}

// Ejemplo de uso
const importes = [500, -200, 300, 1200, 800, -100, 1500, 700];
const resultado = calcularGanancias(importes);
console.log('Total de ganancias: $' + resultado); 


//2)Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación: Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera, debemos verificar si el asiento que buscamos está disponible. Nos piden que escribamos una función, que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona. La función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como: "Felicitaciones, el asiento número X está disponible" o "Lo sentimos, el asiento número X está ocupado, pero aún quedan X asientos disponibles". Ayuda: asientos([15, 28, 44, 45, 70], 15); 

function verificarAsiento(asientosDisponibles, asientoSolicitado) {
    if (asientosDisponibles.includes(asientoSolicitado)) {
        return `Felicitaciones, el asiento número ${asientoSolicitado} está disponible`;
    } else {
        const asientosRestantes = asientosDisponibles.length;
        return `Lo sentimos, el asiento número ${asientoSolicitado} está ocupado, pero aún quedan ${asientosRestantes} asientos disponibles`;
    }
}
// Ejemplo de uso
const asientos = [15, 28, 44, 45, 70];
const asientoSolicitado = 15;
const mensaje = verificarAsiento(asientos, asientoSolicitado);
console.log(mensaje); 



//3)Ahora es el turno de una empresa de trenes la cual nos enfrenta a la siguiente situación: Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuántos pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes somos responsables de generar un programa que lo resuelva. Debemos escribir una función, la cual cuando reciba la cantidad de estaciones que avanzó el tren, nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos dió los siguientes datos: -El tren sale de la estación Uno siempre con 200 pasajeros. -En cada estación el tren sube 50 pasajeros y bajan 30. -En la estación Olimpo (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.


function reportePasajeros(estaciones) {
    let pasajeros = 200; // Pasajeros al inicio en la estación Uno
    let reporte = [];
    for (let i = 1; i <= estaciones; i++) {
        if (i === 5) { // Estación Olimpo
            pasajeros += 120;
            pasajeros -= 80;
        } else {
            pasajeros += 50; // Suben 50 pasajeros
            pasajeros -= 30; // Bajan 30 pasajeros
        }
        reporte.push(`Estación ${i}: ${pasajeros} pasajeros`);
    }
    return reporte;
}
// Ejemplo de uso
const estaciones = 7;   
const respuesta = reportePasajeros(estaciones);
console.log(respuesta.join('\n')); 


//4) FizzBuzz con for y while. Definí una función fizzBuzz(max) que tome un número como parámetro e imprima por consola cada número desde el 0 hasta max (sin incluirlo) que sea: divisible por 3 o 5, pero no por ambos al mismo tiempo. Requisitos: Hacerlo primero usando un bucle for. Luego, hacerlo con un bucle while.

function fizzBuzzFor(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(`Fizz: ${i}`);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(`Buzz: ${i}`);
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz: ${i}`);
        } else {
            console.log(i);
        }
    }
}

function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(`Fizz: ${i}`);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(`Buzz: ${i}`);
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz: ${i}`);
        }
        else {
            console.log(i);
        }
        i++;
    }
}

// Ejemplo de uso
const max = 30;
fizzBuzzFor(max);
fizzBuzzWhile(max);
