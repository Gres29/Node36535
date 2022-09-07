const mongoose = require("mongoose");

const collectionName = "Product";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = {
  collectionName,
  schema,
};
