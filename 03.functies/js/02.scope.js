//=================================================================
const n = 10;
const helft = function (n) {
    return n / 2;
}
console.log(helft(100));
console.log(n);


//=================================================================
//de functie ingredient is een inner functie binnen in de functie hummus
//deze functie kan alleen binnen de functie hummus opgeroepen worden!
//merk op: de functie ingredient kan alle locale variabelen in de functie hummus gebruiken (bvb de parameter portions)

//function humus prints the ingredients necessary for certain amount of portions
//parameter portions: how many portions are needed
const hummus = function (portions) {
    const ingredient = function (amount, unit, name) {
        const ingredientAmount = amount * portions;
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    //ingredients in the recipe are for 1 portion
    ingredient(0.25, "tasje", "tahini");
    ingredient(0.25, "tasje", "citoensap");
    ingredient(2, "lepel", "olijolie");
    ingredient(0.5, "theelepel", "komijn")
}
hummus(4);

