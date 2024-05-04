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
function checkInvited() {
    resultEl.innerHTML = getMessageCheckInvited(nameEl.value);
}

//UI-functie
function showAllInvited() {
    return resultEl.innerHTML = visitors
        .map(entry => `<li>${entry}</li>`)
        .join("");
}


//functionele functie - maakt nieuwe array - dus geen side-effects
function pushVisitors(name) {
    //TODO geen push
    visitors.push(name);
    console.log(visitors);
}


//UI-functie
function addInvitee() {
    const name = nameEl.value;
    pushVisitors(name);
    resultEl.innerHTML = name + " toegevoegd.";
}


//en nu ook op console
(visitors.filter(entry => entry.toLowerCase().startsWith("j"))).forEach(entry => console.log(entry))
