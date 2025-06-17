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
