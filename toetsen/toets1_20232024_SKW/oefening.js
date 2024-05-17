const listEl = document.getElementById("list");
const stageEl = document.getElementById("stage");
const genreEl = document.getElementById("genre");

const performances = [
    {bandName: "Foo Fighters", genre: "Rock", performanceTime: "12:00 PM", stage: "Main Stage"},
    {bandName: "Red Hot Chili Peppers", genre: "Rock", performanceTime: "1:30 PM", stage: "Main Stage"},
    {bandName: "Radiohead", genre: "Alternative", performanceTime: "3:00 PM", stage: "Alternative Stage"},
    {bandName: "Arctic Monkeys", genre: "Alternative", performanceTime: "4:30 PM", stage: "Alternative Stage"},
    {bandName: "Kendrick Lamar", genre: "Hip Hop", performanceTime: "6:00 PM", stage: "Main Stage"},
    {bandName: "Drake", genre: "Hip Hop", performanceTime: "7:30 PM", stage: "Main Stage"},
    {bandName: "The Chainsmokers", genre: "Electronic", performanceTime: "9:00 PM", stage: "Dance Stage"},
    {bandName: "Calvin Harris", genre: "Electronic", performanceTime: "10:30 PM", stage: "Dance Stage"},
    {bandName: "Billie Eilish", genre: "Pop", performanceTime: "12:00 AM", stage: "Pop Stage"},
    {bandName: "Taylor Swift", genre: "Pop", performanceTime: "1:30 AM", stage: "Pop Stage"}
];
let favorites = ["Arctic Monkeys", "Billie Eilish"];

function showOnePerformance(performance) {
    const cssclass = favorites.includes(performance.bandName) ? "favoritePerformance" : "";
    return `<div class="col col-sm-6 col-md-3" onclick="toggleFavorite('${performance.bandName}')">
                <div class="card p-2 m-1 ${cssclass}">
                     <h5>${performance.bandName}</h5>
                    <div>${performance.genre}</div>
                    <div><b>${performance.stage}</b> ${performance.performanceTime}</div>
                   </div> 
            </div>`;
}


//oefening 1: toon alle eigenschappen van de performances zoals in de screenshot
//oefening 2: filters
//oefening 3: als performance voorkomt in de favorites dan toon je deze in een andere kleur - gebruik de css class favoritePerformance
//oefening 4: als user op een performance klikt die niet in de favorites zit: nieuwe favorites lijst met de performance erbij
// zie TIP voor onclick!!!
//oefening 5: als user op een performance klikt die in de favorites zit: nieuwe favorites lijst zonder deze performance


function showAttractionsInUI() {
    const attractionsHTML = performances
        .filter(entry => !stageEl.value || entry.stage.toLowerCase().includes(stageEl.value.toLowerCase()))
        .filter(entry => !genreEl.value || entry.genre.toLowerCase().includes(genreEl.value.toLowerCase()))
        .map(entry => showOnePerformance(entry))
        .join("");
    listEl.innerHTML = `<div class="row">${attractionsHTML}</div>`;
}

function filterStage() {
    showAttractionsInUI();
}

function filterGenre() {
    showAttractionsInUI();
}

function toggleFavorite(bandName) {
    favorites = favorites.includes(bandName) ? favorites.filter(a => a !== bandName) : favorites.concat(bandName);
    showAttractionsInUI();
}

showAttractionsInUI();
