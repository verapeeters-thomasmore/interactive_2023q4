const addCitaat = function () {
    citaatEl = document.getElementById("citaat");
    if (!citaatEl) {
        const citaatNewEl = document.createElement("p");
        citaatNewEl.id = "citaat";
        citaatNewEl.style.visibility = "visible";
        citaatNewEl.className = "blue";
        citaatNewEl.innerHTML = "Wie weinig denkt vergist zich vaak.";
        document.getElementById("quote").appendChild(citaatNewEl);
    } else {
        if (citaatEl.style.visibility=== "visible")
            citaatEl.style.visibility = "hidden";
        else
            citaatEl.style.visibility = "visible";
    }
}
const addAuteur = function () {

    const auteurEl = document.createElement("p");
    auteurEl.innerHTML = "<b>Leonardo Da Vinci</b>";
    auteurEl.id = "auteur";
    document.getElementById("citaat").appendChild(auteurEl);
}
