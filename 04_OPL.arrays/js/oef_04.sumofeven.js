function sumOfEven(arrayOfNumbers) {
    return arrayOfNumbers.reduce((sum, getal) => getal % 2 ? sum : sum + getal, 0);
}


function sumOfEven_v2(arrayOfNumbers) {
    return arrayOfNumbers.filter(n => !(n % 2)).reduce((sum, getal) => sum + getal, 0);
}


console.log(sumOfEven([1, 5, 60, 2])); // result: 62
console.log(sumOfEven([2, 4, 6])); // result: 12
console.log(sumOfEven([1, 5, 3])); // result: 0
console.log(sumOfEven([])); // result: 0