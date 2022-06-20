//Alumno: Amoretti Federico.
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.apellido}, ${this.nombre}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    const libro = {
      nombre,
      autor,
    };

    this.libros.push(libro);
  }

  getBookNames() {
    return this.libros.map(({ nombre }) => nombre);
  }
}

const usuario = new Usuario(`Federico`, `Amoretti`, [], []);
console.log(usuario.getFullName());
usuario.addMascota(`Pandora`);
console.log(usuario.countMascotas());
usuario.addBook(`The Tell-Tale Heart`, `Edgar Allan Poe`);
console.log(usuario.getBookNames());