const booksController = require(`../controllers/books.controller`);

function handleNewBook(socket, io) {
  socket.on("new-book", async (book) => {
    await booksController.add(book, io);
  });
}

function handleAllBooks(socket) {
  socket.on("get-books", async () => {
    await booksController.list(socket);
  });
}

module.exports = { handleNewBook, handleAllBooks };