const newpower = function(basis, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        const newpower1 = newpower(basis, exponent - 1);
        //console.log(newpower1);
        return basis * newpower1;
    }
}
console.log(newpower(2, 3));

const newpowerSimple = function(basis, exponent) {
    let result = 1;
    while (exponent>0) {
        result = result * basis;
        exponent--;
    }
    return result;
}
console.log(newpowerSimple(2, 3));


const zoekOplossing = function(doel) {
    function vind(huidig, historie) {
        if (huidig === doel) {
            return historie;
        } else if (huidig > doel) {
            return null;
        } else {
            return vind(huidig + 5, `(${historie} + 5)`) ||
                vind(huidig * 3, `(${historie} * 3)`);
        }
    }
    return vind(1, "1");
}
console.log(zoekOplossing(24));
console.log(zoekOplossing(12));
console.log(zoekOplossing(10));
console.log(zoekOplossing(6));
console.log(zoekOplossing(13));
