const express = require("express");
const handlebarsRouter = express.Router();
const bookController = require("../controllers/book.controller");

handlebarsRouter.get("/", bookController.getNewBookFormHandleBars);
handlebarsRouter.get("/productos", bookController.getAll);
handlebarsRouter.post("/productos", bookController.add);

module.exports = handlebarsRouter;