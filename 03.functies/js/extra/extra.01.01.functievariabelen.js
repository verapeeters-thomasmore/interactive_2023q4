//een functie is ook een value en kan je toekennen aan een variabele 

safeMode = true;
let lanceerRaket = function () {
    console.log("raket!!!!");
}
lanceerRaket();
if (safeMode) {
    lanceerRaket = function () { /* doe niets */ }
}
lanceerRaket();
