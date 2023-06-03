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

console.table([...fietstochten].sort((a, b) => b.aantalKm - a.aantalKm));

function gemeenschappelijkeVriendinnen(fietstocht1, fietstocht2) {
    return fietstocht1.fietsvriendinnen.filter(v => fietstocht2.fietsvriendinnen.indexOf(v) >= 0);
}

console.log(gemeenschappelijkeVriendinnen(fietstochten[0], fietstochten[1]))
console.log(gemeenschappelijkeVriendinnen(fietstochten[1], fietstochten[3]))
console.log(gemeenschappelijkeVriendinnen(fietstochten[4], fietstochten[3]))
