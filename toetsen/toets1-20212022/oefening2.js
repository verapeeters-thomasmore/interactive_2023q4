const kostDrukBoek = (name, nrOfPages, amountToPrint) =>
    `${name} afdrukken op ${amountToPrint} examplaren kost ${(amountToPrint * nrOfPages * 0.05).toFixed(2)}`


console.log(kostDrukBoek("De avonden", 234, 1850));

