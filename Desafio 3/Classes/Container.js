class Container {
  constructor(file, fs) {
    this.file = file;
    this.fs = fs;
  }

  async getById(id) {
    try {
      const parsedAlbums = await this.getAll();
      const isPresent = parsedAlbums.find((album) => album.id === id);
      return isPresent ? isPresent : null;
    } catch (error) {
      console.log(`Hubo un error al obtener un álbum por su id: ${error}`);
    }
  }

  async getAll() {
    try {
      const albums = await this.fs.readFile(this.file, `utf-8`);
      const parsedAlbums = JSON.parse(albums);
      return parsedAlbums;
    } catch (error) {
      console.log(`Hubo un error al obtener todos los álbumes: ${error}`);
    }
  }
}

module.exports = {
  Container,
};