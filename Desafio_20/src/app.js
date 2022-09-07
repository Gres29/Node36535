const express = require("express");
const app = express();

const productsRouter = require(`${__dirname}/routes/products.route`);

app.use(express.json());
app.use("/api/products", productsRouter);

module.exports = app;
