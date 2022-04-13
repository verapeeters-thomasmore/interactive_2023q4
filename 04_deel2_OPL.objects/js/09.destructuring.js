console.log("------------------------ parameter  object ---------------------");

const printNaamObject = function ({voornaam, achternaam}) {
    console.log(achternaam + ", " + voornaam);
}
printNaamObject({voornaam: "Els", achternaam: "Degroot", age: 55});


console.log("------------------------ parameter array ---------------------");

const printNaamArray = function ([voorNaam, achterNaam]) {
    console.log(achterNaam + ", " + voorNaam);
}
printNaamArray(["Els", "Degroot", "Mevr"]);


console.log("------------------------ assignment  array ---------------------");
const personInArray = ["Els", "Degroot", "Mevr"];
const [voornaamA, naamA] = personInArray;
console.log("Voornaam: " + voornaamA + " , Naam: " + naamA);

console.log("------------------------ assignment  object ---------------------");
const person = {ID: 1452, voornaam: "Els", naam: "Degroot", age: 55};
const {voornaam, naam} = person;
console.log("Voornaam: " + voornaam + " , Naam: " + naam);
