/*
wat doen we:
    Voor elk element in array1 kijken we of het in array2 zit.
    Indien ja voegen we de index in array 2 toe aan een array commonElements.
    Een element dat al in commonElements zit telt niet meer mee.

reduce:
    initiele waarde van commonElements is [] (laatste par van reduce)
    1e par van reduce is een functie
        deze functie wordt opgeroepen voor elk element in array1
        deze functie heeft 2 parameters:
            commonElements (zoals die tot dan toe al opgebouwd is)
            het huidige element waarvoor we de functie nu oproepen
        we gaan kijken of dit element in array2 zit EN of we het niet al gevonden hebben
            findIndex: par is een functie
                die uitgevoerd wordt voor elk element in array2.
                Als dit true teruggeeft stoppen we met de iteratie en is het resultaat de index van dit element
                de functie heeft 2 pars
                    1e par: elInArray2 is het huidige element waarvoor we de functie uitvoeren
                    2e par: i is de index van dat element in array2
                resultaat van de functie is true ALS
                    we dit element nog niet eerder gevonden hebben
                    en het is het element dat we zoeken
            resultaat van findIndex is:
                als het gevonden is: de index van het gevonden element
                anders: -1
        dus: indexInArray2 is
            als het gevonden is: de index van het gevonden element
            anders: -1
        de return waarde van de functie die opgeroepen wordt door reduce is
            als het gevonden is: een nieuwe commonElements (=de oude + het gevonden element)
            anders: de oude commonElements
        DUS: na inspectie van een element uit array1 is de nieuwe commonElements:
            als het gevonden is in array2: een nieuwe commonElements (=de oude + het gevonden element)
            anders: de oude commonElements
    Dus als reduce klaar is (functie is voor alle elementen uit array1 uitgevoerd)
        return van reduce is commmonElements
        commonElements bevat: elk element uit array1 dat we gevonden hebben in array2 (en dat we nog niet voordien gevonden hadden)
 */
function countCommonElements(array1, array2) {
    if (!array1.length || !array2.length) return 0;

    const commonElements = array1.reduce((commonElements, elInArray1) => {
        const indexInArray2 = array2.findIndex((elInArray2, i) => !commonElements.includes(i) && elInArray1 === elInArray2);
        return indexInArray2 < 0 ? commonElements : commonElements.concat(indexInArray2);
    }, []);
    //console.log(commonElements)
    return commonElements.length;
}


console.log(countCommonElements([], [])); //0
console.log(countCommonElements([1], [1])); //1
console.log(countCommonElements([1, 2], [1, 2])); //2
console.log(countCommonElements([1, 2], [1, 3])); //1
console.log(countCommonElements([1, 2, 2], [1, 2])); //2
console.log(countCommonElements([1, 2, 2], [2, 1, 2])); //3

console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 0, 6, 15, 6, 4, 7, 0])); //2
console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 5, 6, 15, 6, 4, 7, 0])); //3
console.log(countCommonElements([1, 2, 5, 5, 8, 9, 7, 10], [1, 5, 6, 15, 6, 4, 7, 5])); //4

