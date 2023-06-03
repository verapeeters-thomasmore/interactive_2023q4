const CITATEN = [
    {
        text: 'De dieren lijden en hun gejammer vervult de lucht. De bossen vallen ten prooi aan vernietiging. De bergen worden opengescheurd voor de metalen die in hun aderen groeien. En de mens looft en prijst degenen die aan de natuur en aan de mensheid de grootste schade berokkenen.',
        author: 'Leonardo da Vinci',
        info: 'Italiaans schilder, ingenieur en musicus',
        life: 'Leefde van: 1452-1519'
    },
    {
        text: 'Logica brengt je van A naar B. Verbeelding brengt je overal.',
        author: 'Albert Einstein',
        info: 'Duits -Amerikaans natuurkundige',
        life: 'Leefde van: 1879 - 1955'
    },
    {
        text: 'Geef me werk wat bij me past en ik hoef nooit meer te werken.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
    {
        text: 'Mensen eisen vrijheid van meningsuiting als compensatie voor de vrijheid van denken waar ze zelden gebruik van maken.',
        author: 'Sören Kierkegaard',
        info: 'Deens filosoof',
        life: 'Leefde van: 1813-1855'
    },
    {
        text: 'Een uur zitten bij een aardig meisje vliegt voorbij als een minuut, maar een minuut op een brandende kachel lijkt wel een uur. Dat is relativiteit.',
        author: 'Albert Einstein',
        info: 'Duits - Amerikaans natuurkundige',
        life: 'Leefde van: 1879-1955'
    },
    {
        text: 'De moeilijkheid met de wereld is dat de dommen zelfverzekerd zijn en de verstandigen met twijfel vervuld.',
        author: 'Bertrand Russell',
        info: 'Engels filosoof, wiskundige en Nobelprijswinnaar literatuur (1950)',
        life: 'Leefde van: 1872-1970'
    },
    {
        text: 'De mens is alleen datgene wat hij van zichzelf maakt.',
        author: 'Jean-Paul Sartre',
        info: 'Frans schrijver, filosoof en Nobelprijswinnaar literatuur (1964)',
        life: 'Leefde van: 1905-1980'
    },
    {
        text: 'Geld is als mest; het is alleen goed als het wordt verspreid.',
        author: 'Francis Bacon',
        info: 'Engels filosoof en staatsman',
        life: 'Leefde van: 1561-1626'
    },
    {
        text: 'Bankoverval: een initiatief van amateurs. De echte professionals richten een bank op.',
        author: 'Bertolt Brecht',
        info: 'Duits - Oostenrijks schrijver',
        life: 'Leefde van: 1898-1956'
    },
    {
        text: 'Wie niet beweegt, bemerkt zijn ketens niet.',
        author: 'Rosa Luxemburg',
        info: 'Duits politica en filosofe',
        life: 'Leefde van: 1871-1919'
    },
    {
        text: 'Wie lacht, heeft het vreselijke nieuws nog niet gehoord.',
        author: 'Bertolt Brecht',
        info: 'Duits - Oostenrijks schrijver',
        life: 'Leefde van: 1898-1956'
    },
    {
        text: 'Een mens heeft twee oren en één mond om twee keer zoveel te luisteren dan te praten.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
    {
        text: 'Hoe wilt u de dood begrijpen? U begrijpt het leven nog niet eens.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
    {
        text: 'Als we wisten wat we deden, heette het geen onderzoek.',
        author: 'Albert Einstein',
        info: 'Duits - Amerikaans natuurkundige',
        life: 'Leefde van: 1879-1955'
    },
    {
        text: 'Wanneer de rijken oorlog voeren, sneuvelen de armen.',
        author: 'Jean-Paul Sartre',
        info: 'Frans schrijver, filosoof en Nobelprijswinnaar literatuur (1964)',
        life: 'Leefde van: 1905-1980'
    },
    {
        text: 'Wie A zegt, hoeft geen B te zeggen. Hij kan ook toegeven dat A fout was.',
        author: 'Bertolt Brecht',
        info: 'Duits - Oostenrijks schrijver',
        life: 'Leefde van: 1898-1956'
    },
    {
        text: 'Een verstandige vraag is de helft van wijsheid.',
        author: 'Francis Bacon',
        info: 'Engels filosoof en staatsman',
        life: 'Leefde van: 1561-1626'
    },
    {
        text: 'De stilte is een vriend die je nooit verraadt.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
    {
        text: 'Dat is het leven en dat is hoe je het moet nemen, moedig, recht door zee en glimlachend - ondanks alles.',
        author: 'Rosa Luxemburg',
        info: 'Duits politica en filosofe',
        life: 'Leefde van: 1871-1919'
    },
    {
        text: 'Er zijn slechts twee manieren om je leven te leven: doen alsof niets een wonder is, en doen alsof alles een wonder is.',
        author: 'Albert Einstein',
        info: 'Duits - Amerikaans natuurkundige',
        life: 'Leefde van: 1879-1955'
    },

];
const maxLengthCitaten = 300;
const quote = document.getElementById("quote");
const otherquotes = document.getElementById("otherquotes");
const footer = document.getElementById("footer");
const who = document.getElementById("who");
const next = document.getElementById("next");
let shown = getCitaten(maxLengthCitaten);
let selectedIndex;
let selectedCitaat;
const addAuthor = function () {
    // <footer>
    //     <p>
    //         --
    //
    //         <b>
    //             janneke
    //         </b>
    //         <br/>
    //         info-blabla
    //         <br/>
    //         <i>
    //             lifeblabla
    //         </i>
    //     </p>
    // </footer>

    const infoNewEl = document.createElement("p");
    infoNewEl.appendChild(document.createTextNode("--"));
    const bEl = document.createElement("b");
    bEl.appendChild(document.createTextNode(selectedCitaat.author));
    infoNewEl.appendChild(bEl);
    infoNewEl.appendChild(document.createElement("br"));
    infoNewEl.appendChild(document.createTextNode(selectedCitaat.info));
    infoNewEl.appendChild(document.createElement("br"));
    const iEl = document.createElement("i");
    iEl.appendChild(document.createTextNode(selectedCitaat.life));
    infoNewEl.appendChild(iEl);
    footer.appendChild(infoNewEl);
    footer.style.display = "block";
    who.style.display = "none";
    next.style.display = "block";
};

const more = function () {
    quote.innerHTML = "";
    footer.innerHTML = "";
    footer.style.display = "none";
    showNr();
}

const showNr = function () {
    //tussen 0 en 1, bv. 0.54 * 10 = 5.4
    //stel het getal 3 gekozen
    selectedIndex = Math.floor((shown.length) * Math.random())
    selectedCitaat = shown[selectedIndex]
    quote.appendChild(document.createTextNode(selectedCitaat.text));
    otherquotes.innerHTML = "";
    const enrichedSelectedCitaat = addCitaten(selectedCitaat);
    if (enrichedSelectedCitaat.other.length) {
        const titleEl = document.createElement("p");
        const strongEl = document.createElement("strong");
        strongEl.appendChild(document.createTextNode("citaten van dezelfde auteur"))
        titleEl.appendChild(strongEl);
        otherquotes.appendChild(titleEl);
        otherquotes.append(...(enrichedSelectedCitaat.other.map(t => {
            const otherQuoteEl = document.createElement("p");
            otherQuoteEl.append(t)
            return otherQuoteEl;
        })));
    }
    // filter het geselecteerde citaat uit de array shown
    shown = shown.filter((citaat, index) => index !== selectedIndex)
    //als alle 10 citaten getoond zijn, dan is shown leeg en moet je die terug vullen
    if (shown.length === 0) {
        shown = getCitaten(maxLengthCitaten)
    }
    who.style.display = "block";
    next.style.display = "none";
}

function getCitaten(maxLength) {
    console.log(`getCitaten original parameter: ${maxLength}`);
    if (!maxLength || !Number.isInteger(maxLength) || maxLength < 50) maxLength = 50;
    console.log(`getCitaten aangepaste parameter: ${maxLength}`);
    return CITATEN.filter(c => c.text.length <= maxLength)
}

function addCitaten(citaat) {
    return {
        ...citaat,
        other: CITATEN.filter(c => c.author === citaat.author && c.text !== citaat.text).map(c => c.text)
    };

}

console.log("start addCitaten")

console.log("showNr")
showNr();



console.log("================================")
console.log("50-50 - 3 items", getCitaten(50));
console.log("60-60 - 8 items", getCitaten(60));
console.log("90-90 - 14 items", getCitaten(90));
console.log("300-300 - 20 items", getCitaten(300));
console.log("undefined-50 - 3 items", getCitaten());
console.log("true-50 - 3 items", getCitaten(true));
console.log("66.6-50 - 3 items", getCitaten(66.6));
console.log("\"60\"-50 - 3 items", getCitaten("60"));
console.log("20-50 - 3 items", getCitaten(20));
console.log("0-50 - 3 items", getCitaten(0));
console.log("================================")
console.log(addCitaten(CITATEN[1])); //3 citaten
console.log(addCitaten(CITATEN[3])); //0 citaten

