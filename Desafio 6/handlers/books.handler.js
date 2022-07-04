const booksController = require(`../controllers/books.controller`);
const filesController = require("../controllers/files.controller");

function handleNewBook(socket, io) {
  socket.on("new-book", (book) => {
    booksController.add(book, io);
    filesController.save(book, "data/books.json");
  });
}

function handleAllBooks(socket) {
  socket.on("get-books", () => {
    booksController.list(socket);
  });
}

module.exports = { handleNewBook, handleAllBooks };