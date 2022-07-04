const fs = require("fs");

const books = fs.readFileSync("data/books.json");
const parsedBooks = JSON.parse(books);

module.exports = parsedBooks;