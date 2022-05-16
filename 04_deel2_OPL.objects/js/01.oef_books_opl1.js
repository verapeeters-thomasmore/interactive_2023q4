const book1 = {
    title: "Het leven van een loser",
    price: 16.99,
    author: "Jeff Kinney"
};

const book2 = {
    title: "Het leven van een loser 2",
    price: 16.99,
    author: "Jeff Kinney"
};

console.log(book1)


console.log(`--- Books`)

function printBook(book) {
    console.log(`${book.title} by ${book.author} - price: ${book.price.toFixed(1)}EUR`);
}

printBook(book1);
printBook(book2);

console.log(`--- Books`)
const bookArray = [book1, book2];

//printBook returnt niks --> undefined
bookArray.forEach(b => console.log(printBook(b)));

Object.keys(book1).forEach(key => console.log(`key = ${key}, value = ${book1[key]} `));

function verhoogPrijs(book) {
    book.verhoging = book.price * 0.1;
    book.price = book.price + book.verhoging;
}

const book3 = {
    title: "Het leven van een loser 3",
    price: 24,
    author: "Jeff Kinney"
};
book3.price = 40;
// book3 = book2;


printBook(book3);
verhoogPrijs(book3);
printBook(book3);
