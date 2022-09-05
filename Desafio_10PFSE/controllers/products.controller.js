const path = require("path");
const engine = require(path.join(__dirname, "..", "/helpers/engine.helper"));
const productsDao = require(path.join(
  __dirname,
  "..",
  `daos/products.dao.${engine}`
));

async function getAll(request, response) {
  try {
    const products = await productsDao.getAll();
    response.status(200).json({
      message: "Lista de libros recuperada con éxito",
      products,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al recuperar la lista de libros",
    });
  }
}

async function getOne(request, response) {
  try {
    const id = Number(request.params.id);
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
    response.status(404).json({
      message: "Hubo un error al buscar el libro",
    });
  }
}

async function addOne(request, response) {
  try {
    const newProduct = request.body;
    newProduct.id = await autoIncrementId();
    newProduct.active = true;
    newProduct.timestamp = new Date().toLocaleString("es-AR");
    const addedProduct = await productsDao.addOne(newProduct);
    response.status(201).json({
      message: "Nuevo libro creado con éxito",
      addedProduct,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al crear el libro",
    });
  }
}

async function addMany(request, response) {
  try {
    const newProducts = request.body;

    const addedProductsPromises = newProducts.map(async (newProduct) => {
      newProduct.id = await autoIncrementId();
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
    response.status(404).json({
      message: "Hubo un error al crear muchos libros",
    });
  }
}

async function autoIncrementId() {
  try {
    const products = await productsDao.getAll();
    const nextId = Math.max(...products.map(({ id }) => Number(id) + 1));
    const id = products.length ? nextId : 1;
    return id;
  } catch (error) {
    return `Hubo un error al incrementar el id del producto`;
  }
}

async function updateOne(request, response) {
  try {
    const id = Number(request.params.id);
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
    response.status(404).json({
      message: "Hubo un error al actualizar el libro",
    });
  }
}

async function deleteOne(request, response) {
  try {
    const id = Number(request.params.id);
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
