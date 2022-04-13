const faculteit = (basis) => {
    let result = 1;
    for (let count = 2; count <= basis; count++) {
        result *= count;
    }
    return result;
}
console.log(faculteit(1));


