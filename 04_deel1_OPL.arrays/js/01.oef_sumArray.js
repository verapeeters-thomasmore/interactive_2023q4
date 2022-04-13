//oplossing 2 (eenvoudige oplossing)
function sumArray(listOfNumbers) {
    let som = 0;
    //voor elke entry (ik noem dit nu getal) uit uw array : tel deze entry bij som
    listOfNumbers.forEach(getal => som += getal);

    return som;
}

console.log(sumArray([1, 5, 60]));


//oplossing 2 (immutable oplossing - we gebruiken geen let)
function sumArrayVersie2(listOfNumbers) {
    return listOfNumbers.reduce((sum, getal) => sum + getal, 0);
}

console.log(sumArrayVersie2([1, 5, 60]));