function reporteCantidadDePasajeros(cantidadDeEstacionesAvanzadas) {
  let pasajeros = 200;
  let reporte = [];

  //Agregamos primero la estacion 1 que sabemos que sale siempre con 200 pasajeros
  reporte.push(`Estación 1: ${pasajeros} pasajeros`);

  //Inicia iterando sobre la estacion 2, porq ya cargamos la 1
  for (let i = 2; i <= cantidadDeEstacionesAvanzadas; i++) {
    let suben = i === 5 ? 120 : 50;
    let bajan = i === 5 ? 80 : 30;

    //Hacemos el calculo de cuantos pasajeros suben y bajan, y se los sumamos a la canidad inicial
    pasajeros += suben - bajan;

    //Agregamos al final del reporte: El numero de la escion con las cantidad de pasajeros
    reporte.push(`Estación ${i}: ${pasajeros} pasajeros`);
  }

  //Cuando termina de ejecutar todo lo que habia en la fucnción, retornamos el reporte
  return reporte;
}

const cantidadDeEstacionesAvanzadas = 2;

console.log(
  reporteCantidadDePasajeros(cantidadDeEstacionesAvanzadas).join("\n")
);
