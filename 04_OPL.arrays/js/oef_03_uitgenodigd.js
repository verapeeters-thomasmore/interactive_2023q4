const visitors = ["Jan", "Badr", "Jos", "Mieke", "Anna", "Fien", "Klara", "Souf"];
const resultEl = document.getElementById("result");
const nameEl = document.getElementById("name");


function isInvited(name) {
    return visitors.map(visitor => visitor.toLowerCase()).includes(name.toLowerCase());
}

function checkInvited() {
    resultEl.innerHTML = !nameEl.value ? "vul een naam in" : isInvited(nameEl.value) ? "Welkom" : "Niet welkom";
}

function showAllInvited() {
    return resultEl.innerHTML = visitors
        .map(entry => `<li>${entry}</li>`)
        .join("");
}

function showVIP() {
    return resultEl.innerHTML = visitors
        .filter(entry => entry.toLowerCase().startsWith("j"))
        .map(entry => `<div><b>${entry}</b> is een VIP!!</div>`)
        .join("");
}

const pushVisitors = name => {
    //TODO geen push
    visitors.push(name);
    console.log(visitors);
}

const addInvitee = () => {
    const name = nameEl.value;
    pushVisitors(name);
    resultEl.innerHTML = name + " toegevoegd.";
}

//en nu ook op console
(visitors.filter(entry => entry.toLowerCase().startsWith("j"))).forEach(entry => console.log(entry))