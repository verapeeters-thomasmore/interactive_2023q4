function kostDrukBoek(name, nrOfPages, amountToPrint, discountInPercentage = 0, minAmountForDiscount = 1000) {
    const totalPrice = amountToPrint * nrOfPages * 0.05;
    const discount = minAmountForDiscount <= amountToPrint ? totalPrice * discountInPercentage / 100 : 0;
    const priceWithDiscount = totalPrice - discount;
    const discountString = discount ? `(discount ${discount.toFixed(2)})` : ``;
    return `${name} afdrukken op ${amountToPrint} examplaren kost ${priceWithDiscount.toFixed(2)} ${discountString}`;
}

console.log(kostDrukBoek("De avonden", 234, 1850));
console.log(kostDrukBoek("De avonden", 200, 1000));
console.log(kostDrukBoek("De avonden", 200, 500));

console.log(kostDrukBoek("De avonden", 200, 1000, 10));
console.log(kostDrukBoek("De avonden", 200, 500, 20));
console.log(kostDrukBoek("De avonden", 200, 500, 20, 100));
console.log(kostDrukBoek("De avonden", 200, 500, 50, 100));
