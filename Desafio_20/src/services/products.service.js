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
}

module.exports = ProductsService;
