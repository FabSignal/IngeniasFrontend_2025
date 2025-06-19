let asientos_libres = [];
let opcion;

do {
  // Menú para cargar o elegir asiento
  opcion = prompt(
    "Menú:\n 1. Cargar asiento libre\n 2. Consultar asiento\n 3. Salir"
  );

  if (opcion === "1") {
    let numasiento = Number(prompt("¿Qué número de asiento se liberó?"));

    // Validación: tiene que ser un número válido y positivo
    if (!isNaN(numasiento) && numasiento > 0) {
      if (!asientos_libres.includes(numasiento)) {
        asientos_libres.push(numasiento);
        asientos_libres.sort((a, b) => a - b); // Ordena el array de menor a mayor
        alert(`Asiento ${numasiento} agregado a los disponibles.`);
      } else {
        alert(`El asiento ${numasiento} ya está en la lista.`);
      }
    } else {
      alert("Por favor, ingresá un número de asiento válido.");
    }

  } else if (opcion === "2") {
    let asiento_solicitado = Number(prompt("¿Qué asiento desea consultar?"));

    // Validación de número válido
    if (!isNaN(asiento_solicitado) && asiento_solicitado > 0) {
      if (asientos_libres.includes(asiento_solicitado)) {
        alert(
          `Felicitaciones, el asiento número ${asiento_solicitado} está disponible`
        );
      } else {
        alert(
          `Lo sentimos, el asiento número ${asiento_solicitado} está ocupado, pero aún quedan ${asientos_libres.length} asientos disponibles: ${asientos_libres.join(", ")}`
        );
      }
    } else {
      alert("Por favor, ingresá un número válido.");
    }
  }

} while (opcion !== "3");

alert("¡Gracias por usar el sistema!");
