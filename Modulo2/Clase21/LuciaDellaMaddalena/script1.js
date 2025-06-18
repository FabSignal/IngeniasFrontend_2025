//1) Necesitamos escribir una función la cual recibiendo un array con importes, nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $1.000

function calcularGanancias(importes) {
    let totalGanancias = 0; // Inicializamos el total de ganancias en 0
    // Iteramos sobre cada importe en el array
    for (let i = 0; i < importes.length; i++) { // Recorremos el array de importes
        // Verificamos si el importe es positivo y no supera 1000
        if (importes[i] > 0 && importes[i] <= 1000) { // Solo sumar ganancias entre 0 y 1000
            totalGanancias += importes[i]; // Sumamos el importe al total de ganancias si es positivo y no supera 1000
        }
    }
    return totalGanancias; // Retornamos el total de ganancias calculado
}

// Ejemplo de uso
const importes = [500, -200, 300, 1200, 800, -100, 1500, 700]; // Array de importes de diferentes meses
// Llamamos a la función calcularGanancias con el array de importes
const resultado = calcularGanancias(importes);
console.log('Total de ganancias: $' + resultado); 
