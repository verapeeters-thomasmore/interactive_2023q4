function kostDrukBoek(name, nrOfPages, amountToPrint, discountInPercentage = 0, minAmountForDiscount = 1000) {
    const totalPrice = amountToPrint * nrOfPages * 0.05;
    const discount = minAmountForDiscount <= amountToPrint ? totalPrice * discountInPercentage / 100 : 0;
    const discountString = discount ? `(discount ${discount})` : "";
    const totalPriceWithDiscount = totalPrice - discount;
    return `${name} afdrukken op ${amountToPrint} examplaren kost ${totalPriceWithDiscount.toFixed(2)} ${discountString}`;
}

console.log(kostDrukBoek("De avonden", 234, 1850)); //21645.00
console.log(kostDrukBoek("De avonden", 200, 1000)); //10000.00
console.log(kostDrukBoek("De avonden", 200, 500)); //5000.00
console.log(kostDrukBoek("De avonden", 200, 1000, 10)); //9000.00 - discount 1000
console.log(kostDrukBoek("De avonden", 200, 500, 20)); //5000.00
console.log(kostDrukBoek("De avonden", 200, 500, 20, 100)); //4000.00 - discount 1000
console.log(kostDrukBoek("De avonden", 200, 500, 50, 100)); //2500.00 - discount 2500

