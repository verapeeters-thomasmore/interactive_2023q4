console.log("-------- arrays --------");

let listOfNumbers = [2, 3, 5, 7, 11];
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

console.log("---loop met foreach");
listOfNumbers.forEach((entry) => {console.log(entry);});


console.log("---assign 1 to listOfNumbers");
listOfNumbers = 1;
console.log(listOfNumbers);

let emptyArray = [];

