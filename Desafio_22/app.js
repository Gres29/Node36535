const path = require("path");
const express = require("express");
const app = express();

const bookHandler = require(path.join(__dirname, "handlers/books.handler"));

app.use("/graphql/books", bookHandler);

module.exports = app;
