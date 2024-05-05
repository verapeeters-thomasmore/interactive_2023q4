function checkInitCap(sentence) {
}


console.log(checkInitCap("Dit Is Een Zin")); //result true
console.log(checkInitCap("Dit Is geen Zin")); //result false
console.log(checkInitCap("woord")); //result false
console.log(checkInitCap("Woord")); //result true
console.log(checkInitCap("")); //result false - als dit niet crasht is het ok
console.log(checkInitCap("0")); //result false - als dit niet crasht is het ok


function sentenceWithInitCap(sentence) {
}

console.log(sentenceWithInitCap("Dit Is Een Zin")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("dit is een zin")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("DIT IS EEN ZIN")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("diT iS EeN zin")); //result Dit Is Een Zin
console.log(sentenceWithInitCap("woord")); //result Woord
console.log(sentenceWithInitCap("WOORD")); //result Woord
console.log(sentenceWithInitCap("WOord")); //result Woord
console.log(sentenceWithInitCap("")); //result  - als dit niet crasht is het ok
