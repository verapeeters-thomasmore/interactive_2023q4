//=================================================================
//function humus prints the ingredients necessary for certain amount of portions
//parameter portions: how many portions are needed
const hummus = function(portions) {
    const ingredient = function(amount, unit, name) {
        const ingredientAmount = amount * portions;
        if (ingredientAmount > 1 && unit !== "gram") {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);

    }
    //ingredients in the recipe are for 1 portion
    ingredient(0.25, "tasje", "tahini");
    ingredient(0.25, "tasje", "citoensap");
    ingredient(2, "lepel", "olijolie");
    ingredient(0.5, "theelepel", "komijn")
    ingredient(100, "gram", "kikkererwten")
}
hummus(10);
