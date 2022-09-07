class ProductsDto {
  constructor(id, name, description, price, active) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.active = active;
  }
}

module.exports = ProductsDto;
