let visitors = ["Jan", "Badr", "Jos", "Mieke", "Anna", "Fien", "Klara", "Souf"];

const resultEl = document.getElementById("result");
const nameEl = document.getElementById("name");


//puur functionele check - geen side-effects
function isInvited(name) {
    return visitors.find(v => v.toLowerCase() === name.toLowerCase());
}

//aparte functie omdat we dan met return kunnen werken
//UI-functie
function getMessageCheckInvited(name) {
    if (!name) return "vul een naam in.";
    const invitedName = isInvited(name);
    return invitedName ? `${invitedName} is welkom!` : `${invitedName} is niet uitgenodigd.`;
}

//UI-functie
//toont "<name> is welkom!" of "<name> is niet uitgenodigd."
//check alleen volledige naam, case-insensitive
function checkInvitedButton() {
    resultEl.innerHTML = getMessageCheckInvited(nameEl.value);
}

//UI-functie
function showAllInvitedButton() {
    return resultEl.innerHTML = visitors
        .map(entry => `<li>${entry}</li>`)
        .join("");
}


//functionele functie - maakt nieuwe array - dus geen side-effects
function listWithExtraInvitee(name) {
    return visitors.concat(name);
}

function addInvitee(name) {
    //preconditions:
    if (!name) return "vul een naam in.";
    if (isInvited(name)) return `${name} was already invited.`;

    visitors = listWithExtraInvitee(name);
    return `${name} toegevoegd.`;
}

//UI-functie
//check first: name should not be empty and should not be in the list already
//create a new array and assign it to the visitors variable
function addInviteeButton() {
    resultEl.innerHTML = addInvitee(nameEl.value);
}

