//schrijf een arrow function volumeCalculation die het volume returnt
// de functie krijgt 1 paramater binnen = block
//1 return statement => dus {} en return weg
const volumeCalculation = block => block[0] * block[1] * block[2];
const volumeCalculationV2 = function (block) {
    return block[0] * block[1] * block[2];
}
const volumeCalculationV3 = function (block) {
    let  volume = 1;
    for (const el of block) volume *= el;
    return volume;
}

console.log(`volume blok 2 : ${volumeCalculation([5, 8, 6])}`); //expected 240
console.log(`volume blok 1 : ${volumeCalculation([5, 4, 3])}`); //expected 60

//schrijf een arrow function volumeDifference die het verschil tussen de volumes
// van 2 blokken returnt

const volumeDifference = (block1, block2) =>
    Math.abs(volumeCalculation(block1) - volumeCalculation(block2));

console.log(`difference : ${volumeDifference([5, 8, 6], [5, 4, 3])}`); //expected 180
console.log(`difference : ${volumeDifference([3, 2, 4], [3, 5, 7])}`); //expected 81
console.log(`difference : ${volumeDifference([2, 2, 3], [5, 4, 1])}`); //expected 8


