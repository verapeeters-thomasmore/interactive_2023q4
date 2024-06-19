const QUOTES = [
  {
      id: 0,
      text: 'De dieren lijden en hun gejammer vervult de lucht. De bossen vallen ten prooi aan vernietiging. De bergen worden opengescheurd voor de metalen die in hun aderen groeien. En de mens looft en prijst degenen die aan de natuur en aan de mensheid de grootste schade berokkenen.',
      author: 'Leonardo da Vinci',
      info: 'Italiaans schilder, ingenieur en musicus',
      life: 'Leefde van: 1452-1519'
  },
  {
      id: 1,
      text: 'Logica brengt je van A naar B. Verbeelding brengt je overal.',
      author: 'Albert Einstein',
      info: 'Duits -Amerikaans natuurkundige',
      life: '1879 - 1955'
  },
  {
      id: 2,
      text: 'Geef me werk wat bij me past en ik hoef nooit meer te werken.',
      author: 'Confucius',
      info: 'Chinees filosoof',
      life: '551 v.C. - 479 v.C.'
  },
  {
      id: 3,
      text: 'Mensen eisen vrijheid van meningsuiting als compensatie voor de vrijheid van denken waar ze zelden gebruik van maken.',
      author: 'Sören Kierkegaard',
      info: 'Deens filosoof',
      life: '1813-1855'
  },
  {
      id: 4,
      text: 'Een uur zitten bij een aardig meisje vliegt voorbij als een minuut, maar een minuut op een brandende kachel lijkt wel een uur. Dat is relativiteit.',
      author: 'Albert Einstein',
      info: 'Duits - Amerikaans natuurkundige',
      life: '1879-1955'
  },
  {
      id: 5,
      text: 'De moeilijkheid met de wereld is dat de dommen zelfverzekerd zijn en de verstandigen met twijfel vervuld.',
      author: 'Bertrand Russell',
      info: 'Engels filosoof, wiskundige en Nobelprijswinnaar literatuur (1950)',
      life: '1872-1970'
  },
  {
      id: 6,
      text: 'De mens is alleen datgene wat hij van zichzelf maakt.',
      author: 'Jean-Paul Sartre',
      info: 'Frans schrijver, filosoof en Nobelprijswinnaar literatuur (1964)',
      life: '1905-1980'
  },
  {
      id: 7,
      text: 'Geld is als mest; het is alleen goed als het wordt verspreid.',
      author: 'Francis Bacon',
      info: 'Engels filosoof en staatsman',
      life: '1561-1626'
  },
  {
      id: 8,
      text: 'Bankoverval: een initiatief van amateurs. De echte professionals richten een bank op.',
      author: 'Bertolt Brecht',
      info: 'Duits - Oostenrijks schrijver',
      life: '1898-1956'
  },
  {
      id: 9,
      text: 'Wie niet beweegt, bemerkt zijn ketens niet.',
      author: 'Rosa Luxemburg',
      info: 'Duits politica en filosofe',
      life: '1871-1919'
  }
];

const quoteEl = document.getElementById("quote");

const authorButtonEl = document.getElementById("authorButton");
const nextQuoteButtonEl = document.getElementById("nextQuoteButton");

const countIndicatorEl = document.getElementById("countIndicator");

const leftQuotesEl = document.getElementById("leftQuotes");
const leftQuotesButtonEl = document.getElementById("leftQuotesButton");

//state: changes on user action
let idsOfShownQuotes = [];
let showLeftQuotesOpen = false;


function showAuthor() {
    const {author, info, life} = QUOTES.find(q => q.id === idsOfShownQuotes[0]);
    quoteEl.innerHTML += `<div class="card my-2 p-2 ps-5">
                              <h6>${author}</h6>
                              <div>${info}</div>
                              <div>Leefde van: ${life}</div>
                          </div>`;
    nextQuoteButtonEl.hidden = false;
    authorButtonEl.hidden = true;
}

function renderQuote(quote) {
  return `<div class="card my-2 p-2"><h5>${quote.text}</h5></div>`;
}

function showOneRandomQuote() {
    if (idsOfShownQuotes.length === QUOTES.length) {
      quoteEl.innerHTML += 'Er zijn geen citaten meer over.';
      nextQuoteButtonEl.hidden = true;
      authorButtonEl.hidden = true;
    }

    const availableQuotes = QUOTES.filter(q => !idsOfShownQuotes.includes(q.id));
    const randomCitaatIndexInAvailableQuotes = Math.floor(Math.random() * availableQuotes.length);
    const nextQuote = availableQuotes[randomCitaatIndexInAvailableQuotes];
    idsOfShownQuotes = [nextQuote.id, ...idsOfShownQuotes];


    quoteEl.innerHTML += renderQuote(QUOTES.find(q => q.id === idsOfShownQuotes[0]))
    countIndicatorEl.innerHTML = `Er zijn nog ${QUOTES.length - idsOfShownQuotes.length} over.`;
    renderLeftQuotes();

    nextQuoteButtonEl.hidden = true;
    authorButtonEl.hidden = false;

}

function renderLeftQuotes() {
  const availableQuotes = QUOTES.filter(q => !idsOfShownQuotes.includes(q.id));
  leftQuotesEl.innerHTML = showLeftQuotesOpen ? availableQuotes.map(q => renderQuote(q)).join('') : ''; 
  leftQuotesButtonEl.innerText = showLeftQuotesOpen ? 'Verberg overgebleven citaten' : 'Toon overgebleven citaten';
}

function showLeftQuotes() {
  showLeftQuotesOpen = !showLeftQuotesOpen;
  renderLeftQuotes();
}

showOneRandomQuote();
