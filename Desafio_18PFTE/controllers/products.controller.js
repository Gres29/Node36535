const path = require("path");
const productsDao = require(path.join(__dirname, "..", `daos/products.dao`));
const logger = require(path.join(__dirname, "..", "helpers/winston.helper"));

async function getAll(request, response) {
  try {
    const products = await productsDao.getAll();
    response.status(200).json({
      message: "Lista de libroes recuperada con éxito",
      products,
    });
  } catch (error) {
    logger.log(
      "error",
      `Hubo un error al recuperar la lista de libros ${error}`
    );
    response.status(404).json({
      message: "Hubo un error al recuperar la lista de libros",
    });
  }
}

async function getOne(request, response) {
  try {
    const id = request.params.id;
    const product = await productsDao.getOne(id);
    if (!product) {
      return response.status(404).json({
        message: "Libro no encontrado",
      });
    }
    response.status(200).json({
      message: "Libro encontrado con éxito",
      product,
    });
  } catch (error) {
    logger.log("error", `Hubo un error al buscar el libro ${error}`);
    response.status(404).json({
      message: "Hubo un error al buscar el libro",
    });
  }
}

async function addOne(request, response) {
  try {
    const newProduct = request.body;
    newProduct.active = true;
    newProduct.timestamp = new Date().toLocaleString("es-AR");
    const addedProduct = await productsDao.addOne(newProduct);
    response.status(201).json({
      message: "Nuevo libro creado con éxito",
      addedProduct,
    });
  } catch (error) {
    logger.log("error", `Hubo un error al crear el libro ${error}`);
    response.status(404).json({
      message: "Hubo un error al crear el libro",
    });
  }
}

async function addMany(request, response) {
  try {
    const newProducts = request.body;

    const addedProductsPromises = newProducts.map(async (newProduct) => {
      newProduct.active = true;
      newProduct.timestamp = new Date().toLocaleString("es-AR");
      const addedProduct = await productsDao.addOne(newProduct);
      return addedProduct;
    });

    Promise.allSettled(addedProductsPromises).then((promiseResults) => {
      const addedProducts = [];
      promiseResults.forEach((promiseResult) =>
        addedProducts.push(promiseResult.value)
      );
      let message = "";

      if (addedProducts.length > 1) {
        message = "Nuevos libros creados con éxito";
      } else {
        message = "Nuevo libro creado con éxito";
      }

      response.status(201).json({
        message,
        addedProducts,
      });
    });
  } catch (error) {
    logger.log("error", `Hubo un error al crear varios libros ${error}`);
    response.status(404).json({
      message: "Hubo un error al crear varios libros",
    });
  }
}

async function updateOne(request, response) {
  try {
    const id = request.params.id;
    const newProductData = request.body;
    const updatedProduct = await productsDao.updateOne(id, newProductData);
    if (!updatedProduct) {
      return response.status(404).json({
        message: "Libro no encontrado",
      });
    }
    response.status(200).json({
      message: "Libro modificado con éxito",
      updatedProduct,
    });
  } catch (error) {
    logger.log("error", `Hubo un error al actualizar el libro ${error}`);
    response.status(404).json({
      message: "Hubo un error al actualizar el libro",
    });
  }
}

async function deleteOne(request, response) {
  try {
    const id = request.params.id;
    const softDeletedProduct = await productsDao.deleteOne(id);
    if (!softDeletedProduct) {
      return response.status(404).json({
        message: "Libro no encontrado",
      });
    }
    response.status(200).json({
      message: "Libro borrado con éxito",
      softDeletedProduct,
    });
  } catch (error) {
    logger.log("error", `Hubo un error al borrar el libro ${error}`);
    response.status(404).json({
      message: "Hubo un error al borrar el libro",
    });
  }
}

module.exports = {
  getAll,
  getOne,
  addOne,
  addMany,
  updateOne,
  deleteOne,
};
