const fs = require("fs/promises");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const { Container } = require(`./Classes/Container`);
const container = new Container(`./products.txt`, fs);

const getAllBooks = async (req, res) => {
  const books = await container.getAll();
  res.status(200).json(books);
};

const getRandomBook = async (req, res) => {
  const randomId = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  const randomProduct = await container.getById(randomId);
  res.status(200).json(randomProduct);
};

app.get("/productos", getAllBooks);
app.get("/productoRandom", getRandomBook);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
