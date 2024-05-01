console.log("==============================================")
console.log("=== 2.typische_constructs.js")
console.log("==============================================")

console.log("--------- falsy en truthy  -----------");
//voer dit eerst uit zoals het hier staat: variabele v is niet geinitialiseerd
//je kan dit in de console (F12) doen om gemakkelijker te experimenteren
let v;
if (v)
    console.log("variable has a value");
else
    console.log("variable is empty");

//pas dan aan, initialiseer v, probeer dit uit met een aantal verschillende waardes:
//null, undefined, 0, 55, "", "0", "55", " ", "aap", NaN, 5/0

console.log("--------- conditional operator  -----------");
const age = 18;
const insurancePremium = age > 21 ? 100 : 200;
console.log(`insurancePremium = ${insurancePremium}`);
//probeer met een andere age

console.log("--------- short circuit met OR operator  -----------");
//als de user niks ingeeft dan is de userName "anoniempje"
//WANT enteredUserName is falsy -- dus voeren we de 2e operand uit
const enteredUserName = prompt("geef username: ");
const userName = enteredUserName || "anoniempje";
console.log(`userName = ${userName}`);


console.log("--------- short circuit met AND operator  -----------");
let undefinedProduct;
//als undefinedProduct niet geinitialiseerd is vermijd je een crash met de && operator
//WANT undefinedProduct is falsy -- dus voeren we de 2e operand NIET uit
const productName = undefinedProduct && undefinedProduct.name;
console.log(`userName = ${productName}`);

const nullProduct = null;
const nullProductName = nullProduct && nullProduct.name;
console.log(`userName = ${nullProductName}`);

//emptyProduct is een leeg object
const emptyProduct = {};
const emptyProductName = emptyProduct && emptyProduct.name;
console.log(`userName = ${emptyProductName}`);

// productWithName is een object met 1 field: een key-value-pair met key name en value "Hansje"
const productWithName = {name: "Hansje"};
const okProductName = productWithName && productWithName.name;
console.log(`userName = ${okProductName}`);

console.log("--------- short circuit met ?? operator  -----------");
//anoniempje wordt alleen gebruikt als enteredUserName2 null of undefined is
//DUS false, 0, "" en {}  zijn WEL geldige waarden voor de ?? operator (verschil met ||)
const enteredUserName2 = null;
//const enteredUserName2 = "";
const userName2 = enteredUserName2 ?? "anoniempje";
console.log(`userName = ${userName2}`);


console.log("--------- ?. operator  -----------");
const user = undefined;
//als user niet geinitialiseerd is vermijd je ook met de ?. operator een crash
// -- zoals met de && operator maar dit is NOG kortere notatie
//const user = {name: "Jos"};
console.log(`userName = ${user?.name}`);
//console.log(`userName = ${user.name}`); // dit geeft een exception - dus de rest van de file wordt niet meer uitgevoerd


console.log(`EINDE`);