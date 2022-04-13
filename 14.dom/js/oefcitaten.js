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
    }
];

const make = function (type, ...children) {
    const node = document.createElement(type);
    for (let child of children) {
        if (typeof child != "string") {
            node.appendChild(child);
        } else {
            node.appendChild(document.createTextNode(child));
        }
    }
    return node;
};


const showAuthor = function () {
    let quoteElt = document.getElementById("quote");
    quoteElt.appendChild(
        make("footer",
            make("br"),
            "--",
            make("strong", shownCitaten[0].author),
            make("br"),
            shownCitaten[0].info,
            make("br"),
            make("em", shownCitaten[0].life)
        )
    );
    document.getElementById("nextCitaat").className = "visible";
    document.getElementById("author").className = "invisible";
};

function getRandomCitaatIndex() {
    return Math.floor(Math.random() * availableCitaten.length);
}

const showNewCitaat = function () {
    if (!availableCitaten.length) availableCitaten = CITATEN;
    const index = getRandomCitaatIndex();
    shownCitaten = [availableCitaten[index], ...shownCitaten];
    availableCitaten.splice(index, 1);

    const quoteElt = document.getElementById("quote");
    quoteElt.appendChild(make("div", make("hr"), make("h2", "citaat:"), shownCitaten[0].text));
    document.getElementById("nextCitaat").className = "invisible";
    document.getElementById("author").className = "visible";
}


let availableCitaten = [];
let shownCitaten = [];
showNewCitaat();


