/*✅ Ejercicio 3
Una empresa de trenes nos presenta el siguiente problema:

Un tren va desde una terminal hasta otra, con estaciones intermedias.
La empresa necesita saber cuántos pasajeros lleva el tren luego de cada parada.

### 📌 Requisitos:

Debemos escribir una función que:

- Reciba la cantidad de estaciones que avanzó el tren.

Devuelva un reporte con:

- El número de cada estación recorrida.

- La cantidad total de pasajeros luego de cada parada.

### 🚉 Datos proporcionados:

El tren siempre sale con 200 pasajeros desde la estación 1.

En cada estación normal:

- Suben 50 personas.

- Bajan 30 personas.

- En la estación Olimpo (la estación número 5), como es una estación central es la única donde bajan 80
  personas y suben 120

// 1.  Estación 1: suben 200 pasajeros, bajan 0 pasajeros
// 2.  Estación 2: suben 50 pasajeros, bajan 30 pasajeros
// 3.  Estación 3: suben 50 pasajeros, bajan 30 pasajeros
// 4.  Estación 4: suben 50 pasajeros, bajan 30 pasajeros
// 5.  Estación 5: suben 120 pasajeros, bajan 80 pasajeros
// 6.  Estación 6: suben 50 pasajeros, bajan 30 pasajeros
// 7.  Estación 7: suben 50 pasajeros, bajan 30 pasajeros
// 8.  Estación 8: suben 50 pasajeros, bajan 30 pasajeros
// 9.  Estación 9: bajan todos los pasajeros que quedan en el tren.
//  El tren llega a destino y no quedan pasajeros.
  */
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 3 *-*-*-*-*-*-*-");
let pasajeros = 200; // Pasajeros iniciales
let estaciones = 9; // Total de estaciones
let reporte = []; // Array para almacenar el reporte de pasajeros por estación

function cantidadPasajeros(estaciones) {
  console.log("Reporte de pasajeros por estación: ");
  for (let i = 1; i <= estaciones; i++) {
    if (i === 1) {
      // Estación 1
      reporte.push(
        console.log(
          `Estación ${i}: Suben ${pasajeros} pasajeros. Bajan 0 pasajeros.  |  Total de pasajeros en el tren: ${pasajeros}`
        )
      );
    } else if (i === 5) {
      // Estación Olimpo
      pasajeros += 120 - 80; // Suben 120 y bajan 80
      reporte.push(
        console.log(
          `Estación ${i}: Suben 120 pasajeros. Bajan 80 pasajeros.  |  Total de pasajeros en el tren: ${pasajeros}`
        )
      );
    } else if (i === 9) {
      // Última estación
      reporte.push(
        console.log(
          `Estación ${i}: Bajan los ${pasajeros} pasajeros del tren. |  El tren llegó a destino.`
        )
      );
    } else {
      // Otras estaciones
      pasajeros += 50 - 30; // Suben 50 y bajan 30
      reporte.push(
        console.log(
          `Estación ${i}: Suben 50 pasajeros. Bajan 30 pasajeros.  |  Total de pasajeros en el tren: ${pasajeros}`
        )
      );
    }
  }

  return reporte;
}
cantidadPasajeros(estaciones); // Llamamos a la función para obtener el reporte
