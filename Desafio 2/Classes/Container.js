class Container {
  constructor(file, fs) {
    this.file = file;
    this.fs = fs;
  }

  async initialize() {
    try {
      const hasContent = await this.checkContent();
      if (!hasContent) {
        this.fs.appendFile(this.file, JSON.stringify([]));
      }
    } catch (error) {
      console.log(`Hubo un error al inicializar el archivo: ${error}`);
    }
  }

  async checkContent() {
    try {
      const hasContent = await this.fs.readFile(this.file, `utf-8`);
      return hasContent;
    } catch (error) {
      console.log(`Hubo un error al revisar el contenido: ${error}`);
    }
  }
  async save(book) {
    const { id } = book;
    try {
      const isPresent = await this.getById(id);
      if (!isPresent) {
        const parsedBooks = await this.getAll();
        parsedBooks.push(book);
        this.fs.writeFile(this.file, JSON.stringify(parsedBooks));
        return `Ha agregado el id: ${id} a la lista de libros`;
      } else {
        return `El libro con id: ${id}, ya existe`;
      }
    } catch (error) {
      console.log(`Hubo un error al guardar un libro en el archivo: ${error}`);
    }
  }

  async getById(id) {
    try {
      const parsedBooks = await this.getAll();
      const isPresent = parsedBooks.find((book) => book.id === id);
      return isPresent ? isPresent : null;
    } catch (error) {
      console.log(`Hubo un error al buscar un libro por su id: ${error}`);
    }
  }

  async getAll() {
    try {
      const books = await this.fs.readFile(this.file, `utf-8`);
      const parsedBooks = JSON.parse(books);
      return parsedBooks;
    } catch (error) {
      console.log(`Hubo un error al buscar todos los libros: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const isPresent = await this.getById(id);
      if (isPresent) {
        const parsedBooks = await this.getAll();
        const bookIndex = parsedBooks.findIndex((book) => book.id === id);
        parsedBooks.splice(bookIndex, 1);
        console.log(`Se ha eliminado el libro con id: ${id}`);
        this.fs.writeFile(this.file, JSON.stringify(parsedBooks));
      }
    } catch (error) {
      console.log(`Hubo un error al eliminar un libro por su id: ${error}`);
    }
  }

  async deleteAll() {
    try {
      const parsedBooks = await this.getAll();
      const preDeletedQuantity = parsedBooks.length;
      if (parsedBooks.length > 0) {
        parsedBooks.length = 0;
        this.fs.writeFile(this.file, JSON.stringify(parsedBooks));
        console.log(`Se han eliminado: ${preDeletedQuantity} libros`);
      } else {
        console.log(`Nada para borrar...`);
      }
    } catch (error) {
      console.log(`Hubo un error al eliminar todos los libros: ${error}`);
    }
  }
}

module.exports = {
  Container,
};