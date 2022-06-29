const express = require("express");
const productosRouter = express.Router();

const productosController = require("../controller/producto.controller");

productosRouter.get("/", productosController.getAll);
productosRouter.get("/:id", productosController.getOne);
productosRouter.post("/", productosController.add);
productosRouter.put("/:id", productosController.update);
productosRouter.delete("/:id", productosController.softDelete);

module.exports = productosRouter;