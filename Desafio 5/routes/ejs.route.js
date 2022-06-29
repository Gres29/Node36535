const express = require("express");
const ejsRouter = express.Router();
const bookController = require("../controllers/book.controller");

ejsRouter.get("/", bookController.getNewBookFormEJS);
ejsRouter.get("/productos", bookController.getAllEJS);
ejsRouter.post("/productos", bookController.add);

module.exports = ejsRouter;