const express = require("express");
const pugRouter = express.Router();
const bookController = require("../controllers/book.controller");

pugRouter.get("/", bookController.getNewBookFormPug);
pugRouter.get("/productos", bookController.getAllPug);
pugRouter.post("/productos", bookController.add);

module.exports = pugRouter;