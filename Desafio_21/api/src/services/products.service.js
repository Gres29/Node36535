const path = require("path");
const PersistenceFactory = require(path.join(
  __dirname,
  "..",
  "daos/persistence.factory"
));

class ProductsService {
  constructor() {
    this.productsDao;
    this.init();
  }
  async init() {
    this.productsDao = await PersistenceFactory.getPersistence();
  }
  async getAll() {
    return await this.productsDao.getAll();
  }
  async save(product) {
    const newProduct = await this.productsDao.save(product);
    return newProduct;
  }
  async update(id, newProductData) {
    const updatedProduct = await this.productsDao.update(id, newProductData);
    return updatedProduct;
  }
  async softDelete(id) {
    const deletedProduct = await this.productsDao.softDelete(id);
    return deletedProduct;
  }
}

module.exports = ProductsService;
