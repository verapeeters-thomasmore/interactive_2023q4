import products from "./products.json" with { type: "json" };

const productList = document.getElementById("products");
const searchInput = document.getElementById("search");
const togglePrices = document.getElementById("toggle-prices");
const sortButton = document.getElementById("sort");

// STATE
let priceExclVat = false;
let sortedBy = "title";

renderProducts(products);

function renderProduct(product) {
	return `
	<div class="col-md-4">
		<div class="card mb-4">
			<img src="${product.image.url}" alt="${product.image.alt}" class="card-img-top" />
		
			<div class="card-body">
				<h5 class="card-title">${product.name}</h5>
				<h6>${product.price.toFixed(2)}</h6>
				<p class="card-text text-truncate">${product.description}</p>
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
		.sort((a, b) => {
			if (sortedBy === "title") {
				return a.name.localeCompare(b.name);
			}

			return a.price - b.price;
		})
		.filter((product) => {
			const search = searchInput.value.toLowerCase();
			return product.name.toLowerCase().includes(search);
		})
		.map(renderProduct)
		.join("");
}

searchInput.addEventListener("input", () => renderProducts(products));

sortButton.addEventListener("click", () => {
	sortedBy = sortedBy === "title" ? "price" : "title";

	if (sortedBy === "title") {
		sortButton.textContent = "Sorteer op prijs";
	} else {
		sortButton.textContent = "Sorteer op titel";
	}

	renderProducts(products);
});

togglePrices.addEventListener("click", () => {
	priceExclVat = !priceExclVat;

	if (priceExclVat) {
		togglePrices.textContent = "Toon prijzen inclusief btw";
	} else {
		togglePrices.textContent = "Toon prijzen exclusief btw";
	}

	renderProducts(products);
});

// Oefening 1: Maak een functie renderProducts die de renderProduct functie gebruikt om de producten te tonen in de productList
// Oefening 2: Als ik op de knop exclusief btw klik, toon ik de prijzen exclusief btw
// Oefening 3: Als ik op de knop Sorteer op prijs klik, sorteer ik de producten van laag naar hoog, en verander de tekst van de knop naar Sorteer op titel
// Oefening 4: Als ik op de knop Sorteer op titel klik, sorteer ik de producten van A tot Z, en verander de tekst van de knop naar Sorteer op prijs
// Oefening 5: Als ik de zoekbalk gebruik, filter ik de producten op de naam van het product en toon ik enkel de producten die de zoekterm bevatten
