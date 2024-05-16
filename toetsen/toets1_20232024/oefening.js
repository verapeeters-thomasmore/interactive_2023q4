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
    const cssclass = favorites.includes(attraction.name) ? "favoriteAttraction" : "";
    console.log(`*${attraction.name}*`);
    const s = `<div class="col col-sm-6 col-md-3" onclick="toggleFavorite('${attraction.name}')">
                <div class="card p-2 m-1 ${cssclass}">
                     <h5>${attraction.name}</h5>
                    <div>${attraction.type}</div>
                    <div>min hoogte: ${attraction.heightRequirement} cm</div>
                    <div><b>${attraction.thrillLevel === "Extreme" ? "Extreme!!!" : ""}</b></div>
                   </div> 
            </div>`;
    console.log(s);
    return s;
}


//oefening 1: toon alle eigenschappen van attraction
//oefening 2: filter
//oefening 3: als attraction voorkomt in de favorites dan toon je deze in een andere kleur
//oefening 4: als user op een attraction klikt die niet in de favorites zit: nieuwe favorites lijst met de attraction erbij
// TIP voor onclick!!!
//oefening 5: als user op een attraction klikt die in de favorites zit: nieuwe favorites lijst met de attraction erbij


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

function toggleFavorite(attractionName) {
    favorites = favorites.includes(attractionName) ? favorites.filter(a => a!==attractionName) : favorites.concat(attractionName);
    showAttractionsInUI();
}

showAttractionsInUI();
