const books = [
    {
        title: "Spring in action",
        author: "Craig Walls",
        price: 23.99
    },
    {
        title: "Test Driven Development",
        author: "Lasse Koskella",
        price: 61
    }];

function printBook(book) {
    console.log(`${book.title} by ${book.author} - price: ${book.price}EUR`);
}

console.log("------------- Books")
books.forEach((b) => printBook(b));

function printPropertyBook(book) {
    Object.keys(book).forEach(prop => console.log(`key = ${prop} , value = ${book[prop]}`));
}

console.log("------------- Book properties");
printPropertyBook(books[0]);


console.log("------------- Book prijsverhoging");

function verhoogPrijs(book) {
    book.verhoging = (book.price * 0.1).toFixed(1);
    book.price = (book.price * 1.1).toFixed(1);
}

console.log("voor de verhoging: ");
printBook(books[0]);
verhoogPrijs(books[0]);
console.log("na de verhoging: ");
printBook(books[0]);
