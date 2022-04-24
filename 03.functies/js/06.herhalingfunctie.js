function vierkantswortel1(getal) {
    if (getal<0) {
        console.log("Enkel positief getal!");
        return NaN;
    }
    return Math.sqrt(getal);
}

let vierkantswortel2 = function(getal) {
    if (getal<0) {
        console.log("Enkel positief getal!");
        return NaN;
    }
    return Math.sqrt(getal);
}

let vierkantswortel3 = (getal) => {
    if (getal<0) {
        console.log("Enkel positief getal!");
        return NaN;
    }
    return Math.sqrt(getal);
}

console.log(vierkantswortel1(81));
console.log(vierkantswortel2(-81));
console.log(vierkantswortel3(81));

