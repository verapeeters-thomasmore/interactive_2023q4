const cities = [
    {name: "Antwerpen", country: "Belgium", habitants: 529000},
    {name: "Paris", country: "France", habitants: 2206000},
    {name: "Gent", country: "Belgium", habitants: 263000},
    {name: "Charleroi", country: "Belgium", habitants: 203000},
    {name: "Marseille", country: "France", habitants: 861000},
    {name: "Berlin", country: "Germany", habitants: 3620000},
    {name: "Brussel", country: "Belgium", habitants: 1181000},
    {name: "Lyon", country: "France", habitants: 513000},
    {name: "Liège", country: "Belgium", habitants: 197000},
    {name: "Hamburg", country: "Germany", habitants: 1787000},
    {name: "Toulouse", country: "France", habitants: 471000},
    {name: "München", country: "Germany", habitants: 1450000}
];

console.log()
console.log("gesorteerd volgens habitants")
console.log([...cities]
    .sort((c1, c2) => c1.habitants >= c2.habitants && -1))

console.log()
console.log("gesorteerd volgens habitants - print alleen naam en habitants")
console.log([...cities]
    .sort((c1, c2) => c1.habitants >= c2.habitants && -1)
    .map(c => ({name: c.name, habitants: c.habitants})))

function citiesIn(country) {
    return cities.filter(c => c.country === country).map(c => `${c.name} heeft ${c.habitants} inwoners`);
}

console.log()
citiesIn("Belgium").forEach(t => console.log(t));

function habitantsIn(country) {
    return cities
        .filter(city => city.country === country)
        .reduce((result, city) => result + city.habitants, 0)
}

console.log()
console.log("France heeft " + habitantsIn("France") + " inwoners");


function countryHabitants() {
    return new Set(cities.map(country => country.country).map(country => `${country} heeft ${habitantsIn(country)} inwoners`));
}

console.log()
countryHabitants().forEach(s => console.log(s));