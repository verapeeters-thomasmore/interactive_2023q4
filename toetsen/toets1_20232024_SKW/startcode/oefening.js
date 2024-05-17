const listEl = document.getElementById("list");


const attractions = [
    {name: "Werewolf", type: "Roller Coaster", thrillLevel: "High", heightRequirement: 140},
    {name: "Psyke Underground", type: "Roller Coaster", thrillLevel: "Extreme", heightRequirement: 150},
    {name: "Cobra", type: "Roller Coaster", thrillLevel: "Medium", heightRequirement: 120},
    {name: "Vampire", type: "Roller Coaster", thrillLevel: "High", heightRequirement: 130},
    {name: "Dalton Terror", type: "Drop Tower", thrillLevel: "Extreme", heightRequirement: 140},
    {name: "Pulsar", type: "Water Coaster", thrillLevel: "High", heightRequirement: 140},
    {name: "Calamity Mine", type: "Mine Train Coaster", thrillLevel: "Medium", heightRequirement: 110},
    {name: "Challenge of Tutankhamon", type: "Dark Ride", thrillLevel: "Low", heightRequirement: 100},
    {name: "Radja River", type: "River Rapids", thrillLevel: "Medium", heightRequirement: 100},
    {name: "Kondaa", type: "Mega Coaster", thrillLevel: "Extreme", heightRequirement: 140}
];
let favorites = ["Werewolf", "Cobra"];

function showOneAttraction(attraction) {
    return `<div class="col col-sm-6 col-md-3">
                <div class="card p-2 m-1">
                     ${attraction.name}
                </div> 
            </div>`;
}


//oefening 1: toon alle eigenschappen van attraction zoals in de screenshot
//oefening 2: filter
//oefening 3: als attraction voorkomt in de favorites dan toon je deze in een andere kleur - gebruik de css class favoriteAttraction
//oefening 4: als user op een attraction klikt die niet in de favorites zit: nieuwe favorites lijst met de attraction erbij
// zie TIP voor onclick!!!
//oefening 5: als user op een attraction klikt die in de favorites zit: nieuwe favorites lijst met de attraction erbij


function showAttractionsInUI() {
    const attractionsHTML = attractions
        .map(entry => showOneAttraction(entry))
        .join("");
    listEl.innerHTML = `<div class="row">${attractionsHTML}</div>`;
}

showAttractionsInUI();
