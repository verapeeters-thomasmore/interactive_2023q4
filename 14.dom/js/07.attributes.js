const kleur = function (kleur) {
    const quoteElement = document.getElementById("quote");
    quoteElement.className = kleur;
};

const fontsize = function (size) {
    const quoteElement = document.getElementById("quote");
    quoteElement.style = `font-size: ${size}`;
};

