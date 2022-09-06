const express = require("express");
const path = require("path");
const librosRouter = express.Router();

const librosController = require(path.join(
  __dirname,
  "..",
  "controllers/libros.controller"
));

librosRouter.get("/", librosController.getAll);

module.exports = librosRouter;
