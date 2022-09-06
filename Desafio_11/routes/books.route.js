const express = require("express");
const path = require("path");
const booksRouter = express.Router();

const booksController = require(path.join(
  __dirname,
  "..",
  "controllers/books.controller"
));

booksRouter.get("/", booksController.getAll);

module.exports = booksRouter;
