# Instrucciones

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_21.
3. Ejecutar "install-fullstack" para instalar las dependecias del cliente + api.
4. Configurar el .env como en el ejemplo.
5. Ejecutar "start-dev-fullstack" o "start-fullstack" Para iniciar el cliente + la api, advertencia:
   - Estos scripts tienen dificultades en Windows, seguir los siguientes pasos:
     - Abrir una terminal y ejecutar "start-dev-api" o "start-api".
     - Abrir otra terminal y ejecutar "start-dev-client" o "start-client".
6. Al iniciar el cliente se muestra por consola el resultado de las peticiones AXIOS.
7. Ejecutar "npm run test-api" para ejecutar los tests de la API.

## Ejemplo de .env para la API

- Guardar el .env en: /api

```
PERSISTANCE="MEMORY"
```
