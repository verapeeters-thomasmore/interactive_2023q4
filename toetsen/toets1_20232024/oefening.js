const listEl = document.getElementById("list");
const heightEl = document.getElementById("height");


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
                     <h5>${attraction.name}</h5>
                    <div>${attraction.type}</div>
                    <div>min hoogte: ${attraction.heightRequirement} cm</div>
                    <div><b>${attraction.thrillLevel === "Extreme" ? "Extreme!!!" : ""}</b></div>
                   </div> 
            </div>`
}


//oefening 1: toon alle eigenschappen van attraction
//oefening 2: filter
//oefening 3: als attraction voorkomt in de favorites dan toon je deze in een andere kleur
//oefening 4: als user op een attraction klikt: toggle favorite
//oefening 5: sorteer


//ze mogen ook zoeken op bootstrap

function showAttractionsInUI() {
    const attractionsHTML = attractions
        .filter(entry => !heightEl.value || entry.heightRequirement <= heightEl.value)
        .map(entry => showOneAttraction(entry))
        .join("");
    listEl.innerHTML = `<div class="row">${attractionsHTML}</div>`;
}

function filterHeight() {
    showAttractionsInUI();
}

showAttractionsInUI();
