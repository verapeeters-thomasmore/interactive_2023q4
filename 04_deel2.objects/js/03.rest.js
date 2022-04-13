console.log("------------------------ function printValues with rest parameter");
const printValues = function(value, ...values) {
    console.log(value);
    console.log(values);
}
printValues(1);
printValues(1, 2);
printValues(1, 2, 3, 4, 5);

console.log("------------------------ spread syntax: printValues van array getallen");
const getallen = [0, 5, 7, 9, 1, 2];
printValues(...getallen);

console.log("------------------------ spread syntax array woorden");
const woorden = ["nooit", "altijd"];
const woordenarray2 = ["soms", ...woorden, "misschien"];
console.log(woordenarray2);

console.log("------------------------ spread syntax object");
const person = {name: "Karel", city: "Duffel"};
const personWithAge = {...person, age:17}
console.log(personWithAge);

console.log("------------------------ spread syntax object woorden");
const woordobject = {...woorden};
console.log(woordobject);

console.log("------------------------ spread syntax menu");
const menu1 = {"voorgerecht": "zalm", "soep": "tomatensoep", "hoofdgerecht":"biefsteak"};
const menu2 ={"aperitief": "van het huis", ...menu1, "dessert": "chocomousse"};

console.log(menu1);
console.log(menu2);
