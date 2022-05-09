const visitors = ["Jan", "Jos", "Mieke", "Anna", "Fien"];
const nameEl = document.getElementById("name");
const resultEl = document.getElementById("result");


// map gaat in de array elke naam vervangen door de naam in lowercase
//met includes kan je nagaan of name voorkomt in visitors
const invited = name => visitors.map(naam => naam.toLowerCase())
    .includes(name.toLowerCase());

const pushVisitors = name => {
    visitors.push(name);
    console.log(visitors);
}

const fillInvited = () => {
    resultEl.innerHTML = invited(nameEl.value) ? "Welkom" : "Niet welkom";
}

const pushInvited = () => {
    const name = nameEl.value;
    pushVisitors(name);
    resultEl.innerHTML = name + " toegevoegd.";
}

//dit werkt ook: de array visitors wordt automatisch geconverteerd naar een string!!!!!
const showInvitedSimple = () => {
    resultEl.innerHTML = visitors;
}

//klein beetje betere layout
const showInvitedNicer = () => {
    resultEl.innerHTML = visitors.join(" - ");
}

//cool result
const showInvited = () => {
    resultEl.innerHTML = "<ul>" + visitors.map(name => `<li>${name}</li>`).join("") + "</ul>";
}

const overview = () => {
    visitors.forEach(name => console.log(name));
}