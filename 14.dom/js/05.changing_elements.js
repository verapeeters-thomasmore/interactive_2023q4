console.log(`\n------------------------------- finding elements ----------------`)
console.log(`\nfirst div element in body`)
const firstDivElement = document.body.getElementsByTagName("div")[0];

console.log(`\nfirst li element in body`)
const firstLiElement = document.body.getElementsByTagName("li")[0];
console.log(firstLiElement);

console.log(`\nfirst li element in first div`)
const firstLiElementInFirstDiv = firstDivElement.getElementsByTagName("li")[0];
console.log(firstLiElementInFirstDiv);

console.log(`\nsecond div element`)
const secondDivElement = document.body.getElementsByTagName("div")[1];
console.log(secondDivElement);

console.log(`\nfirst p in second div`)
const firstPInSecondDivElement = secondDivElement.getElementsByTagName("p")[0];
console.log(firstPInSecondDivElement);

let counter = 0;

function removeFirstDivElement() {
    const firstDivElement = document.getElementsByTagName("div")[0];
    if (firstDivElement.id !== "buttons")
        firstDivElement.remove();
}

function appendNewDivElement() {
    const newDivElement = document.createElement("div");
    newDivElement.innerHTML = `div ${++counter}`;
    document.body.appendChild(newDivElement);
}

function insertNewDivElement() {
    const firstDivElement = document.body.getElementsByTagName("div")[0];
    const newDivElement = document.createElement("div");
    newDivElement.innerHTML = `div ${++counter}`;
    firstDivElement.parentElement.insertBefore(newDivElement, firstDivElement);
}

function editFirstDivElement() {
    const firstDivElement = document.getElementsByTagName("div")[0];
    firstDivElement.innerHTML = "FIRST " + firstDivElement.innerHTML;
}

function moveFirstDivElementToBottom() {
    const firstDivElement = document.getElementsByTagName("div")[0];
    document.body.appendChild(firstDivElement);
}

