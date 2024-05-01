//functie met 3 parameters en return statement
//syntax type 1
function calculate(a, b, c) {
    return (a + b) * c;
}

console.log(calucate(1, 2, 3));


//functie met 1 parameter en return statement
//syntax type 2
//functie wordt assigned aan een const
const power = function (x) {
    return x * x;
}
console.log(power(14));


//functie moet niets returnen
const makeNoise = function () {
    console.log("peep");
}
makeNoise();

//functie zonder return statement returnt eigenlijk undefined
console.log(makeNoise());
