/*✅ Ejercicio 1

Necesitamos escribir una función que, recibiendo un array con importes,  
nos devuelva el resultado final de la **suma de los importes de todos los meses que tienen ganancia**,  
a excepción de los que **superen un importe de $1.000**.*/

console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 1 *-*-*-*-*-*-*");
let importes = [
  500, 1200, 800, 950, 1100, 700, 300, 400, -510, 600, 2000, 1500, 100,
];

function sumaGanancias(importes) {
  let suma = 0; //inicializamos la variable suma en 0
  // Recorremos el array de importes
  for (let i = 0; i < importes.length; i++) {
    if (importes[i] > 0 && importes[i] <= 1000) {
      suma += importes[i];
    }
  }
  return suma;
}
sumaGanancias(importes); // Llamamos a la función y mostramos el resultado
console.log(
  "El resultado de la suma de los meses de ganancia es de: $",
  sumaGanancias(importes)
);
