function checkInitCap (woord)
{
    return woord[0] === woord[0].toUpperCase();
}

/*function check (zin)
{
    return zin.split(" ").every(checkInitCap);
}*/

function check (zin)
{
//het is een => functie met een parameter woord.
    return zin.split(" ").every(woord => woord[0] === woord[0].toUpperCase());
}
console.log(check("Dit Is Een Zin"))


function sentenceWithInitCap(zin) {
    return zin.split(" ").map((woord) =>
        woord.charAt(0).toUpperCase()+woord.slice(1).toLowerCase()).join(" ");

}
console.log(sentenceWithInitCap("Dit Is een ZIN"));