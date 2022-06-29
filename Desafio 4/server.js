const express = require("express");
const app = express();
const port = 8080;

const productosRouter = require("./routes/productos.route");
const productosRouterAPI = require("./routes/productos.route.api");
app.use(express.json());

app.use("/api/productos", productosRouterAPI);
app.use("/productos", productosRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}. URL: http://localhost:${port}`);
});