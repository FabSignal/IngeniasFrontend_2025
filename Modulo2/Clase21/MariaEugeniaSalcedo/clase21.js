function sumaImportes (importes){
    let suma = 0;
    
    for (const monto of importes ){
        if (monto > 0 && monto <= 1000){
            suma += monto;
        }
    }

    return suma;
}

const importesPorMes = [400, 500, 600, 300, 1500, 1200, 700, -200, 1100]
const resultado = sumaImportes(importesPorMes)
console.log(resultado)