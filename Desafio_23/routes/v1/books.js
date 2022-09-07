const path = require("path");
const books = require(path.join(__dirname, "..", "..", "data/books"));

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 */
async function routes(fastify) {
  fastify.get("/books", async (request, reply) => {
    reply
      .code(200)
      .send({ message: "Lista de libros recuperada con éxito", books });
  });
  fastify.post("/books", async (request, reply) => {
    const newBook = request.body;
    const newId = books.length + 1;
    newBook.id = newId;
    books.push(newBook);
    reply
      .code(200)
      .send({ message: "Nuevo libro agregado con éxito", books });
  });
  fastify.put("/books/:id", async (request, reply) => {
    const id = Number(request.params.id);
    const newData = request.body;
    const { author, book } = newData;
    const updatedBook = books.find((book) => book.id === id);
    updatedBook.author = author;
    updatedBook.book = book;
    reply
      .code(200)
      .send({ message: "Libro actualizado con éxito", updatedBook });
  });
  fastify.delete("/books/:id", async (request, reply) => {
    const id = Number(request.params.id);
    const deletedBook = books.find((book) => book.id === id);
    deletedBook.active = false;
    reply.code(200).send({ message: "Libro borrado con éxito", deletedBook });
  });
}

module.exports = routes;
