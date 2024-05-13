const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 15.99 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 18.99 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 19.99 },
  { title: "1984", author: "George Orwell", price: 14.99 },
  { title: "Animal Farm", author: "George Orwell", price: 12.99 },
  { title: "Brave New World", author: "Aldous Huxley", price: 17.99 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", price: 16.99 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", price: 22.99 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 25.99 },
  { title: "The Da Vinci Code", author: "Dan Brown", price: 20.99 },
];

const increasePrice = (book) => ({
  ...book,
  price: +(book.price * 1.1).toFixed(1),
  lastIncrease: +(book.price * 0.1).toFixed(1),
});

const booksWithIncreasedPrice = books.map(priceIncrease);

console.log("Price increase of the first book: ", increasePrice(books[0]));
console.log("Price increase of the last book: ", increasePrice(books[books.length - 1]));
console.log("Price increase of all books: ", booksWithIncreasedPrice);
