
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

