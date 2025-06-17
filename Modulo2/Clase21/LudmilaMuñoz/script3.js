function reporteCantidadDePasajeros(cantidadDeEstacionesAvanzadas) {
  let pasajeros = 200;
  let reporte = [];

  reporte.push(`Estación 1: ${pasajeros} pasajeros`);

  for (let i = 2; i <= cantidadDeEstacionesAvanzadas; i++) {
    let suben = i === 5 ? 120 : 50;
    let bajan = i === 5 ? 80 : 30;

    pasajeros += suben - bajan;
    reporte.push(`Estación ${i}: ${pasajeros} pasajeros`);
  }
  return reporte;
}

const cantidadDeEstacionesAvanzadas =2;
console.log(reporteCantidadDePasajeros(cantidadDeEstacionesAvanzadas).join("\n"));