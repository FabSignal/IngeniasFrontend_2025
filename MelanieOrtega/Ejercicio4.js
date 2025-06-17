console.log("Con For");

function fizzBuzzFor(max) {

    for (let i=0; i < max; i++){
        const divPor3 = (i % 3 === 0);
        const divPor5 = (i % 5 === 0);
        
        if ((divPor3 && !divPor5) || (!divPor3 && divPor5)) {
            console.log(i);
        }
    }
}

fizzBuzzFor(20);

console.log("Con While");

function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
        const divPor3 = (i % 3 === 0);
        const divPor5 = (i % 5 === 0);
        
        if ((divPor3 && !divPor5) || (!divPor3 && divPor5)) {
            console.log(i);
        }
    i++;
    }
}

fizzBuzzWhile(20);
