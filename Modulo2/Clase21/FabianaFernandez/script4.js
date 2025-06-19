/* =========Ejercicio 4===========
🧪 Ejercicio: FizzBuzz con for y while
Definí una función fizzBuzz(max) que tome un número como parámetro e imprima por consola cada número desde el 0 hasta 
max (sin incluirlo) que sea:
divisible por 3 o 5,
pero no por ambos al mismo tiempo.
Requisitos:
Hacerlo primero usando un bucle for.
Luego, hacerlo con un bucle while. */

// =================== a) CON FOR ===========================
/* =========================
La función recibe el número max y va a procesar los numeros del 0 al max - 1.
Se declara la variable resultados, un array vacío donde se guardarán los nros que cumplan la condición.
Se define un bucle for para recorrer un intervalo de nros, a los cuales se les analizará la divisibilidad.
Para definir el bucle for, se inicializa la variable i en 0 (valor inicial), para iterar desde i = 0 hasta i<max(sin incluir max),
incrementando i en 1 al final de cada vualta ( con i++).
Se definen las constantes booleanas que guardarán true o false, dependiendo de si se cumple la regla de divisibilidad (es decir, si el resto de dividir por 3 o por 5 es cero, respectivamente).
Condición del if : i debe ser divisible por 3 o por 5 (al menos uno) y no divisible por ambos a la vez.
Si se cumple la condición, se agrega i al array resultados (con .push(i)) .
========================= */
function fizzBuzzFor(max) { 
  let resultados = []; 

  for (let i = 0; i < max; i++) {
    
    const divisiblePor3 = i % 3 === 0;
    const divisiblePor5 = i % 5 === 0;

    if ((divisiblePor3 || divisiblePor5) && !(divisiblePor3 && divisiblePor5)) {
      resultados.push(i); 
    }
  }

  return resultados;
}

// Se llama a la función con un número específico
const maxFor = 30;
const resultadosFor = fizzBuzzFor(maxFor);

// Se imprimen los resultados guardados en el array como cadena de texto
console.log(`Los números del 0 al ${maxFor - 1} que son divisibles por 3 o por 5, pero no por ambos a la vez, son: ${resultadosFor.join(', ')}`);

/* El resultado en consola es:
Los números del 0 al 29 que son divisibles por 3 y por 5, pero no por ambos a la vez, son: 3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 25, 27
 */

// ========================================================
//================ b) CON WHILE ==============================
/* la función fizzBuzzWhile toma como parámetro max ( el límite superior del conteo, no incluído) que indica el fin de la iteración.
Se declara e inicializa la variable i en 0 (contador).
Se declara la variable resultados, un array vacío donde se guardarán los nros que cumplan la condición.
Comienza el bucle while, que se repetirá mientras se cumpla la condición i < max. 
La definición de las constantes 'divisiblePor3' y 'divisiblePor5', y el bloque if es igual al caso a).
Si se cumple la condición (divisible por 3 o por 5, pero no por ambos a la vez), se ejecuta el bloque if y se agrega i al array resultados .
Finalmente, se incrementa el contador i en 1 para continuar con la siguiente iteración del bucle.
 */

function fizzBuzzWhile(max) {
  let i = 0;
  let resultados = [];

  while (i < max) {
    const divisiblePor3 = i % 3 === 0;
    const divisiblePor5 = i % 5 === 0;

    if ((divisiblePor3 || divisiblePor5) && !(divisiblePor3 && divisiblePor5)) {
      resultados.push(i);
    }

    i++;
  }
  return resultados;
}

// Se llama a la función con un número específico
const maxWhile = 50;
const resultadosWhile = fizzBuzzWhile(maxWhile);

// Se imprimen los resultados guardados en el array como cadena de texto
console.log(`Los números del 0 al ${maxWhile - 1} que son divisibles por 3 o por 5, pero no por ambos a la vez, son: ${resultadosWhile.join(', ')}`);

/* El resultado en consola es:
Los números del 0 al 49 que son divisibles por 3 y por 5, pero no por ambos a la vez, son: 3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 25, 27, 33, 35,
36, 39, 40, 42, 48 */
