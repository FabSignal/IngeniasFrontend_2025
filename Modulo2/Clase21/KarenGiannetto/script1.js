/* 1) Necesitamos escribir una función la cual
recibiendo un array con importes, nos devuelva el
resultado final de la suma de los importes de todos
los meses que tienen ganancia, a excepción de los
que superen un importe de $1.000. */

// declaro un array cargado 
let arrayImportes = [5000,500,800,220,1000,2500,300]

function sumaImportes (importes) {
    let total=0; 
    for (let i=0; i < importes.length; i++) {     
        if (importes[i] <= 1000) {        //si el contenido del vector en pos i cumple sumo al total 
            total += importes[i];
        }
    }
    return total;
}

let resultado = sumaImportes(arrayImportes);
console.log(`Total de montos del array mayor que no soperan los 1000: ${resultado}`);

