const listEl = document.getElementById("list");


const attractions = [
    {name: "Werewolf", type: "Roller Coaster", thrillLevel: "High", heightRequirement: "140cm"},
    {name: "Psyke Underground", type: "Roller Coaster", thrillLevel: "Extreme", heightRequirement: "150cm"},
    {name: "Cobra", type: "Roller Coaster", thrillLevel: "Medium", heightRequirement: "120cm"},
    {name: "Vampire", type: "Roller Coaster", thrillLevel: "High", heightRequirement: "130cm"},
    {name: "Dalton Terror", type: "Drop Tower", thrillLevel: "Extreme", heightRequirement: "140cm"},
    {name: "Pulsar", type: "Water Coaster", thrillLevel: "High", heightRequirement: "140cm"},
    {name: "Calamity Mine", type: "Mine Train Coaster", thrillLevel: "Medium", heightRequirement: "110cm"},
    {name: "Challenge of Tutankhamon", type: "Dark Ride", thrillLevel: "Low", heightRequirement: "100cm"},
    {name: "Radja River", type: "River Rapids", thrillLevel: "Medium", heightRequirement: "100cm"},
    {name: "Kondaa", type: "Mega Coaster", thrillLevel: "Extreme", heightRequirement: "140cm"}
];
let favorites = ["Werewolf", "Cobra"];

function showOneAttraction(attraction) {
    return `<div class="col card m-1 p-3 col-sm-4 col-md-3">${attraction.name}</div>`
}


//oefening 1: toon alle eigenschappen van attraction
//oefening 2: filter
//oefening 3: als attraction voorkomt in de favorites dan toon je deze in een andere kleur
//oefening 4: als user op een attraction klikt: toggle favorite
//oefening 5: sorteer

function showAttractionsInUI() {
    const attractionsHTML = attractions
        .map(entry => showOneAttraction(entry))
        .join("");
    listEl.innerHTML = `<div class="container"><div class="row w-100">${attractionsHTML}</div></div>`;
}

showAttractionsInUI();
