console.log("==============================================")
console.log("=== 01.programmastructuur.js")
console.log("==============================================")

console.log("--------- variabelen -----------");
//prompt opent een browser-specifieke dialog en blokkeert de uitvoering van de code tot de user hier iets ingegeven heeft
//gebruik dit NOOIT in een echt programma!!!!

//we passen password niet meer aan na deze lijn, dus een const!
const password = prompt("Enter paswoord:");
console.log(password + Math.min(2, 4) + 10);
console.log(password);
console.log(Number(prompt("Geef een getal:")));

console.log("--------- condities -----------");

//we passen number niet meer aan na deze lijn, dus een const!
const number = Number(prompt("Geef nog een getal:"));
if (number < 10) {
    console.log(number + " is een klein getal");
} else if (number < 100) {
    console.log(number + " is een gemiddeld getal");
} else {
    console.log(number + " is een groot getal");
}

console.log("--------- while lus -----------");
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter++;
}
console.log(result);

console.log("--------- do lus -----------");
let yourName;
do {
    yourName = prompt("Wie ben je?");
} while (!yourName);
console.log(yourName);

console.log("--------- for lus -----------");
result = 1;
for (let counter = 0; counter < 10; counter++) {
    result *= 2;
}
console.log(result);

console.log("--------- break -----------");
//break beter niet gebruiken om de code leesbaarder te houden
for (let current = 20; ; current++) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

console.log("--------- switch -----------");
let weerType;
switch (prompt("Hoe is het weer?")) {
    case "regenachtig":
        // regenachtig
        weerType = "Het regent vandaag";
        break;
    case "zonnig":
        /* Het zonnetje schijnt vandaag */
        weerType = "De zon schijnt vandaag";
        break;
    case "bewolkt":
        weerType = "Het is bewolkt vandaag";
        break;
    default:
        weerType = "Onbekend weertype";
}
console.log(weerType);