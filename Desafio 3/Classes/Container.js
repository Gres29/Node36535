class Container {
  constructor(file, fs) {
    this.file = file;
    this.fs = fs;
  }

  async getById(id) {
    try {
      const parsedBooks = await this.getAll();
      const isPresent = parsedBooks.find((book) => book.id === id);
      return isPresent ? isPresent : null;
    } catch (error) {
      console.log(`Hubo un error al obtener un libro por su id: ${error}`);
    }
  }

  async getAll() {
    try {
      const books = await this.fs.readFile(this.file, `utf-8`);
      const parsedBooks = JSON.parse(books);
      return parsedBooks;
    } catch (error) {
      console.log(`Hubo un error al obtener todos los libros: ${error}`);
    }
  }
}

module.exports = {
  Container,
};
