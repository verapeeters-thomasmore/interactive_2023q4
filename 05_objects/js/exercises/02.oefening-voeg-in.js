/**
 * Oefening 2 - Voeg in
 */
console.log("------------------------ voegInOld");
function voegInOld(array1, array2)
{
    return array1.slice(0,array1.length/2).concat(array2).concat(array1.slice(array1.length/2));
}
console.log(voegInOld([1,2,3,4],[20,30,40]));

/**
 * Schrijf de functie voegInNew die hetzelfde doet als voegInOld, maar gebruik maakt van de spread syntax.
 */
