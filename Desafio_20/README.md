# Instrucciones

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_20.
3. Ejecutar "npm install" para instalar las dependecias.
4. Configurar el .env como en el ejemplo.
5. Ejecutar "npm run dev" o "npm start".
6. Con Postman u otro software similar, probar los siguientes end points:
   - 6.1. Obtener todos los productos: GET => http://localhost:8080/api/products
   - 6.2. Agregar un nuevo producto: POST => http://localhost:8080/api/products
     - 6.2.1. Configurar el POST con el JSON de ejemplo

## Ejemplo de .env

```
PERSISTANCE="MEMORY" o PERSISTANCE="MONGO"
MONGO_CONNECTION_STRING="my_mongo_connection_string"
MONGO_DATABASE="my_mongo_database"
```

## Ejemplo de post

```
{
        "id": 3,
        "name": "El Gato Negro",
        "description": "Novela Edgar Alan Poe",
        "price": 750
}
```
