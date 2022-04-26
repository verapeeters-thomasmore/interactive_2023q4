console.log("------------------------ array lookup methods ---------------------");

const numbers = [4, 3, 5, 2, 6, 4, 7];
console.log(`numbers.lenght = ${numbers.length}`);
console.log(`index van 5 = ${numbers.indexOf(5)}`);
console.log(`index van 4 = ${numbers.indexOf(4)}`);
console.log(`last index van 4 = ${numbers.lastIndexOf(4)}`);

console.log("------------------------ array immutable methods ---------------------");

let referenceToNumbers = numbers;
let sliceOfNumbers = numbers.slice();
console.log(`numbers === referenceToNumbers: ${numbers === referenceToNumbers}`);
console.log(`numbers === sliceOfNumbers: ${numbers === sliceOfNumbers}`);

console.log("------------------------ array looping methods ---------------------");
console.log("------------------------ foreach ---------------------");
numbers.forEach((n) => console.log(`number: ${n}`));

console.log("------------------------ foreach with index ---------------------");
numbers.forEach((n, i) => console.log(`number ${i}: ${n}`));

console.log("------------------------ filter: keep only numbers>=5---------------------");
const filteredNumbers = numbers.filter((n) => n >= 5);
console.log(filteredNumbers);

console.log("------------------------ map: new array contains el*3 for each el ---------------------");
const numbersTimes3 = numbers.map((n) => n * 3);
console.log(numbersTimes3);

console.log("------------------------ reduce: calculate sum of all el ---------------------");
const sumOfAllNumbers = numbers.reduce((acc, n) => acc + n);
console.log(sumOfAllNumbers);

console.log("------------------------ array of objects  ---------------------");
const availableProducts = [
    {name: "appel", amount: 5},
    {name: "kiwi", amount: 25},
    {name: "banaan", amount: 7},
    {name: "aardbei", amount: 101},
    {name: "framboos", amount: 34}
];

availableProducts.forEach((p) => console.log(`${p.name}: ${p.amount}`));

console.log("------------------------ filter: amount>=10  ---------------------");
const filteredProducts = availableProducts.filter((pl) => pl.amount >= 10);
filteredProducts.forEach((p) => console.log(`${p.name}: ${p.amount}`));

console.log("------------------------ sorted by amount  ---------------------");
//sort functie: return een negatieve waarde als linker el <= rechter el
const sortedByAmount = availableProducts.sort((pl, pr) => pl.amount <= pr.amount && -1);
sortedByAmount.forEach((p) => console.log(`${p.name}: ${p.amount}`));

console.log("------------------------ sorted by name  ---------------------");
const sortedByName = availableProducts.sort((pl, pr) => pl.name <= pr.name && -1);
sortedByName.forEach((p) => console.log(`${p.name}: ${p.amount}`));


