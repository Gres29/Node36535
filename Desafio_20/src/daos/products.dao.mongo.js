const path = require("path");
const mongoose = require("mongoose");
const productsModel = require(path.join(
  __dirname,
  "..",
  "models/products.model"
));

class ProductsDaoMongo {
  constructor() {
    this.model = mongoose.model(
      productsModel.collectionName,
      productsModel.schema
    );
  }
  async getAll() {
    return await this.model.find();
  }
  async save(product) {
    const { name, description, price } = product;
    const newProduct = new this.model({
      name,
      description,
      price,
    });
    await newProduct.save();
    return newProduct;
  }
}

module.exports = ProductsDaoMongo;
