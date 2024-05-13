function printLargerThen7() {

}

const numbers = [1, 3, 5, 2, 6, 7, 34, 12, 66, 98, 11, 2];

console.log();
console.log("print groter dan 7")
console.log(numbers.filter(n => n >= 7));

console.log();
console.log("print groter dan 7 en gesorteerd")
console.log(numbers.filter(n => n >= 7).sort((n1, n2) => n1>=n2 && -1));

console.log();
console.log("print groter dan 7, gesorteerd en goed geformatteerd")
console.log(numbers.filter(n => n >= 7).sort((n1, n2) => n1>=n2 && -1).join("\n"));

console.log();
console.log("print groter dan 7, gesorteerd, gekwadrateerd en goed geformatteerd")
console.log(numbers.filter(n => n >= 7).map(n => n**2).sort((n1, n2) => n1>=n2 && -1).join("\n"));

