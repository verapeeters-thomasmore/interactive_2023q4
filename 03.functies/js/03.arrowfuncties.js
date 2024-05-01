//------------------------------------------
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(5,3));

let powerOf2 = (x) => { return x * x; };
console.log(powerOf2(4));
//shorter:
powerOf2 = x => x * x;
console.log(powerOf2(16));

//------------------------------------------
let hoorn = () => {
    console.log("Tuuuuuttt!!!");
}
hoorn();

//shorter:
hoorn = () => console.log("Tuuuuuuuuuuttt!");
hoorn();

//------------------------------------------
