//exponent is 2 of 3
const tweedeDerdeMacht = (number, exponent) => {
    return (exponent === 2) ? number * number : number * number * number;
}

console.log(tweedeDerdeMacht(4, 2)); // 4*4 = 16
console.log(tweedeDerdeMacht(4, 3)); // 4*4*4 = 64

const xDeMacht_v1 = (number, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++)
        result = number * result;
    return result;
}


//exponent is eender wat
//                  4       2
const xDeMacht = (number, exponent) => {
    return (exponent === 0) ? 1 : number * xDeMacht(number, exponent - 1);
}

console.log("xDeMacht")
console.log(xDeMacht(4, 0)); // 1
console.log(xDeMacht(4, 1)); // 4 = 4
console.log(xDeMacht(4, 2)); // 4*4 = 16
console.log(xDeMacht(4, 3)); // 4*4*4 = 64
console.log(xDeMacht(4, 4)); // 4**4 = 4*4*4*4 = 256
