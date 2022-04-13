const rootElement = document.documentElement;
console.log(`rootElement.nodeType: ${rootElement.nodeType}`);

const bodyElement = document.body;
console.log(`bodyElement.nodeType: ${bodyElement.nodeType}`);

console.log("\n----------------- log all the children -----------------");

function logAllChildren(parent) {
    const nodeTypes = {1: "element", 3: "text   ", 8: "comment"};
    console.log(`childeren:`)
    for (let i = 0; i < parent.childNodes.length; ++i) {
        const child = parent.childNodes[i];
        console.log(`  child ${i}: ${nodeTypes[child.nodeType]} textContent=${child.textContent}`)
    }
}

console.log(`\n----- children of document.body`)
logAllChildren(document.body);
console.log(`\n----- children of document.body.childNodes[5]`)
logAllChildren(document.body.childNodes[5]);
console.log(`\n----- children of document.body.childNodes[7]`)
logAllChildren(document.body.childNodes[7]);


console.log("\n----------------- log all the children and tagName or textContent -----------------");

function logAllChildrenWithTagNameOrTextContent(parent) {
    const nodeTypes = {1: "element", 3: "text   ", 8: "comment"};
    console.log(`childeren:`)
    for (let i = 0; i < parent.childNodes.length; ++i) {
        const child = parent.childNodes[i];
        if (child.nodeType == 1) //element
            console.log(`  ${i}: ${child.tagName}`)
        else if (child.nodeType == 3) //text
            console.log(`  ${i}: textContent=${child.textContent}`)
    }
}

console.log(`\n----- children of document.body`)
logAllChildrenWithTagNameOrTextContent(document.body);
console.log(`\n----- children of document.body.childNodes[5]`)
logAllChildrenWithTagNameOrTextContent(document.body.childNodes[5]);
console.log(`\n----- children of document.body.childNodes[7]`)
logAllChildrenWithTagNameOrTextContent(document.body.childNodes[7]);
console.log(`\n----- children of document.body.childNodes[7].childNodes[1]`)
logAllChildrenWithTagNameOrTextContent(document.body.childNodes[7].childNodes[1]);


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
console.log(`\n----- children of document.body.childNodes[5]`)
logChildTree(document.body.childNodes[5]);
console.log(`\n----- children of document.body.childNodes[7]`)
logChildTree(document.body.childNodes[7]);
console.log(`\n----- children of document.body.childNodes[7].childNodes[1]`)
logChildTree(document.body.childNodes[7].childNodes[1]);

