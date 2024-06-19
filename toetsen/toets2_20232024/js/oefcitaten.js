const QUOTES = [
  {
    id: 0,
    text: "De dieren lijden en hun gejammer vervult de lucht. De bossen vallen ten prooi aan vernietiging. De bergen worden opengescheurd voor de metalen die in hun aderen groeien. En de mens looft en prijst degenen die aan de natuur en aan de mensheid de grootste schade berokkenen.",
    author: "Leonardo da Vinci",
    info: "Italiaans schilder, ingenieur en musicus",
    life: "Leefde van: 1452-1519",
  },
  {
    id: 1,
    text: "Logica brengt je van A naar B. Verbeelding brengt je overal.",
    author: "Albert Einstein",
    info: "Duits -Amerikaans natuurkundige",
    life: "1879 - 1955",
  },
  {
    id: 2,
    text: "Geef me werk wat bij me past en ik hoef nooit meer te werken.",
    author: "Confucius",
    info: "Chinees filosoof",
    life: "551 v.C. - 479 v.C.",
  },
  {
    id: 3,
    text: "Mensen eisen vrijheid van meningsuiting als compensatie voor de vrijheid van denken waar ze zelden gebruik van maken.",
    author: "Sören Kierkegaard",
    info: "Deens filosoof",
    life: "1813-1855",
  },
  {
    id: 4,
    text: "Een uur zitten bij een aardig meisje vliegt voorbij als een minuut, maar een minuut op een brandende kachel lijkt wel een uur. Dat is relativiteit.",
    author: "Albert Einstein",
    info: "Duits - Amerikaans natuurkundige",
    life: "1879-1955",
  },
  {
    id: 5,
    text: "De moeilijkheid met de wereld is dat de dommen zelfverzekerd zijn en de verstandigen met twijfel vervuld.",
    author: "Bertrand Russell",
    info: "Engels filosoof, wiskundige en Nobelprijswinnaar literatuur (1950)",
    life: "1872-1970",
  },
  {
    id: 6,
    text: "De mens is alleen datgene wat hij van zichzelf maakt.",
    author: "Jean-Paul Sartre",
    info: "Frans schrijver, filosoof en Nobelprijswinnaar literatuur (1964)",
    life: "1905-1980",
  },
  {
    id: 7,
    text: "Geld is als mest; het is alleen goed als het wordt verspreid.",
    author: "Francis Bacon",
    info: "Engels filosoof en staatsman",
    life: "1561-1626",
  },
  {
    id: 8,
    text: "Bankoverval: een initiatief van amateurs. De echte professionals richten een bank op.",
    author: "Bertolt Brecht",
    info: "Duits - Oostenrijks schrijver",
    life: "1898-1956",
  },
  {
    id: 9,
    text: "Wie niet beweegt, bemerkt zijn ketens niet.",
    author: "Rosa Luxemburg",
    info: "Duits politica en filosofe",
    life: "1871-1919",
  },
];

const quoteEl = document.getElementById("quote");
const authorButtonEl = document.getElementById("authorButton");
const favoriteCountEl = document.getElementById("favoriteCount");
const searchQuoteInput = document.getElementById("searchQuoteInput");

//state: changes on user action
let favoriteQuotes = [];
let showAuthorInfo = false;
let showFavorites = false;

function addFavorite(id) {
  favoriteQuotes = favoriteQuotes.includes(id)
    ? favoriteQuotes.filter((quoteId) => quoteId !== id)
    : [...favoriteQuotes, id];

  favoriteCountEl.textContent = favoriteQuotes.length;
  renderQuotes();
}

function searchQuote() {
  renderQuotes();
}

function showAuthor() {
  showAuthorInfo = !showAuthorInfo;
  authorButtonEl.textContent = showAuthorInfo ? "Hide author" : "Show author";
  renderQuotes();
}

function renderQuote({ id, text, author }) {
  const isFavorite = favoriteQuotes.includes(id);

  return `
        <div class="card my-2">
			<div class="card-body">
				 <h5>${text}</h5>
				${showAuthorInfo ? `<h6>${author}</h6>` : ""}
				
				<button 
					class="btn ${isFavorite ? "btn-danger" : "btn-outline-primary"}" 
					onclick="addFavorite(${id})"
				>
					${isFavorite ? "Remove from favorites" : "Add to favorites"}
				</button>
			</div>
        </div>`;
}

function renderQuotes() {
  quoteEl.innerHTML = QUOTES.filter(({ text }) => text.includes(searchQuoteInput.value))
    .map(renderQuote)
    .join("");
}

renderQuotes();

// stap 1: pas de functie showOneRandomQuote aan naar renderQuotes zodat het een lijst van alle quotes toont in plaats van 1 random quote
// stap 2: wijzig de functie showAuthor zodat het de author info op alle quotes toont, verander de knop tekst naar "Hide author" als de author info getoond wordt en "Show author" als het verborgen wordt
// stap 3: filter de quotes op basis van de input van de gebruiker
// stap 4: voeg een knop toe aan elke quote om de quote toe te voegen aan favorieten en verander de knop tekst naar "Remove from favorites" als de quote al in favorieten zit
// stap 5: geeft het aantal favorieten weer bovenaan de pagina in de favoriteCountEl
