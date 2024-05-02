
function countCommonElements(array1, array2) {
    const gevondenPlaatsen = []
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j] && !gevondenPlaatsen.includes(j)) {
                gevondenPlaatsen.push(j);
            }
        }
    }
    return gevondenPlaatsen.length;
}


console.log(countCommonElements([], [])); //0
console.log(countCommonElements([1], [1])); //1
console.log(countCommonElements([1, 2], [1, 2])); //2
console.log(countCommonElements([1, 2], [1, 3])); //1
console.log(countCommonElements([1, 2, 2], [1, 2])); //2
console.log(countCommonElements([1, 2, 2], [2, 1, 2])); //3

console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 0, 6, 15, 6, 4, 7, 0])); //2
console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 5, 6, 15, 6, 4, 7, 0])); //3
console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 5, 6, 15, 6, 4, 7, 5])); //4

