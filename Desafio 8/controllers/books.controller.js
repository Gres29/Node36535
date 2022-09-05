const path = require("path");
const { getAllDB, addDB } = require(path.join(
  __dirname,
  "..",
  "models/books.model"
));

async function add(book, io) {
  io.emit("new-book-ui", book);
  await addDB(book);
}

async function list(socket) {
  const books = await getAllDB();
  socket.emit("books", books);
}

module.exports = {
  add,
  list,
};