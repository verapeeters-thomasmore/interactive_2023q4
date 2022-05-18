const studenten = [
    {naam: "Sneeuwwitje", procent: "81"},
    {naam: "Roodkapje", procent: "41"},
    {naam: "Hans", procent: "51"},
    {naam: "Griet", procent: "70"},
    {naam: "De boze wolf", procent: "15"}
];


function graad(student) {
    function graadFromProcent() {
        if (student.procent >= 70) return "onderscheiding";
        if (student.procent >= 50) return "voldoende";
        return "onvoldoende";
    }

    student.graad = graadFromProcent();
    return student;
}

console.log(graad(studenten[0]));
console.log(graad(studenten[1]));
console.log(graad(studenten[2]));

function berekenGemiddelde(studenten) {
    return studenten.reduce((som, s) => som + Number(s.procent), 0) / studenten.length;
}

console.log(berekenGemiddelde(studenten))

function maakTweeGroepen(studenten, gemiddelde) {
    return {
        zwakkereHelft: studenten.filter(s => s.procent < gemiddelde),
        sterkereHelft: studenten.filter(s=>s.procent>=gemiddelde)
    };
}

console.log(maakTweeGroepen(studenten, berekenGemiddelde(studenten)))


