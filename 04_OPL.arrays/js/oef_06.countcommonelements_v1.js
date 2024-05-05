function countCommonElements(array1, array2) {
    let foundIndexesInArray2 = [];
    array1.forEach(el1 => {
            array2.forEach((el2, index2) => {
                    if (el1 === el2 && !foundIndexesInArray2.includes(index2)) {
                        foundIndexesInArray2 = foundIndexesInArray2.concat([index2]);
                    }
                }
            )
        }
    )
    return foundIndexesInArray2.length;
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

