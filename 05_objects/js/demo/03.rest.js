console.log("------------------------ function printValues with rest parameter");
function printValues(value, ...values) {
  console.log(value);
  console.log(values);
}
printValues(1);
printValues(1, 2);
printValues(1, 2, 3, 4, 5);

console.log("------------------------ spread syntax: printValues van array getallen");
const numbers = [0, 5, 7, 9, 1, 2];
printValues(...numbers);

console.log("------------------------ spread syntax array woorden");
const words = ["nooit", "altijd"];
const wordsExtended = ["soms", ...words, "misschien"];
console.log(wordsExtended);

console.log("------------------------ spread syntax object");
const person = { name: "Karel", city: "Duffel" };
const personWithAge = { ...person, age: 17 };
console.log(personWithAge);

console.log("------------------------ spread syntax object woorden");
const wordsObject = { ...words };
console.log(wordsObject);

console.log("------------------------ spread syntax menu");
const menu1 = { appetizer: "zalm", soup: "tomatensoep", mainCourse: "biefsteak" };
const menu2 = { aperitif: "van het huis", ...menu1, dessert: "chocomousse" };

console.log(menu1);
console.log(menu2);
