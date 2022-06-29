## Listado de los diferentes endpoints

- REST:

| HTTP   | ENDPOINT                              | RESULTADO              |
| ------ | ------------------------------------- | ---------------------- |
| GET    | http://localhost:8080/api/productos   | Listado de libros      |
| GET    | http://localhost:8080/api/productos/1 | Un Libro               |
| POST   | http://localhost:8080/api/productos/  | Agregar libro          |
| PUT    | http://localhost:8080/api/productos/1 | Actualizar libro       |
| DELETE | http://localhost:8080/api/productos/8 | Borrado libro          |

- HTML:

| HTTP | ENDPOINT                                  | RESULTADO              |
| ---- | ----------------------------------------- | ---------------------- |
| GET  | http://localhost:8080/productos/form.html | Formulario nuevo libro |

## Ejemplo de datos para agregar

    {
        "name": "El Principito",
        "price": 890.00,
        "img": "https://cdn.shopify.com/s/files/1/0557/0153/6957/products/D_879887-MLA41719682724_052020-O_900x.jpg?v=1623970100",
        "author": "Antoine de Saint-Exupéry",
        "publication_year": 1943,
    },
    {
        "name": "Dracula",
        "price": 4519.00,
        "img": "https://www.elquintolibro.es/wp-content/uploads/2020/07/71ziI-BLDSL.jpg",
        "author": "Bram Stoker",
        "publication_year": 1897
    }