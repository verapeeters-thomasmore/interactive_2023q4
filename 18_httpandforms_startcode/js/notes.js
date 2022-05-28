// hier jouw code
let list;
let note;
let notename;
let input;

let noteslist;
let displaylist;
let state;

window.addEventListener("load", laad);

function laad() {
    list = document.querySelector("select");
    note = document.querySelector("textarea");
    notename = document.querySelector("#notename");
    input = document.querySelector("input");
    noteslist = document.querySelector("#noteslist");
    displaylist = document.querySelector("#displaylist");

    list.addEventListener("change", () => {
        setState({notes: state.notes, selected: list.value});
    });

    note.addEventListener("change", () => {
        setState({
            notes: Object.assign({}, state.notes, {[state.selected]: note.value}),
            selected: state.selected
        });
    });

    document.querySelector("button").addEventListener("click", () => {
        notename.style.display = "inline-block";
        input.value = '';
        input.focus();
    });

    input.addEventListener("change", () => {
        let name = input.value;
        if (name) {
            let existing;
            if (list.options.length == 0) {
                list.style.display = "inline-block";
                note.style.display = "block";
                existing = null;
            } else {
                existing = state.notes;
            }
            setState({
                notes: Object.assign({}, existing, {[name]: ""}),
                selected: name
            });
        }
        notename.style.display = "none";
        note.focus();
    });
}

function setState(newState) {
    console.log("test");
    list.textContent = "";
    for (let name of Object.keys(newState.notes)) {
        let option = document.createElement("option");
        option.textContent = name;
        if (newState.selected == name) option.selected = true;
        list.appendChild(option);
    }
    note.value = newState.notes[newState.selected];
    note.style.height = 0;
    note.style.height = Math.max(80, note.scrollHeight)+'px';

    localStorage.setItem("Notes", JSON.stringify(newState));
    state = newState;
    display(state);
}

function display(state) {
    displaylist.innerHTML = "";
    noteslist.style.display = "none";
    let empty = true;
    for (let name of Object.keys(state.notes)) {
        empty = false;
        let divNote = document.createElement("div");
        let noteTitle = document.createElement("h4");
        noteTitle.innerHTML = name;
        if (state.selected==name) {
            divNote.className = "selected";
        }
        divNote.appendChild(noteTitle);
        let noteContent = document.createElement("div");
        noteContent.innerHTML = state.notes[name].split("\n").join("<br>");
        divNote.appendChild(noteContent);
        displaylist.appendChild(divNote);
        let hr = document.createElement("hr");
        displaylist.appendChild(hr);
    }
    if (!empty) {
        noteslist.style.display = "block";
        note.focus();
    }
}
