let asientos_libres = [];
let opcion;

do {
  //menu para cargar o elegir asiento
  opcion = prompt(
    "Menú:\n 1. Cargar asiento libre\n 2. Consultar asiento\n 3. Salir"
  );

  if (opcion === "1") {  //cargo los asientos disponibles
    let numasiento = Number(prompt("¿Qué número de asiento se liberó?"));
    if (!asientos_libres.includes(numasiento)) {
      asientos_libres.push(numasiento);
      alert(`Asiento ${numasiento} agregado a los disponibles.`);
    } else {
      alert(`El asiento ${numasiento} ya está en la lista.`);
    }
  } else if (opcion === "2") {
    let asiento_solicitado = Number(prompt("¿Qué asiento desea consultar?"));
    if (asientos_libres.includes(asiento_solicitado)) {//busca si el numero de asiento consultado se cargó en el array de disponibles
      alert(
        `Felicitaciones, el asiento número ${asiento_solicitado} está disponible`
      );
    } else {
      alert(
        `Lo sentimos, el asiento número ${asiento_solicitado} está ocupado, pero aún quedan ${asientos_libres.length} asientos disponibles`
      );
    }
  }
} while (opcion !== "3");//mientras no sea salir doy vueltas preguntando en el menú

alert("¡Gracias por usar el sistema!");
