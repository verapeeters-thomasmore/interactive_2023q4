const PRICE_PER_PAGE = 0.05;

function pricePerBookWithDiscount0(nrOfPages) {
    return nrOfPages * PRICE_PER_PAGE;
}

function pricePerBookWithDiscount10(nrOfPages) {
    const nrOfPagesWithDiscount = Math.min(Math.max(0, nrOfPages - 500), 2000);
    const nrOfPagesWithoutDiscount = nrOfPages - nrOfPagesWithDiscount;
    return nrOfPagesWithoutDiscount * PRICE_PER_PAGE +
        nrOfPagesWithDiscount * PRICE_PER_PAGE * 0.9;
}

function pricePerBookWithDiscount25(nrOfPages) {
    const nrOfPagesWithDiscount = Math.max(0, nrOfPages - 2000);
    const nrOfPagesWithoutDiscount = nrOfPages - nrOfPagesWithDiscount;
    return nrOfPagesWithoutDiscount * PRICE_PER_PAGE +
        nrOfPagesWithDiscount * PRICE_PER_PAGE * 0.75;
}

function pricePerBook(nrOfPages, amountToPrint) {
    if (amountToPrint < 500)
        return pricePerBookWithDiscount0(nrOfPages) * amountToPrint;
    if (500 <= amountToPrint && amountToPrint < 2000)
        return pricePerBookWithDiscount10(nrOfPages) * amountToPrint;
    return pricePerBookWithDiscount25(nrOfPages) * amountToPrint;
}

function kostDrukBoek(name, nrOfPages, amountToPrint) {
    const pricePerBookAsString = pricePerBook(nrOfPages, amountToPrint).toFixed(2);
    return `${name} afdrukken op ${amountToPrint} examplaren kost ${pricePerBookAsString}`;
}

console.log(kostDrukBoek("De avonden", 234, 350)); //4095
console.log(kostDrukBoek("De avonden", 234, 1350)); //14799.33
console.log(kostDrukBoek("De avonden", 234, 3350)); //33488.33

