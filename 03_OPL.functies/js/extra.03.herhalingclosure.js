let spreek = function(naam) {
    return function(zin) {
        return naam + ": '" + zin + "'";
    }
}

let pietSpreekt = spreek("Piet");
let elsSpreekt = spreek("Els");

console.log(pietSpreekt("Ik ga naar huis"));
console.log(elsSpreekt("Maken dat ik weg ben..."));