const listProducts = [
        {brand: "Nutella", price: 4.71},
        {brand: "Boni", price: 2.29},
        {brand: "cote d'or", price: 5.91},
        {brand: "cote d'or light", price: 5.91},
        {brand: "kwatta", price: 3.15}
];
console.log(listProducts);

const arrayOfPrices = listProducts.map(p => p.price);
console.log(arrayOfPrices);
const minPrice = Math.min(...arrayOfPrices);
console.log(minPrice);
const maxPrice = Math.max(...arrayOfPrices);
console.log(maxPrice);

const filteredProducts = listProducts.filter(p => p.price > minPrice && p.price < maxPrice);
console.log(filteredProducts);

filteredProducts.forEach(p => console.log(`${p.brand}: ${p.price}`))

const a = [5, 2, 3];
a.sort((a, b) => a < b ? -1 : 1);
console.log(a);

const sorted = filteredProducts.sort((p1, p2) => p1.price < p2.price ? -1 : 1);
console.log(sorted);

listProducts.map(p => {
        return {...p, price: p.price * 0.15}
})

