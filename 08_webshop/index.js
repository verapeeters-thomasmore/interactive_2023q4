const productList = document.getElementById("products");
const searchInput = document.getElementById("search");
const togglePrices = document.getElementById("toggle-prices");
const sortButton = document.getElementById("sort");

renderProducts(products);

/**
 * Deze functie toont de producten in de productList
 */
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

// Oefening 1: Maak een functie renderProducts die de renderProduct functie gebruikt om de producten te tonen in de productList
// Oefening 2: Als ik op de knop exclusief btw klik, toon ik de prijzen exclusief btw
// Oefening 3: Als ik op de knop Sorteer op prijs klik, sorteer ik de producten van laag naar hoog, en verander de tekst van de knop naar Sorteer op titel
// Oefening 4: Als ik op de knop Sorteer op titel klik, sorteer ik de producten van A tot Z, en verander de tekst van de knop naar Sorteer op prijs
// Oefening 5: Als ik de zoekbalk gebruik, filter ik de producten op de naam van het product en toon ik enkel de producten die de zoekterm bevatten
// Oefening 6: Voeg een knop toe aan elk product om het product toe te voegen aan de winkelmand en als ik op de knop klik voeg ik het product toe aan de winkelmand
// Oefening 7: Zorg ervoor dat wannneer ik op de knop Voeg toe aan winkelmand klik, de knop verandert naar Verwijder uit winkelmand en de kleur van de knop verandert naar rood
// Oefening 8: Zorg ervoor dat ik een product maar 1 keer kan toevoegen aan de winkelmand, als ik op de knop Voeg toe aan winkelmand klik terwijl het product al in de winkelmand zit, verwijder ik het product uit de winkelmand
