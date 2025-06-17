console.log("Con For");

function fizzBuzzFor(max) {

    for (let i=0; i < max; i++){
        if ((i % 3 == 0) !== (i % 5 == 0)) {
            console.log(i);
        }
    }
}

fizzBuzzFor(20);

console.log("Con While");

function fizzBuzzWhile(max) {
    let i = 0;
    while (i < max) {
        if ((i % 3 == 0) !== (i % 5 == 0)) {
            console.log(i);
        }
    i++;
    }
}

fizzBuzzWhile(20);