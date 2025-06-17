/*✅ Ejercicio 4
### 🧪 Ejercicio: FizzBuzz con `for` y `while`

Definí una función `fizzBuzz(max)` que tome un número como parámetro e **imprima por consola** cada número desde el **0 hasta `max` (sin incluirlo)** que sea:

- divisible por **3 o 5**,
- **pero no por ambos al mismo tiempo**.

#### Requisitos:

1. Hacerlo primero usando un **bucle `for`**.
2. Luego, hacerlo con un **bucle `while`**
*/
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 4 *-*-*-*-*-*-*");
let max = 100; // Definimos el valor máximo

function fizzBuzzWhile(max) {
  console.log("///FizzBuzz con bucle while:///");
  let i = 0;
  while (i < max) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
    i++;
  }
}

function fizzBuzzFor(max) {
  console.log("///FizzBuzz con bucle for:///");
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
}

fizzBuzzWhile(max); // Llamamos a la función con bucle while
fizzBuzzFor(max); // Llamada a la función con bucle for
