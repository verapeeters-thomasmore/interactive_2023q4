console.log("------------------------ array of objects  ---------------------");
const products = [
  { name: "appel", price: 5, stock: false },
  { name: "kiwi", price: 25, stock: true },
  { name: "banaan", price: 7, stock: true },
  { name: "aardbei", price: 101, stock: true },
  { name: "framboos", price: 34, stock: false },
];

/**
 * Sort products by price, name and stock
 */
const productsSortedByPrice = products.toSorted((a, b) => a.price - b.price);
console.log("Products sorted by price: ", productsSortedByPrice);

const productsSortedByName = products.toSorted((a, b) => a.name.localeCompare(b.name));
console.log("Products sorted by name: ", productsSortedByName);

const productsSortedByStock = products.toSorted((a, b) => a.stock - b.stock);
console.log("Products sorted by stock: ", productsSortedByStock);

/**
 * Filter products with a price higher than 100
 * Filter products with a price lower or equal to 100
 */
const expensiveProducts = products.filter((product) => product.price > 100);
console.log("Expensive products: ", expensiveProducts);

const cheapProducts = products.filter((product) => product.price <= 100);
console.log("Cheap products: ", cheapProducts);

/**
 * Make product names uppercase
 */
const productNames = products.map((product) => product.name);
console.log("Product names: ", productNames);

const productNamesUppercase = productNames.map((name) => name.toUpperCase());
console.log("Product names uppercase: ", productNamesUppercase);

/**
 * Filter products in and out of stock
 */
const productsInStock = products.filter((product) => product.stock);
console.log("Products in stock: ", productsInStock);

const productsOutOfStock = products.filter((product) => !product.stock);
console.log("Products out of stock: ", productsOutOfStock);
