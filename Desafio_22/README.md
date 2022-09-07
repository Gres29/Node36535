# Instrucciones

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_22.
3. Ejecutar npm install.
4. Ejecutar npm install o npm run dev.
5. Abrir la URL http://localhost:8080/graphql/books en su navegador, ejecutar las queries/mutations listadas abajo.

## Queries y Mutations

```
{
  getAll {
    id,
    author,
    book,
    active
  }
}

mutation {
  createOne(input: {author: "Edgar Alan Poe", book: "El Gato Negro", active: true}) {
    id
  }
}

mutation {
  updateOne(id: 2, input: {author: "Edgar Alan Poe", book: "MyUpdatedBook", active: true}) {
    id
  }
}

mutation {
  deleteOne(id: 2) {
    id
  }
}


```
