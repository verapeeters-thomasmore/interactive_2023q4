function kostDrukBoek(name, nrOfPages, amountToPrint) {
    const totalPrice = amountToPrint * nrOfPages * 0.05;
    return `${name} afdrukken op ${amountToPrint} examplaren kost ${totalPrice.toFixed(2)}`;
}

console.log(kostDrukBoek("De avonden", 234, 1850));

