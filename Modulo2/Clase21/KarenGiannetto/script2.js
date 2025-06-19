/* 2) Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:
Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera, debemos verificar si el
asiento que buscamos está disponible.
Nos piden que escribamos una función, que tome como parámetro un conjunto de asientos disponibles y el
asiento que quiere ocupar la persona. La función deberá verificar si el asiento solicitado se encuentra
disponible y devolverle un mensaje claro y prolijo al cliente como: "Felicitaciones, el asiento número X está
disponible" o "Lo sentimos, el asiento número X está ocupado, pero aún quedan X asientos disponibles".
Ayuda: asientos([15, 28, 44, 45, 70], 15);  */

let arrayDisponibles = [15, 28, 44, 45, 70] 
let nAsiento = 15

function asientosDisp (disponibles, num) {

    let index = disponibles.indexOf (num);   // busca elemento en array y si no encuentra devuelve -1  (también se puede usar .includes() que devuelve V o F)
    if (index !== -1) {  
        return true;    // si encontro valor devuelve verdadero, sino false
    } else {
        return false;
    }
}

if (asientosDisp(arrayDisponibles,nAsiento)) {   // si la funcion con las var declaradas devuelve true imprime que encontro, sino los dispo 
    console.log( `Felicidades, el asieto ${nAsiento} esta disponible `)
} else {
    console.log(`Lo sentimos, el asiento esta ocupado, pero quedan ${arrayDisponibles} disponibles`)
}