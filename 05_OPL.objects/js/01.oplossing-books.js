/**
 * Oefening 1.1
 */
const book1 = {
  title: "Spring in action",
  author: "Craig Walls",
  price: 23.99,
};

const book2 = {
  title: "Het leven van een loser 2",
  author: "Jeff Kinney",
  price: 60,
};

console.log(book1);

/**
 * Oefening 1.2
 */
function printBook(book) {
  console.log(`${book.title} by ${book.author} - price: € ${book.price.toFixed(2)}`);
}

printBook(book1);
printBook(book2);

/**
 * Oefening 1.3
 */
[book1, book2].forEach((book) => printBook(book));

/**
 * Oefening 1.4
 */
Object.entries(book1).forEach(([key, value]) => console.log(`${key} --> ${value}`));
