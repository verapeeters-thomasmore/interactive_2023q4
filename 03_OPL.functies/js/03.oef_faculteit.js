//eerste implementatie- met een gewone for-loop - we MOETEN een let gebruiken!!!
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
const faculteit_v2 = basis => {
    return basis <= 2 ? basis : basis * faculteit_v2(basis - 1);
};

console.log(faculteit_v2(-1)); //-1
console.log(faculteit_v2(1)); //1
console.log(faculteit_v2(2)); //2
console.log(faculteit_v2(3)); //3 * faculteit_v2(2) = 3 * 2 = 6
console.log(faculteit_v2(4)); //4 * faculteit_v2(3) = 4 * (3 * faculteit_v2(2)) = 4 * (3 * 2) = 24
console.log(faculteit_v2(6));
console.log(faculteit_v2(8));


//kortere versie - met recursie en korte notatie van arrow functie
const faculteit_v3 = basis => basis <= 2 ? basis : basis * faculteit_v3(basis - 1);

console.log(faculteit_v3(-1)); //-1
console.log(faculteit_v3(1)); //1
console.log(faculteit_v3(2)); //2
console.log(faculteit_v3(3)); //3 * faculteit_v3(2) = 3 * 2 = 6
console.log(faculteit_v3(4)); //4 * faculteit_v3(3) = 4 * (3 * faculteit2(2)) = 4 * (3 * 2) = 24
console.log(faculteit_v3(6));
console.log(faculteit_v3(8));
