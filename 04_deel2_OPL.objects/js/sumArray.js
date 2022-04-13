const sumArray = (listOfNumbers) =>
{
    let som = 0;
    //voor elke entry (ik noem dit nu getal) uit uw array : tel deze entry bij som
    listOfNumbers.forEach((getal) => som+= getal);

    return som;
}
console.log(sumArray([1,5,60]));

