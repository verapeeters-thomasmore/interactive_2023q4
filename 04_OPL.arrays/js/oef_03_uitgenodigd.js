const messageEl = document.getElementById("message");
const visitorListEl = document.getElementById("visitorList");
const nameEl = document.getElementById("name");

//state of the application: what changes on user actions
//dit verandert - dus let!
let visitors = ["Jan", "Badr", "Jos", "Mieke", "Anna", "Fien", "Klara", "Souf"];
let showVisitors = false;

//puur functionele check
//functie gebruikt alleen haar parameters, geen side-effects
function isInvited(visitors, name) {
    return visitors.find(v => v.toLowerCase() === name.toLowerCase());
}

//aparte functie omdat we dan met return kunnen werken
//functie gebruikt alleen haar parameters, geen side-effects
function checkInvited(visitors, name) {
    if (!name) return "vul een naam in.";

    const invitedName = isInvited(visitors, name);
    return invitedName ? `${invitedName} is welkom!` : `${invitedName} is niet uitgenodigd.`;
}

//UI-functie
//toont "<name> is welkom!" of "<name> is niet uitgenodigd."
//check alleen volledige naam, case-insensitive
function checkVisitorPresentButton() {
    messageEl.innerHTML = checkInvited(visitors, nameEl.value);
}

function showVisitorsInUI() {
    if (showVisitors)
        visitorListEl.innerHTML = visitors
            .filter(entry => entry.toLowerCase().includes(nameEl.value.toLowerCase()))
            .map(entry => `<li>${entry}</li>`)
            .join("");
    else
        visitorListEl.innerHTML = "";
}

//UI-functie
function toggleShowVisitorsButton() {
    showVisitors = !showVisitors;
    showVisitorsInUI();
}

//functionele functie - maakt nieuwe array
//functie gebruikt alleen haar parameters, geen side-effects
function listWithExtraInvitee(visitors, name) {
    return visitors.concat(name);
}

//functionele functie - returnt wel UI-message
function addInvitee(name) {
    //preconditions:
    if (!name) return "vul een naam in.";
    if (isInvited(visitors, name)) return `${name} was al uitgenodigd.`;

    visitors = listWithExtraInvitee(visitors, name);
    return `${name} toegevoegd.`;
}

//UI-functie
//check first: name should not be empty and should not be in the list already
//create a new array and assign it to the visitors variable
function addVisitorButton() {
    messageEl.innerHTML = addInvitee(nameEl.value);
    nameEl.value = "";
    filterVisitors();
}

function filterVisitors() {
    showVisitorsInUI();
}