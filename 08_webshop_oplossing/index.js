const productList = document.getElementById("products");
const searchInput = document.getElementById("search-input");
const togglePriceButton = document.getElementById("toggle-price-button");
const sortButton = document.getElementById("sort-button");
const shoppingCart = document.getElementById("shopping-cart");
const shoppingCartCount = document.getElementById("cart-count");

const PRODUCTS = [
	{
		id: 1,
		name: "Sony PlayStation 5",
		price: 499.99,
		description:
			"Next-generation gaming console for immersive gaming experiences",
		category: "Electronics",
		brand: "Sony",
		color: "White",
		image: {
			url: "https://picsum.photos/id/1/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		price: 799.99,
		description:
			"Powerful smartphone with a stunning display and advanced camera",
		category: "Electronics",
		brand: "Samsung",
		color: "Phantom Black",
		image: {
			url: "https://picsum.photos/id/2/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 3,
		name: "Adidas Ultraboost",
		price: 179.99,
		description: "Comfortable and stylish running shoes for athletes",
		category: "Sports",
		brand: "Adidas",
		color: "Core Black",
		image: {
			url: "https://picsum.photos/id/3/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 4,
		name: "Amazon Echo Dot",
		price: 49.99,
		description:
			"Smart speaker with Alexa voice assistant for hands-free control",
		category: "Electronics",
		brand: "Amazon",
		color: "Charcoal",
		image: {
			url: "https://picsum.photos/id/4/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 5,
		name: "Canon EOS Rebel T7i",
		price: 699.99,
		description:
			"High-quality DSLR camera for capturing stunning photos and videos",
		category: "Electronics",
		brand: "Canon",
		color: "Black",
		image: {
			url: "https://picsum.photos/id/5/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 6,
		name: "Calvin Klein Underwear",
		price: 29.99,
		description: "Comfortable and stylish underwear for everyday wear",
		category: "Clothing",
		brand: "Calvin Klein",
		color: "Black",
		image: {
			url: "https://picsum.photos/id/6/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 7,
		name: "KitchenAid Stand Mixer",
		price: 299.99,
		description: "Versatile and powerful stand mixer for baking and cooking",
		category: "Home & Kitchen",
		brand: "KitchenAid",
		color: "Empire Red",
		image: {
			url: "https://picsum.photos/id/7/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 8,
		name: "Samsung 4K Smart TV",
		price: 899.99,
		description:
			"Ultra-high definition smart TV for an immersive entertainment experience",
		category: "Electronics",
		brand: "Samsung",
		color: "Titan Gray",
		image: {
			url: "https://picsum.photos/id/8/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 9,
		name: "Dyson V11 Vacuum Cleaner",
		price: 599.99,
		description: "Powerful cordless vacuum cleaner for efficient cleaning",
		category: "Home & Kitchen",
		brand: "Dyson",
		color: "Nickel/Blue",
		image: {
			url: "https://picsum.photos/id/9/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
	{
		id: 10,
		name: "Oakley Sunglasses",
		price: 149.99,
		description: "High-quality sunglasses for UV protection and style",
		category: "Fashion",
		brand: "Oakley",
		color: "Black",
		image: {
			url: "https://picsum.photos/id/10/1000/500",
			alt: "Sony PlayStation 5",
		},
	},
];

// STATE
let priceExclVat = false;
let sortedBy = "title";
let cart = [];

renderProducts(PRODUCTS);

function renderProduct(product) {
	const alreadyInCart = cart.includes(product.id);

	return `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${product.image.url}" alt="${product.image.alt}" class="card-img-top" />
      
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h6>${product.price.toFixed(2)}</h6>
          <p class="card-text text-truncate">${product.description}</p>
          <button 
            onclick="addToShoppingCart(${product.id})" 
            class="btn ${alreadyInCart ? "btn-danger" : "btn-primary"}">
            ${alreadyInCart? "Verwijder uit winkelmand" : "Voeg toe aan winkelmand" }
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(products) {
	productList.innerHTML = products
		.map((product) => ({
			...product,
			price: product.price / (priceExclVat ? 1.21 : 1),
		}))
		.sort((a, b) => sortedBy === "title" ? a.name.localeCompare(b.name) : a.price - b.price)
		.filter((product) => {
			const search = searchInput.value.toLowerCase();
			return product.name.toLowerCase().includes(search);
		})
		.map(renderProduct)
		.join("");
}

function handleSearch() {
	renderProducts(PRODUCTS);
}

function handleSort() {
	sortedBy = sortedBy === "title" ? "price" : "title";

	sortButton.textContent =
		sortedBy === "title" ? "Sorteer op prijs" : "Sorteer op titel";

	renderProducts(PRODUCTS);
}

function handleTogglePrice() {
	priceExclVat = !priceExclVat;

	togglePriceButton.textContent = priceExclVat
		? "Toon prijzen inclusief btw"
		: "Toon prijzen exclusief btw";

	renderProducts(PRODUCTS);
}

function addToShoppingCart(productId) {
	const alreadyInCart = cart.includes(productId);
	cart = alreadyInCart
		? cart.filter((id) => id !== productId)
		: [...cart, productId];
	shoppingCartCount.textContent = cart.length;
	renderProducts(PRODUCTS);
}

// Oefening 1: Maak een functie renderProducts die de renderProduct functie gebruikt om de producten te tonen in de productList
// Oefening 2: Als ik op de knop exclusief btw klik, toon ik de prijzen exclusief btw
// Oefening 3: Als ik op de knop Sorteer op prijs klik, sorteer ik de producten van laag naar hoog, en verander de tekst van de knop naar Sorteer op titel
// Oefening 4: Als ik op de knop Sorteer op titel klik, sorteer ik de producten van A tot Z, en verander de tekst van de knop naar Sorteer op prijs
// Oefening 5: Als ik de zoekbalk gebruik, filter ik de producten op de naam van het product en toon ik enkel de producten die de zoekterm bevatten
// Oefening 6: Voeg een knop toe aan elk product om het product toe te voegen aan de winkelmand en als ik op de knop klik voeg ik het product toe aan de winkelmand
// Oefening 7: Zorg ervoor dat wannneer ik op de knop Voeg toe aan winkelmand klik, de knop verandert naar Verwijder uit winkelmand en de kleur van de knop verandert naar rood
// Oefening 8: Zorg ervoor dat ik een product maar 1 keer kan toevoegen aan de winkelmand, als ik op de knop Voeg toe aan winkelmand klik terwijl het product al in de winkelmand zit, verwijder ik het product uit de winkelmand
