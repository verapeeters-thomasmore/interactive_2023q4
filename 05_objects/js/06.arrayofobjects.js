console.log("------------------------ array of objects  ---------------------");
const availableProducts = [
    {name: "appel", amount: 5},
    {name: "kiwi", amount: 25},
    {name: "banaan", amount: 7},
    {name: "aardbei", amount: 101},
    {name: "framboos", amount: 34}
];

availableProducts.forEach((p) => console.log(`${p.name}: ${p.amount}`));

console.log("------------------------ filter: amount>=10  ---------------------");
const filteredProducts = availableProducts.filter((pl) => pl.amount >= 10);
filteredProducts.forEach((p) => console.log(`${p.name}: ${p.amount}`));

console.log("------------------------ sorted by amount  ---------------------");
//sort functie: return een negatieve waarde als linker el <= rechter el
const sortedByAmount = availableProducts.sort((pl, pr) => pl.amount <= pr.amount && -1);
sortedByAmount.forEach((p) => console.log(`${p.name}: ${p.amount}`));

console.log("------------------------ sorted by name  ---------------------");
const sortedByName = availableProducts.sort((pl, pr) => pl.name <= pr.name && -1);
sortedByName.forEach((p) => console.log(`${p.name}: ${p.amount}`));


