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

const userName = prompt("geef username: ") || "anoniempje";
console.log(`userName = ${userName}`);


console.log("--------- short circuit met AND operator  -----------");
let undefinedProduct;
const productName = undefinedProduct && undefinedProduct.name;
console.log(`userName = ${userName}`);

const nullProduct = null;
const productName = nullProduct && nullProduct.name;
console.log(`userName = ${userName}`);

const emptyProduct = {};
const productName = emptyProduct && emptyProduct.name;
console.log(`userName = ${userName}`);

const productWithName = {name: "Hansje"};
const productName = productWithName && productWithName.name;
console.log(`userName = ${userName}`);
