/**
 * Oefening 4 - Steden
 */
const cities = [
  { name: "Antwerpen", country: "Belgium", habitants: 529000 },
  { name: "Paris", country: "France", habitants: 2206000 },
  { name: "Gent", country: "Belgium", habitants: 263000 },
  { name: "Charleroi", country: "Belgium", habitants: 203000 },
  { name: "Marseille", country: "France", habitants: 861000 },
  { name: "Berlin", country: "Germany", habitants: 3620000 },
  { name: "Brussel", country: "Belgium", habitants: 1181000 },
  { name: "Lyon", country: "France", habitants: 513000 },
  { name: "Liège", country: "Belgium", habitants: 197000 },
  { name: "Hamburg", country: "Germany", habitants: 1787000 },
  { name: "Toulouse", country: "France", habitants: 471000 },
  { name: "München", country: "Germany", habitants: 1450000 },
];

/**
 * Oefening 4.1 - Sorteer de steden op habitants
 */
const sortedByHabitants = cities.toSorted((city1, city2) => city1.habitants - city2.habitants);
console.log("Cities sorted by habitants: ", sortedByHabitants);

/**
 * Oefening 4.2 - Filter de steden van Belgium
 */
const isBelgium = (city) => city.country === "Belgium";
const citiesOfBelgium = cities.filter(isBelgium);
console.log("Cities of Belgium: ", citiesOfBelgium);

/**
 * Oefening 4.3 - Bereken de totale populatie van Belgium
 */
const getTotalPopulation = (country) =>
  cities
    .filter((city) => city.country === country)
    .reduce((total, city) => total + city.habitants, 0);

console.log(`France heeft ${getTotalPopulation("France")} inwoners`);

/**
 * Oefening 4.4 - Maak een lijst van alle landen waarin steden liggen en bereken de totale populatie per land
 */
const countries = [...new Set(cities.map((city) => city.country))];
const countriesWithPopulation = countries.map((country) => ({
  country,
  population: getTotalPopulation(country),
}));

console.log("Countries: ", countries);
console.log("Countries with population: ", countriesWithPopulation);
