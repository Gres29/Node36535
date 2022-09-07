const path = require("path");
const express = require("express");
const productsRouter = express.Router();

const productsController = require(path.join(
  __dirname,
  "..",
  "controllers/products.controller"
));

productsRouter.get("/", productsController.getAll);
productsRouter.post("/", productsController.save);

module.exports = productsRouter;
