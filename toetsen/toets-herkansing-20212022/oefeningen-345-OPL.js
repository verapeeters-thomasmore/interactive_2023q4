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
        text: 'Als we wisten wat we deden, heette het geen onderzoek.',
        author: 'Albert Einstein',
        info: 'Duits - Amerikaans natuurkundige',
        life: 'Leefde van: 1879-1955'
    },
    {
        text: 'Er zijn veel manieren om te doden. Men kan iemand een mes in zijn buik steken, iemand het brood uit de mond stoten, iemand die ziek is niet behandelen, iemand in een krot stoppen, iemand zich dood laten werken, oorlog voeren enzovoort. Het merendeel van deze methoden is in ons land niet verboden.',
        author: 'Bertolt Brecht',
        info: 'Duits - Oostenrijks schrijver',
        life: 'Leefde van: 1898-1956'
    },
    {
        text: 'De Hel, dat zijn de anderen.',
        author: 'Jean-Paul Sartre',
        info: 'Frans schrijver, filosoof en Nobelprijswinnaar literatuur (1964)',
        life: 'Leefde van: 1905-1980'
    },
    {
        text: 'Wie lacht, heeft het vreselijke nieuws nog niet gehoord.',
        author: 'Bertolt Brecht',
        info: 'Duits - Oostenrijks schrijver',
        life: 'Leefde van: 1898-1956'
    },
    {
        text: 'Hoe wilt u de dood begrijpen? U begrijpt het leven nog niet eens.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
    {
        text: 'Twee dingen zijn oneindig, het universum, en menselijke domheid. Maar van het universum weet ik het nog niet helemaal zeker.',
        author: 'Albert Einstein',
        info: 'Duits - Amerikaans natuurkundige',
        life: 'Leefde van: 1879-1955'
    },
    {
        text: 'Onze grootste overwinning is niet dat we nooit falen, maar dat we telkens als we struikelen weer opstaan.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
    {
        text: 'Vriendschap verdubbelt vreugde en halveert smart.',
        author: 'Francis Bacon',
        info: 'Engels filosoof en staatsman',
        life: 'Leefde van: 1561-1626'
    },
    {
        text: 'Vrijheid is vrijheid voor de andersdenkenden.',
        author: 'Rosa Luxemburg',
        info: 'Duits politica en filosofe',
        life: 'Leefde van: 1871-1919'
    },
    {
        text: 'Een wijs man zoekt het in zichzelf, de dwaas zoekt het in anderen.',
        author: 'Confucius',
        info: 'Chinees filosoof',
        life: 'Leefde van: 551 v.C. - 479 v.C.'
    },
];

console.log({CITATEN});

function citatenSameAuthor(citaten, index) {
    return citaten.filter(c => c.author === CITATEN[index].author && c.text !== CITATEN[index].text).map(c => c.text);
}

console.log("----- zelfde auteur als citaat 0 (Da Vinci)")
console.log(citatenSameAuthor(CITATEN, 0));
console.log("----- zelfde auteur als citaat 1 (Einstein)")
console.log(citatenSameAuthor(CITATEN, 1));
console.log("----- zelfde auteur als citaat 2 (Confucius)")
console.log(citatenSameAuthor(CITATEN, 2));

function citatenWithKeyword(citaten, keyword) {
    return citaten.filter(c => c.text.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())).map(c => `${c.text} (door ${c.author})`);
}

console.log("----- citaten met keyword onze");
console.log(citatenWithKeyword(CITATEN, "over"));
console.log("----- citaten met keyword hoe");
console.log(citatenWithKeyword(CITATEN, "hoe"));

function citaatFormatted(citaten, index, maxLength = 50) {
    return ( {
        text: `${citaten[index]?.text.substr(0, maxLength) || "bestaat niet"}${citaten[index]?.text.length > maxLength ? "..." : ""}`,
        author: citaten[index]?.author
    });
}

console.log("----- citaat 12 formatted default");
console.log(citaatFormatted(CITATEN, 12));
console.log("----- citaat 12 formatted max 10");
console.log(citaatFormatted(CITATEN, 12, 10));
console.log("----- citaat 0 formatted default");
console.log(citaatFormatted(CITATEN, 0));
console.log("----- citaat 5 formatted max 30");
console.log(citaatFormatted(CITATEN, 5, 30));
console.log("----- citaat 55 formatted default");
console.log(citaatFormatted(CITATEN, 55));
