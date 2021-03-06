
//Denne funktion er hoistet, fordi man kan lave et metodekald til metoden før metoden er deklareret
//Så metoden bliver automatisk rykket til toppen

hoisting()

function hoisting(){
    console.log(4+4)
}


//
console.log("Before: " + a)

var a = 5

console.log("After: " + a)