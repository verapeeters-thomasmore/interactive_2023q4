//------------------------------------------
const macht = (basis, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= basis;
    }
    return result;
}
console.log(macht(5,3));

let tweedemacht = (x) => { return x * x; };
console.log(tweedemacht(4));
tweedemacht = x => x * x;
console.log(tweedemacht(16));

//------------------------------------------
let hoorn = () => {
    console.log("Tuuuuuttt!!!");
}
hoorn();

hoorn = () => console.log("Tuuuuuuuuuuttt!");
hoorn();

//------------------------------------------
