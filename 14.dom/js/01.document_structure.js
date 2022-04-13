const rootElement = document.documentElement;
console.log(`rootElement.nodeType: ${rootElement.nodeType}`);

const bodyElement = document.body;
console.log(`bodyElement.nodeType: ${bodyElement.nodeType}`);

console.log(`childeren:`)
for (let i=0; i<document.body.childNodes.length; ++i) {
    const child = document.body.childNodes[i];
    console.log(`  child ${i}: type=${child.nodeType}, textContent=${child.textContent}`)
}

