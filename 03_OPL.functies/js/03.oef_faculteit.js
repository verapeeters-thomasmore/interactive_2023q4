const faculteit = (basis) => {
    let result = 1;
    for (let count = 1; count <= basis; count++) {
        result *= count;
    }
    return result;
}
console.log(faculteit(1));
console.log(faculteit(6));
console.log(faculteit(8));

//kortere versie - met recursie - dus zonder let
const faculteit2 = basis => {
    return basis <= 2 ? basis : basis * faculteit2(basis - 1);
};

console.log(faculteit2(-1)); //-1
console.log(faculteit2(1)); //1
console.log(faculteit2(2)); //2
console.log(faculteit2(3)); //3 * faculteit2(2) = 3 * 2 = 6
console.log(faculteit2(4)); //4 * faculteit2(3) = 4 * (3 * faculteit2(2)) = 4 * (3 * 2) = 24
console.log(faculteit2(6));
console.log(faculteit2(8));


//kortere versie - met recursie en korte notatie van arrow functie
const faculteit3 = basis => basis <= 2 ? basis : basis * faculteit3(basis - 1);

console.log(faculteit3(-1)); //-1
console.log(faculteit3(1)); //1
console.log(faculteit3(2)); //2
console.log(faculteit3(3)); //3 * faculteit2(2) = 3 * 2 = 6
console.log(faculteit3(4)); //4 * faculteit2(3) = 4 * (3 * faculteit2(2)) = 4 * (3 * 2) = 24
console.log(faculteit3(6));
console.log(faculteit3(8));
