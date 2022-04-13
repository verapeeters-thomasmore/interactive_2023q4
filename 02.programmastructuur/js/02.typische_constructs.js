
console.log("--------- falsy en truthy  -----------");
//voer dit eerst uit zoals het hier staat: variabele v is niet geinitialiseerd
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

//als je met prompt wil werken voer dan deze file uit in de browser (via index.html)
//const userName = prompt("geef username: ") || "anoniempje";
const enteredUserName = "";
const userName = enteredUserName || "anoniempje";
console.log(`userName = ${userName}`);


console.log("--------- short circuit met AND operator  -----------");
let undefinedProduct;
const productName = undefinedProduct && undefinedProduct.name;
console.log(`userName = ${productName}`);

const nullProduct = null;
const nullProductName = nullProduct && nullProduct.name;
console.log(`userName = ${nullProductName}`);

const emptyProduct = {};
const emptyProductName = emptyProduct && emptyProduct.name;
console.log(`userName = ${emptyProductName}`);

const productWithName = {name: "Hansje"};
const okProductName = productWithName && productWithName.name;
console.log(`userName = ${okProductName}`);

console.log("--------- short circuit met ?? operator  -----------");

//anoniempje wordt alleen gebruikt als enteredUserName2 null of undefined is
const enteredUserName2 = null;
//const enteredUserName2 = "";
const userName2 = enteredUserName2 ?? "anoniempje";
console.log(`userName = ${userName2}`);


console.log("--------- ?. operator  -----------");
const user = undefined;
//const user = {name: "Jos"};
console.log(`userName = ${user?.name}`);
//console.log(`userName = ${user.name}`); // dit geeft een exception - dus de rest van de file wordt niet meer uitgevoerd


console.log(`EINDE`);