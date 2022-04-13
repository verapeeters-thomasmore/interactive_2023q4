//=================================================================
let n = 10;
const helft = function(n) {
    return n/2;
}
console.log(helft(100));
console.log(n);


//=================================================================
const hummus = function(portions) {
    const ingredient = function(hoeveelheid, eenheid, naam) {
        let ingredientHoeveelheid = hoeveelheid * portions;
        console.log(`${ingredientHoeveelheid} ${eenheid} ${naam}`);

    }
    ingredient(0.25, "tasje", "tahini");
    ingredient(0.25, "tasje", "citoensap");
    ingredient(2, "lepel", "olijolie");
    ingredient(0.5, "theelepel", "komijn")
    ingredient(100, "gram", "kikkererwten")
}
hummus(10);
