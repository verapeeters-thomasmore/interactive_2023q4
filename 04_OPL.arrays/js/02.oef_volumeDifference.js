const volumeCalculation = block => block[0] * block[1] * block[2];
// de functie krijgt 1 paramater binnen = block
//1 return statement => dus {} en return weg
const volumeDifference = (block1, block2) =>
    Math.abs(volumeCalculation(block1) - volumeCalculation(block2));
console.log(volumeCalculation([5,8,6]))
console.log(volumeDifference([5,8,6],[5,4,3]));


