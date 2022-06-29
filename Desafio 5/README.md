## Listado de los diferentes endpoints

- HTML:

| HTTP   | ENDPOINT                                  | RESULTADO                        |
| ------ | ----------------------------------------- | -------------------------------- |
| GET    | http://localhost:8080/pug                 | Formulario nuevo libro pug       |
| GET    | http://localhost:8080/handlebars          | Formulario nuevo libro handlebars|
| GET    | http://localhost:8080/ejs                 | Formulario nuevo libro ejs       |
| GET    | http://localhost:8080/pug/productos       | Lista de libros pug              |
| GET    | http://localhost:8080/handlebars/productos| Lista de libros handlebars       |
| GET    | http://localhost:8080/ejs/productos       | Lista de libros ejs              |
| POST   | http://localhost:8080/pug/productos       | Agregar nuevo libro pug          |
| POST   | http://localhost:8080/handlebars/productos| Agregar nuevo libro handlebars   |
| POST   | http://localhost:8080/ejs/productos       | Agregar nuevo libro ejs          |


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