//=================================================================
const hummus = function(portions) {
    const ingredient = function(hoeveelheid, eenheid, naam) {
        let ingredientHoeveelheid = hoeveelheid * portions;
        if (ingredientHoeveelheid > 1 && eenheid !== "gram") {
            eenheid += "s";

        }
        console.log(`${ingredientHoeveelheid} ${eenheid} ${naam}`);

    }
    ingredient(0.25, "tasje", "tahini");
    ingredient(0.25, "tasje", "citoensap");
    ingredient(2, "lepel", "olijolie");
    ingredient(0.5, "theelepel", "komijn")
    ingredient(100, "gram", "kikkererwten")
}
hummus(10);
