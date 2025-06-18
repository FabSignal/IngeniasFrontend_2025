/*✅ Ejercicio 2
Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:

Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera,  
debemos verificar si el asiento que buscamos está disponible.

Nos piden que escribamos una función que:

- 1.Tome como parámetro un conjunto de asientos disponibles.
- 2.Tome como segundo parámetro el asiento que quiere ocupar la persona.
- 3.Verifique si el asiento solicitado se encuentra disponible.
- 4.Devuelva un mensaje claro al cliente como:

```
"Felicitaciones, el asiento número X está disponible"
```
o
```
"Lo sentimos, el asiento número X está ocupado, pero aún quedan Y asientos disponibles"
```

### 🧩 Ejemplo de uso:

```
asientos([15, 28, 44, 45, 70], 15);
```
*/
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 2 *-*-*-*-*-*-*");
let asientosDisponibles = [
  12, 14, 15, 18, 20, 21, 27, 28, 29, 30, 35, 36, 37, 39, 42, 47, 48, 49, 50,
  55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
];

let asientoSolicitado = 10;

function verificarAsiento(asientosDisponibles, asientoSolicitado) {
  if (asientosDisponibles.includes(asientoSolicitado)) {
    console.log(
      `Felicitaciones, el asiento número ${asientoSolicitado} está disponible`
    );
    return;
  } else {
    let asientosRestantes = asientosDisponibles.length;
    console.log(
      `Lo sentimos, el asiento número ${asientoSolicitado} no está disponible, pero aún quedan ${asientosRestantes} asientos disponibles para elegir.`
    );
    return;
  }
}
verificarAsiento(asientosDisponibles, asientoSolicitado); // Llamamos a la función para verificar el asiento solicitado
