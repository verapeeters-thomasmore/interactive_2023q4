console.log("======================================");
console.log("=== Basic datatypes en berekeningen");
console.log("hallo!");
console.log(5 + 5);

//een const kan je achteraf niet veranderen - en moet dus bij declaratie ALTIJD een waarde krijgen
const text = "dit is een tekst";
console.log(text);

//een let kan je achteraf een andere waarde geven
//het is dus mogelijk een let niet te initialiseren
let undefinedvariable;
console.log(undefinedvariable)


const berekening = 25987 * 342;
console.log(berekening);


console.log("=====================================")
console.log("=== 3 manieren om een string te schrijven: ")
console.log("Dit is een enkel aanhalingsteken: ‘\nEn dit een dubbel: \"");
console.log("deze string wordt geconcateneerd " + "met deze string");
console.log(`dit is een template literal - met backticks - en bevat een expressie: ${5 * 22}`);

//een statement is een lijn code die je uitvoert waardoor iets gebeurt - een instructie om iets te doen
//--- bvb een const of let maakt een "variabele" aan
//--- bvb een console.log: print iets op de console
//---een statement is een "losse lijn code die uitgevoerd wordt"
//
//een expression is het resultaat van een berekening (evaluatie).
// Het resultaat van een expression gebruik je in een assignment of als parameter van een functie of operator

//het resultaat van een operator is altijd een expression - dus gebruik je NIET als "losse lijn code"
console.log("======================================");
console.log("=== Operator typeof");
console.log(`typeof(\"x\") = ${typeof ("x")}`);
console.log(`typeof(55) = ${typeof (55)}`);
console.log(`typeof(true) = ${typeof (true)}`);
const c = '44';
console.log(`typeof(c) = ${typeof (c)}`);

//je kan expressions natuurlijk wel bij wijze van experiment uitvoeren in de console (F12)
//MAAR zet dit nooit als "losse lijn code" in een file
//voer dit uit in de console (F12):
typeof ("x")
3 > 2
false ? 1 : 2

console.log("======================================");
console.log("=== Declaratie en Strict mode");
//definieer variabelen altijd met const of let - en liefst met const
// let op: dit werkt nu wel:
a = 4;
console.log(a);
// maar als je bovenaan in de file 'use strict' activeert geeft dit een error
// dat wordt bezien als bad practice!!!!


console.log("======================================");
console.log("=== Speciale Numbers");
//voer deze lijnen 1 voor 1 uit in de console:
Infinity
9 / 0
- 9 / 0;
(9 / 0) + 5
9 / (0 + 5)
0 / 0
"aap" / 100
NaN == NaN // NaN is aan niks gelijk !


console.log("======================================");
console.log("=== Type conversies");
//voer deze lijnen 1 voor 1 uit in de console:
8 * null
"5" - 1
"5" + 1;
"vijf" * 2;
false == 0;
false === 0
null == undefined
null == 0
null || "user"
"Agnes" || "user"
2.5


console.log("======================================");
console.log("=== Equality operators");
//voer deze lijnen 1 voor 1 uit in de console:
5 == 6
5 == 5
true == 1
true === 1
null == 0
0 == ""
0 === ""
5 == "5"
5 === "5"


