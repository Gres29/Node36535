class Libro {
  constructor(id, name, price, img, autor, release_year) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.autor = autor;
    this.release_year = release_year;
  }
}

module.exports = {
  Libro,
};