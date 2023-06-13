const fietstochten = [
    {
        fiets: "MTB",
        aantalKm: 89,
        gemiddeldeSnelheid: 21,
        fietsvriendinnen: ["Anne", "Mieke", "Lea"],
        bestemming: "Scherpenheuvel"
    },
    {
        fiets: "MTB",
        aantalKm: 52,
        gemiddeldeSnelheid: 23,
        fietsvriendinnen: ["Anne", "Mieke", "Elke", "Vera"],
        bestemming: "Holsbeek"
    },
    {
        fiets: "MTB",
        aantalKm: 36,
        gemiddeldeSnelheid: 24,
        fietsvriendinnen: ["Jozefien", "Mieke", "Anne", "Lieve"],
        bestemming: "Lier"
    },
    {
        fiets: "koersfiets",
        aantalKm: 136,
        gemiddeldeSnelheid: 24,
        fietsvriendinnen: ["Anne", "Elke", "Lieve", "Mieke", "Karolien"],
        bestemming: "Oostende"
    },
    {
        fiets: "koersfiets",
        aantalKm: 100,
        gemiddeldeSnelheid: 24,
        fietsvriendinnen: ["Mieke", "Anne", "Karolien", "Lieve", "Elke", "Bea"],
        bestemming: "Voeren"
    },
    {
        fiets: "koersfiets",
        aantalKm: 60,
        gemiddeldeSnelheid: 26,
        fietsvriendinnen: ["Bea", "Mieke", "Anne"],
        bestemming: "Lier"
    }
]

function tochtenVanVriendin(vriendin) {
    return fietstochten.filter(tocht => tocht.fietsvriendinnen.includes(vriendin))
}

console.table(tochtenVanVriendin("Bea"));
console.table(tochtenVanVriendin("Anne"));
console.table(tochtenVanVriendin("blabla"));

// console.log("=================================================")
//
// function alleVriendinnen() {
//     return [...new Set([].concat(...fietstochten.map(tocht => tocht.fietsvriendinnen)))];
// }
//
// console.log(alleVriendinnen())

console.log("=================================================")

function tochtenSnellerDan(snelheid) {
    return fietstochten.filter(tocht => tocht.gemiddeldeSnelheid >= snelheid);
}

console.table(tochtenSnellerDan(22));
console.table(tochtenSnellerDan(25));
console.table(tochtenSnellerDan(26));

console.log("=================================================")

function vriendinnenSnellerDan(snelheid) {
    return [...new Set([].concat(...tochtenSnellerDan(snelheid).map(tocht => tocht.fietsvriendinnen)))];
}

console.log(vriendinnenSnellerDan(22));
console.log(vriendinnenSnellerDan(25));
