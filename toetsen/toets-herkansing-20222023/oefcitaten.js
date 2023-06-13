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
const quote = document.getElementById("quote");
const footer = document.getElementById("footer");
const who = document.getElementById("who");
const next = document.getElementById("next");
let shown = [...CITATEN];
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
    // filter het geselecteerde citaat uit de array shown
    shown = shown.filter((citaat, index) => index !== selectedIndex)
    //als alle 10 citaten getoond zijn, dan is shown leeg en moet je die terug vullen
    if (shown.length === 0) {
        shown = [...CITATEN]
    }
    who.style.display = "block";
    next.style.display = "none";
}
showNr();
