class ProductsDaoMemory {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "El Gato Negro",
        description: "Novela de Edgar Alan Poe",
        price: 7500,
      },
      {
        id: 2,
        name: "Harry Potter y La Piedra Filosofal",
        description: "Novela de J.K.Rowling",
        price: 2700,
      },
      {
        id: 3,
        name: "1984",
        description: "Novela de George Orwell",
        price: 930,
      },
    ];
  }
  async getAll() {
    return this.products;
  }
  async save(product) {
    this.products.push(product);
    return product;
  }
}

module.exports = ProductsDaoMemory;
