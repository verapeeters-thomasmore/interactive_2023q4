const printerList = [
    {"printer": "printer1", "cyan": 23, "magenta": 12, "yellow": 10},
    {"printer": "printer2", "cyan": 432, "magenta": 543, "yellow": 777},
    {"printer": "printer3", "cyan": 700, "magenta": 700, "yellow": 0}];


console.log("--- with object destructuring in a variable");
printerList.forEach(p => {
        const {printer, ...pagesForColors} = p;
        console.log(`${printer} => ${Math.min(...Object.values(pagesForColors))}`);
    }
)

console.log("--- with object destructuring in parameter");

function numberOfPages({printer, ...pagesForColors}) {
    return `${printer} => ${Math.min(...Object.values(pagesForColors))}`;
}

printerList.forEach(p => console.log(numberOfPages(p)));


console.log("--- with object destructuring in 1 statement");
printerList.forEach(({
                         printer,
                         ...pagesForColors
                     }) =>
    console.log(`${printer} => ${Math.min(...Object.values(pagesForColors))}`)
);


console.log("--- which color is min?");
function findMinColor(printerObject) {
    const {printer, ...pagesForColors} = printerObject;
    return Object.entries(pagesForColors).reduce((acc, col) => acc[1] < col[1] ? acc : col);
}

function printMinColor(printerObject) {
    const minColor = findMinColor(printerObject);
    console.log(`${printerObject.printer}: only ${minColor[1]} pages left for ${minColor[0]}`);
}

console.log(printerList);
console.log(findMinColor(printerList[0]));
printMinColor(printerList[0]);

console.log("--- which color is min voor alle printers?");
printerList.forEach(p => printMinColor(p));


console.log("--- which color is min? - SHORTER");
function printMinColorShort({printer, ...pagesForColors}) {
    const [color, amountOfPages] = Object.entries(pagesForColors).reduce((acc, col) => acc[1] < col[1] ? acc : col);
    console.log(`${printer}: only ${amountOfPages} pages left for ${color}`);
}

printerList.forEach(p => printMinColorShort(p));

