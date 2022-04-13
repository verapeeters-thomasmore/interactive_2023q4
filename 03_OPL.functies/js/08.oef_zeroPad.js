const zeroPad = (nummer, breedte) => String(nummer).padStart(breedte,"0");
//eerst expliciet omzetten naar een String en dan pas de padStart toepassen


const boerderijInventaris = function(aantalKoeien, aantalKippen, aantalVarkens) {
    console.log(`${zeroPad(aantalKoeien, 3)} koeien`);
    console.log(`${zeroPad(aantalKippen, 3)} kippen`);
    console.log(`${zeroPad(aantalVarkens, 3)} varkens`);
}

boerderijInventaris(7, 16, 3);