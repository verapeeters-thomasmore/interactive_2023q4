const zeroPad = function(nummer, breedte) {
    let string = String(nummer);
    while (string.length < breedte) {
        string = "0" + string;
    }
    return string;
}

const boerderijInventaris = function(koeien, kippen, varkens) {
    console.log(`${zeroPad(koeien, 3)} koeien`);
    console.log(`${zeroPad(kippen, 3)} kippen`);
    console.log(`${zeroPad(varkens, 3)} varkens`);
}

boerderijInventaris(7, 16, 3);


