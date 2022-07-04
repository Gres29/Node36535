const books = require("../models/books.model");

function add(book, io) {
  io.emit("new-book-ui", book);
}

function list(socket) {
  socket.emit("books", books);
}

module.exports = {
  add,
  list,
};