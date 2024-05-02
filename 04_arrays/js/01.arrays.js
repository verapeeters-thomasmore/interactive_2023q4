console.log("-------- arrays --------");

//array declaratie:
const listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2]);

console.log("---loop met for");
for (let i = 0; i < listOfNumbers.length; i++) {
    console.log("Element " + i + " van listOfNumbers = " + listOfNumbers[i]);
}

console.log("---loop met for of");
for (let entry of listOfNumbers) {
    console.log(entry);
}

console.log("---loop met foreach - met arrow-functie");
listOfNumbers.forEach((entry) => {
    console.log(entry);
});

console.log("---loop met foreach - arrow-functie kortere notatie");
listOfNumbers.forEach(entry => console.log(entry));

console.log("-------- types, types, types --------");
console.log("---array can contain different types of elements");
const listOfAnything = [2, "apen", 5, "beren", 11, "chihuahua"];

console.log("---loop met foreach");
listOfAnything.forEach((entry) => {
    console.log(entry);
});


console.log("---assign number to array?");
let list = [2, 3, 5, 7, 11];
console.log(list);
list2OfNumbers = 1;
console.log(list);

const emptyArray = [];

