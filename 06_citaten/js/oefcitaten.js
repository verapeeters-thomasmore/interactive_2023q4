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
        life: '1879 - 1955'
    },
    {
        text: 'Geef me werk wat bij me past en ik hoef nooit meer te werken.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: '551 v.C. - 479 v.C.'
    },
    {
        text: 'Mensen eisen vrijheid van meningsuiting als compensatie voor de vrijheid van denken waar ze zelden gebruik van maken.',
        author: 'Sören Kierkegaard',
        info: 'Deens filosoof',
        life: '1813-1855'
    },
    {
        text: 'Een uur zitten bij een aardig meisje vliegt voorbij als een minuut, maar een minuut op een brandende kachel lijkt wel een uur. Dat is relativiteit.',
        author: 'Albert Einstein',
        info: 'Duits - Amerikaans natuurkundige',
        life: '1879-1955'
    },
    {
        text: 'De moeilijkheid met de wereld is dat de dommen zelfverzekerd zijn en de verstandigen met twijfel vervuld.',
        author: 'Bertrand Russell',
        info: 'Engels filosoof, wiskundige en Nobelprijswinnaar literatuur (1950)',
        life: '1872-1970'
    },
    {
        text: 'De mens is alleen datgene wat hij van zichzelf maakt.',
        author: 'Jean-Paul Sartre',
        info: 'Frans schrijver, filosoof en Nobelprijswinnaar literatuur (1964)',
        life: '1905-1980'
    },
    {
        text: 'Geld is als mest; het is alleen goed als het wordt verspreid.',
        author: 'Francis Bacon',
        info: 'Engels filosoof en staatsman',
        life: '1561-1626'
    },
    {
        text: 'Bankoverval: een initiatief van amateurs. De echte professionals richten een bank op.',
        author: 'Bertolt Brecht',
        info: 'Duits - Oostenrijks schrijver',
        life: '1898-1956'
    },
    {
        text: 'Wie niet beweegt, bemerkt zijn ketens niet.',
        author: 'Rosa Luxemburg',
        info: 'Duits politica en filosofe',
        life: '1871-1919'
    }
];
const quoteEl = document.getElementById("quote");
const authorButtonEl = document.getElementById("authorButton");
const nextCitaatButtonEl = document.getElementById("nextCitaatButton");

//state: changes on user action
let availableCitaten = [];
let shownCitaten = [];

//quote is a String
function makeOneAuthorDiv(quote) {
    return `<div class="card my-2 p-2 ps-5">
                <h6>${quote.author}</h6>
                <div>${quote.info}</div>
                <div>Leefde van: ${quote.life}</div>
            </div>`;
}

//className is a String, visible is a boolean
function changeVisibility(className, visible) {
    const visibilityClasses = {true: "visible", false: "invisible"};
    const [oldCssClass, newCssClass] = [visibilityClasses[!visible], visibilityClasses[visible]];
    return className.split(" ").filter(attr => attr !== oldCssClass).join(" ") + " " + newCssClass;
}

//EXTRA: how can we be sure that the function changeVisibility works in all cases?
// function testChangeVisibility(className, visible, expectedResult) {
//     console.log(`TEST: changeVisibility("${className}", ${visible}) -- expect: "${expectedResult}"`);
//     const result = changeVisibility(className, visible);
//     console.log(`     ${result===expectedResult ? "OK": "ERROR!!!"} -- result: "${result}"`);
// }
//
// testChangeVisibility("", true, " visible"); //ok to have a leading space..
// testChangeVisibility("", false, " invisible"); //ok to have a leading space..
// testChangeVisibility("invisible", true, " visible");
// testChangeVisibility("visible", false, " invisible");
// testChangeVisibility("btn", true, "btn visible");
// testChangeVisibility("btn", false, "btn invisible");
// testChangeVisibility("btn invisible", true, "btn visible");
// testChangeVisibility("btn visible", false, "btn invisible");

//element is a HTML-element, visible is a boolean
function makeElementVisible(element, visible) {
    element.className = changeVisibility(element.className, visible);
}

function showAuthor() {
    quoteEl.innerHTML += makeOneAuthorDiv(shownCitaten[0]);
    makeElementVisible(nextCitaatButtonEl, true);
    makeElementVisible(authorButtonEl, false);
}

//quote is a String
function makeOneQuoteDiv(quote) {
    return `<div class="card my-2 p-2"><h5>${quote.text}</h5></div>`;
}

function showOneCitaat() {
    if (!availableCitaten.length) availableCitaten = [...CITATEN];
    const randomCitaatIndex = Math.floor(Math.random() * availableCitaten.length);
    shownCitaten = [availableCitaten[randomCitaatIndex], ...shownCitaten];
    availableCitaten = availableCitaten.toSpliced(randomCitaatIndex, 1);
    // console.log(randomCitaatIndex, shownCitaten, availableCitaten);

    quoteEl.innerHTML += makeOneQuoteDiv(shownCitaten[0]);
    makeElementVisible(nextCitaatButtonEl, false);
    makeElementVisible(authorButtonEl, true);
}

showOneCitaat();


