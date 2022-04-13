
console.log("\n----------------- log all the children and their children and ... -----------------");

function logChildTree(parent, prefix = " ") {
    const nodeTypes = {1: "element", 3: "text   ", 8: "comment"};
    //console.log(`childeren:`)
    for (let i = 0; i < parent.childNodes.length; ++i) {
        const child = parent.childNodes[i];
        if (child.nodeType == 1) { //element
            console.log(`${prefix}${i}: ${child.tagName}`)
            logChildTree(child, prefix + "  ");
        } else if (child.nodeType == 3) //text
            console.log(`${prefix}${i}: textContent=${child.textContent}`)
    }
}

console.log(`\n----- children of document.body`)
logChildTree(document.body);

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



