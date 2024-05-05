function checkInitCap(sentence) {
    return sentence.split(" ").every(word => word[0] === word.charAt(0).toUpperCase());
}

//waarom  word.charAt(0) en niet word[0]?
//probeer dit uit in de console op string ""


console.log(checkInitCap("Dit Is Een Zin")); //result true
console.log(checkInitCap("Dit Is geen Zin")); //result false
console.log(checkInitCap("woord")); //result false
console.log(checkInitCap("Woord")); //result true
console.log(checkInitCap("")); //result false - als dit niet crasht is het ok
console.log(checkInitCap("0")); //result false - als dit niet crasht is het ok


function sentenceWithInitCap(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

}

console.log(sentenceWithInitCap("Dit Is Een Zin")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("dit is een zin")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("DIT IS EEN ZIN")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("diT iS EeN zin")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("woord")); //result Woord
console.log(sentenceWithInitCap("WOORD")); //result Woord
console.log(sentenceWithInitCap("WOord")); //result Woord
console.log(sentenceWithInitCap("")); //result  - als dit niet crasht is het ok
