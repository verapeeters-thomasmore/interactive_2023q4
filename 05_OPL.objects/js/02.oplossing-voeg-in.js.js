console.log("------------------------ voegInOld");

function voegInOld(array1, array2) {
  return array1
    .slice(0, array1.length / 2)
    .concat(array2)
    .concat(array1.slice(array1.length / 2));
}
console.log(voegInOld([1, 2, 3, 4], [20, 30, 40]));

console.log("------------------------ voegInNew");

function voegIn(array1, array2) {
  return [...array1.slice(0, array1.length / 2), ...array2, ...array1.slice(array1.length / 2)];
}
console.log(voegIn([1, 2, 3, 4], [20, 30, 40]));
