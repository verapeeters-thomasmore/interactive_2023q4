
function countCommonElements(array1, array2) {
}


console.log(countCommonElements([], [])); //0
console.log(countCommonElements([1], [1])); //1
console.log(countCommonElements([1, 2], [1, 2])); //2
console.log(countCommonElements([2, 1], [1, 2])); //2
console.log(countCommonElements([1, 2], [1, 3])); //1
console.log(countCommonElements([1, 2, 2], [1, 2])); //2
console.log(countCommonElements([2, 4, 1, 2], [1, 4])); //2
console.log(countCommonElements([1, 2, 2], [2, 1, 2])); //3

console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 0, 6, 15, 6, 4, 7, 0])); //2
console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 5, 6, 15, 6, 4, 7, 0])); //3
console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 5, 6, 15, 6, 4, 7, 5])); //4

