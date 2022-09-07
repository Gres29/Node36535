const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const books = require(path.join(__dirname, "..", "data/books.js"));

const bookHandler = express.Router();

const schema = buildSchema(`
type Query {
  getAll: [Book]
},
type Mutation {
  createOne(input: BookInput): [Book],
  updateOne(id: Int,input: BookInput): Book,
  deleteOne(id: Int): Book
},
type Book {
  id: Int,
  artist: String,
  book: String,
  active: Boolean
}
input BookInput {
  artist: String,
  book: String,
  active: Boolean
}
`);

const root = {
  getAll: () => {
    return books;
  },
  createOne: (input) => {
    const { input: newBook } = input;
    const newId = books.length + 1;
    newBook.id = newId;
    books.push(newBook);
    return books;
  },
  updateOne: ({ id, input }) => {
    const updatedBook = books.find((book) => book.id === id);
    const { artist, book, active } = input;
    updatedBook.artist = artist;
    updatedBook.book = book;
    updatedBook.active = active;
    return updatedBook;
  },
  deleteOne: ({ id }) => {
    const softDeletedBook = books.find((book) => book.id === id);
    softDeletedBook.active = false;
    return softDeletedBook;
  },
};

bookHandler.use(
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = bookHandler;
