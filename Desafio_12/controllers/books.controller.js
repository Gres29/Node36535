const path = require("path");
const products = require(path.join(__dirname, "..", "models/books.model"));

function getAll(request, response) {
  try {
    response.status(200).json({
      message: "Lista de productos recuperada con éxito",
      products,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al recuperar la lista de productos",
    });
  }
}

module.exports = {
  getAll,
};
